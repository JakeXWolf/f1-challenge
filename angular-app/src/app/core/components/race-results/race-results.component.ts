import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data-service';

import { Driver } from '../../models/driver';
import { ConstructorResults } from '../../models/constructor-results';
import { Constructor } from '../../models/constructor';
import { User } from '../../models/user';
import { RaceResult } from '../../models/race-results';

@Component({
  selector: 'app-race-results',
  standalone: false,
  templateUrl: './race-results.component.html',
  styleUrl: './race-results.component.scss'
})
export class RaceResultsComponent {
  @Input() drivers: Driver[] = [];
  @Input() users: User[] = [];

  // lineup may not be needed
  constructorLineup: Constructor[] = [];
  constructorResults: ConstructorResults[] = [];

  results: RaceResult[] = [];

  displayedColumns: string[] = ['place', 'UserName', 'Driver1', 'Driver2', 'TotalPoints'];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.users.length === 0) {
      console.log('Users input is empty');

      this.getConstructorLineupByRace();

      //this.getUsersAndSetUpConstructors();
    }

    if (this.drivers.length === 0) {
      console.log('Drivers input is empty');
      this.getDrivers();
    }
  }

  /// creates object with only users and no drivers
  private getUsersAndSetUpConstructors(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users; 
      
      // Initialize constructorLineup with empty fields
      const randomizedUsers = this.users.sort(() => Math.random() - 0.5);
      randomizedUsers.forEach(user => {
        this.constructorLineup.push({
          UserName: user.Name,
          Driver1: { Number: 0, Name: '', ChampionshipPosition: 0 },
          Driver2: { Number: 0, Name: '', ChampionshipPosition: 0 },
          DriverNumbers: [],
          TotalPoints: 0
        });
      });
    });
  }

  private getDrivers(): void { 
    this.dataService.getDriverList().subscribe(drivers => {
      this.drivers = drivers; 
    });
  }

  parseRaceResults(raw: string): RaceResult[] {
    const lines = raw
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '' && line !== 'POS.' && line !== 'NO.' && line !== 'DRIVER' && line !== 'TEAM' && line !== 'LAPS' && line !== 'TIME / RETIRED' && line !== 'PTS.' && line !== 'NC' && line !== 'DNS');
  
    const results: RaceResult[] = [];
  
    for (let i = 0; i + 6 < lines.length; i += 7) {
      const result: RaceResult = {
        position: lines[i],
        number: lines[i + 1],
        driver: lines[i + 2],
        car: lines[i + 3],
        laps: parseInt(lines[i + 4], 10),
        timeOrRetired: lines[i + 5],
        points: parseInt(lines[i + 6], 10)
      };
  
      results.push(result);
    }
  
    console.log('✅ Cleaned Parsed Results:', results);
    return results;
  }
  
  
  

  /*
  parseRaceResults(data: string) {
    const rows = data.trim().split('\n');
  
    for (let i = 7; i < rows.length; i += 7) {  // 7 lines per entry
      const result: RaceResult = {
        position: rows[i].trim(),
        number: rows[i + 1].trim(),
        driver: rows[i + 2].trim(),
        car: rows[i + 3].trim(),
        laps: parseInt(rows[i + 4].trim(), 10),
        timeOrRetired: rows[i + 5].trim(),
        points: parseInt(rows[i + 6].trim(), 10)
      };
  
      this.results.push(result);
    }
  
    console.log(JSON.stringify(this.results, null, 2));
  
    return this.results;
  }
*/
  private getConstructorLineupByRace(): void {
    // TODO: Passing in 1 for now, but this should be dynamic
    this.dataService.getConstructorLineupByRace(1).subscribe(constructorLineup => {
      this.constructorLineup = constructorLineup;

      this.constructorResults = this.constructorLineup.map((constructor, index) => {
        return {
          UserName: constructor.UserName,
          Driver1: constructor.Driver1,
          Driver2: constructor.Driver2,
          DriverNumbers: constructor.DriverNumbers,
          ResultMessage: '',
          TotalPoints: constructor.TotalPoints,
          PreviousRanking: index + 1,
          CurrentRanking: index + 1,
        };
      });
    });
  }

  private getRaceResults(): void {
    this.dataService.getRaceResults().subscribe(results => {
      this.results = results;
    });
  }





  rawRaceData: string = ''; // bound to <textarea>
  isSprint: boolean = false; // manually toggleable, or you can infer from context
  
  displayedColumnsExtended: string[] = [
    'CurrentRanking',
    'UserName',
    'Driver1',
    'Driver2',
    'TotalPoints',
    'ResultMessage'
  ];


  onScoreAndPreview(isSprint: boolean) {
    const parsedResults = this.parseRaceResults(this.rawRaceData);
    this.results = parsedResults;

    console.log('Parsed Results:', JSON.stringify(parsedResults, null, 2));
  
    this.constructorResults = this.scoreConstructorResults(this.constructorLineup, parsedResults, isSprint);
  
    this.constructorResults.sort((a, b) => b.TotalPoints - a.TotalPoints);
    this.constructorResults.forEach((c, idx) => {
      c.CurrentRanking = idx + 1;
    });

    console.log('Scored Constructor Results:', JSON.stringify(this.constructorResults, null, 2));
  }
  


/*
  onScoreAndPreview(isSprint: boolean) {
    this.dataService.getRaceResults().subscribe(results => {
      this.results = results;
      this.constructorResults = this.scoreConstructorResults(this.constructorLineup, results, isSprint);
  
      // Sort and assign rankings
      this.constructorResults.sort((a, b) => b.TotalPoints - a.TotalPoints);
      this.constructorResults.forEach((c, idx) => {
        c.CurrentRanking = idx + 1;
      });
    });
  }
  */
  



  private scoreConstructorResults(
    lineup: Constructor[],
    results: RaceResult[],
    isSprint: boolean
  ): ConstructorResults[] {
  
    console.log('lineup:', JSON.stringify(lineup, null, 2));
    console.log('results:', JSON.stringify(results, null, 2));
  
    const pointsMap: Record<string, number> = {};
  
    if (!isSprint) {
      const points = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      results.slice(0, 10).forEach((r, idx) => {
        pointsMap[r.number] = points[idx];
      });
    }
  
    return lineup.map((constructor) => {
      let total = 0;
      let messages: string[] = [];
  
      const isBestOfRest = constructor.Driver2?.Name === 'Best Of The Rest';
      const allDriverNumbers = [...constructor.DriverNumbers];
  
      if (isBestOfRest) {
        const primaryDriverNum = constructor.Driver1.Number;
  
        const botrDriverNumbers = allDriverNumbers.filter(
          num => num !== primaryDriverNum
        );
  
        const borResults = botrDriverNumbers
          .map(num => results.find(r => parseInt(r.number, 10) === num))
          .filter((r): r is RaceResult => !!r);
  
        const bestBorResult = borResults
          .slice()
          .sort((a, b) => parseInt(a.position) - parseInt(b.position))[0];
  
        for (const num of allDriverNumbers) {
          const result = results.find(r => parseInt(r.number, 10) === num);
          if (!result) {
            messages.push(`+0 [#${num}]`);
            continue;
          }
  
          let score = 0;
  
          if (isSprint) {
            score = result.points;
          } else {
            if (num === primaryDriverNum) {
              // Regular scoring for primary driver
              score = pointsMap[result.number] ?? 0;
            } else {
              // Only the best of the rest gets points
              score = result.number === bestBorResult?.number ? (pointsMap[result.number] ?? 0) : 0;
            }
          }
  
          messages.push(`+${score} ${result.driver} #${result.number} (P${result.position})`);
          total += score;
        }
      } else {
        // Normal 2-driver constructor
        for (const driverNum of allDriverNumbers) {
          const result = results.find(r => parseInt(r.number, 10) === driverNum);
          let score = 0;
  
          if (result) {
            score = isSprint ? result.points : (pointsMap[result.number] ?? 0);
            messages.push(`+${score} ${result.driver} #${result.number} (P${result.position})`);
          } else {
            messages.push(`+0 [#${driverNum}]`);
          }
  
          total += score;
        }
      }
  
      return {
        ...constructor,
        TotalPoints: total,
        ResultMessage: messages.join(', '),
        PreviousRanking: 0,
        CurrentRanking: 0
      };
    });
  }
  
  
  
  



  


  saveChallengeResults(raceNum: number, isSprint: boolean): void {
    const raceId = `${raceNum}${isSprint ? 'SP' : 'GP'}`;

    this.dataService.saveRaceChallengeResults(raceId, this.constructorResults).subscribe({
      next: () => console.log('Challenge results saved'),
      error: err => console.error('Failed to save challenge results:', err)
    });
    
  }
  







}
