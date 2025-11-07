import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data-service';

import { Driver } from '../../models/driver';
import { ConstructorResults } from '../../models/constructor-results';
import { Constructor } from '../../models/constructor';
import { User } from '../../models/user';
import { RaceResult } from '../../models/race-results';
import { GrandPrix } from '../../models/race';
import { RaceId, buildRaceId } from '../../utils';

@Component({
  selector: 'app-race-results',
  standalone: false,
  templateUrl: './race-results.component.html',
  styleUrl: './race-results.component.scss'
})
export class RaceResultsComponent {
  @Input() drivers: Driver[] = [];
  @Input() users: User[] = [];

  @Input() raceNum!: number;
  //@Input() isSprint = false;
  @Input() showScoringTools = true;
  private _race!: GrandPrix;
  isSprint: boolean = false;
  raceId: string = '';

  @Input()
  set race(value: GrandPrix) {
    this._race = value;

    this.checkIfSprint();

    this.raceId = buildRaceId(this.race.RaceNum, this.isSprint)

    this.hydrateRaceData();
  }
  
  private hydrateRaceData(): void {
    if (!this.race.IsScored) {
      this.getRaceLineups();
    } else {
      this.getRaceChallengeResults();
      this.getRaceResults();
    }
  }

  get race(): GrandPrix {
    return this._race;
  }

  private checkIfSprint(): void {
    if (this.race && this.race.HasSprint && this.race.Date && this.race.SprintDate) {
      this.isSprint = this.race.Name.toLowerCase().includes('sprint');
    }
  }

  @Input() isAdminMode: boolean = false; // Toggle for admin mode

  // lineup may not be needed
  constructorLineup: Constructor[] = [];
  constructorResults: ConstructorResults[] = [];

  results: RaceResult[] = [];

  displayedColumns: string[] = ['place', 'UserName', 'Driver1', 'Driver2', 'TotalPoints'];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    /*if (this.drivers.length === 0) {
      console.log('Drivers input is empty');
      this.getDrivers();
    }*/
  }

/* dont think this is needed anymore
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
*/

/*
  private getDrivers(): void { 
    this.dataService.getDriverList().subscribe(drivers => {
      this.drivers = drivers; 
    });
  }
*/

  onSyncScores(): void {
    console.log('Syncing scores... constructorResults:', this.constructorResults);
    console.log('Syncing scores... users:', this.users);

    this.constructorResults.forEach((constructor) => {
      constructor.TotalPoints = this.users.find(user => user.Name === constructor.UserName)?.TotalPoints || 0;
    });

    // Ensure constructorLineup is ordered
    this.constructorResults.sort((a, b) => b.TotalPoints - a.TotalPoints);

    this.constructorResults.forEach((constructor, index) => {
      constructor.CurrentRanking = index + 1;
    });

    let asdf = [...this.constructorResults];

    this.constructorResults = [];
    this.constructorResults = asdf;

    console.log('Scores synced:', this.constructorResults);
    console.log('Users after syncing:', this.users);
  }


  parseRaceResults(raw: string): RaceResult[] {
    const lines = raw
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '');
  
    const results: RaceResult[] = [];
  
    let i = 0;
    while (i < lines.length) {
      // Defensive: check that at least 7 lines remain
      if (i + 6 >= lines.length) {
        console.warn(`Skipping incomplete entry at line ${i}:`, lines.slice(i));
        break;
      }
  
      const pos = lines[i];
      const number = lines[i + 1];
      const driver = lines[i + 2];
      const car = lines[i + 3];
      const lapsRaw = lines[i + 4];
      const time = lines[i + 5];
      const pointsRaw = lines[i + 6];
  
      const laps = lapsRaw === 'NC' || lapsRaw === 'DNS' || lapsRaw === 'DNF' ? 0 : parseInt(lapsRaw, 10);
      const points = parseInt(pointsRaw, 10);
  
      results.push({
        position: pos,
        number: number,
        driver: driver,
        car: car,
        laps: laps,
        timeOrRetired: time,
        points: isNaN(points) ? 0 : points
      });
  
      i += 7;
    }
  
    console.log('✅ Parsed Race Results:', results);
    return results;
  }
  

  /* was breaking from dnf
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
  }*/
  
  
  

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
  private getRaceLineups(): void { 
    this.dataService.getRaceLineups(this.raceId).subscribe({
      next: (lineup: Constructor[]) => { this.constructorLineup = lineup;

        this.constructorResults = this.constructorLineup.map((constructor, index) => {
          return {
            UserName: constructor.UserName,
            Driver1: constructor.Driver1,
            Driver2: constructor.Driver2,
            DriverNumbers: constructor.DriverNumbers,
            ResultMessage: '',
            TotalPoints: constructor.TotalPoints,
            PreviousRanking: index + 1,
            CurrentRanking: 0,
            TotalGained: 0,
          };
        });

        this.constructorResults.sort((a, b) => b.TotalPoints - a.TotalPoints);
      },
      error: (err: any) => console.error('Error getting lineup:', err),
      complete: () => {
        console.log('Race lineup missing or empty:', this.race);
        // if (this.constructorLineup.length === 0) {
        //   this.getUsersAndSetUpConstructors();
        // }
      }
    });
  }

  private getRaceChallengeResults(): void {
    this.dataService.getRaceChallengeResults(this.raceId).subscribe(results => {
      this.constructorResults = results;
      this.constructorResults.sort((a, b) => b.TotalPoints - a.TotalPoints);
    });
  }

  private getRaceResults(): void {
    this.dataService.getRaceResults(this.raceId).subscribe(results => {
      this.results = results;
    });
  }
  





  rawRaceData: string = ''; // bound to <textarea>

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
  
    this.constructorResults = this.scoreConstructorResults(this.constructorResults, parsedResults, isSprint);

    this.constructorResults.sort((a, b) => b.TotalPoints - a.TotalPoints);
    this.constructorResults.forEach((c, idx) => {
      c.CurrentRanking = idx + 1;

      // Update total points for users where Name matches
      const user = this.users.find(user => user.Name === c.UserName);
      if (user) {
        user.TotalPoints = c.TotalPoints; // Assuming TotalPoints is a property of user
      }
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
  
    return lineup.map((constructor, index) => {
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
          .map(num => results.find(r => parseInt(r.number, 10) === num && r.position !== 'NC' && r.position !== 'DNF' && r.position !== 'DNS' && r.position !== 'DSQ'))
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
              const isBest = parseInt(result.number, 10) === parseInt(bestBorResult?.number ?? '', 10);
              score = isBest ? (pointsMap[result.number] ?? 0) : 0;
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
        TotalPoints: total + (constructor.TotalPoints || 0),
        ResultMessage: messages.join(', '),
        PreviousRanking: index + 1,
        CurrentRanking: 0,
        TotalGained: total
      };
    });
  }
  
  
  
  



  
/*

  saveChallengeResults(raceNum: number, isSprint: boolean): void {
    const raceId = `${raceNum}${isSprint ? 'SP' : 'GP'}`;

    this.dataService.saveRaceChallengeResults(raceId, this.constructorResults).subscribe({
      next: () => console.log('Challenge results saved'),
      error: err => console.error('Failed to save challenge results:', err)
    });
    
  }
  
*/

/*
  onSaveResults(): void {
    const raceId = `${this.race.RaceNum}${this.isSprint ? 'SP' : 'GP'}`;

    // Save Race Results
    this.dataService.saveRaceResults(raceId, this.results).subscribe({
      next: () => console.log('Race results saved!'),
      error: (err: any) => console.error('Error saving race results:', err)
    });

    // Save Challenge Results
    this.dataService.saveRaceChallengeResults(raceId, this.constructorResults).subscribe({
      next: () => console.log('Challenge results saved!'),
      error: err => console.error('Error saving challenge results:', err)
    });

    // Save Metadata (optional but recommended for IsScored)
    const metadata = { ...this.race, IsScored: true };
    this.dataService.saveRaceMetadata(raceId, metadata).subscribe({
      next: () => console.log('Metadata updated'),
      error: err => console.error('Metadata update failed', err)
    });
  }
  */

  onSaveResults(): void {
    const raceId = `${this.race.RaceNum}${this.isSprint ? 'SP' : 'GP'}`;
    this.dataService.saveRaceResults(raceId, this.results).subscribe({
      next: () => console.log('Race results saved!'),
      error: (err: any) => console.error('Error saving race results:', err)
    });
    
    this.dataService.saveRaceChallengeResults(raceId, this.constructorResults).subscribe({
      next: () => console.log('Challenge results saved!'),
      error: err => console.error('Error saving challenge results:', err)
    });
    
    const metadata = { ...this.race, IsScored: true };
    this.dataService.saveRaceMetadata(raceId, metadata).subscribe({
      next: () => console.log('Metadata updated'),
      error: err => console.error('Metadata update failed', err)
    });
    
    console.log('Saving users with updated total points:', this.users);
    
    /*  To set the users total points to clean stuff up
    this.users.forEach((user) => {
      user.TotalPoints = this.constructorResults.find(constructor => user.Name === constructor.UserName)?.TotalPoints || 0;
    });
    */
    this.dataService.saveUsers(this.users).subscribe({
      next: () => console.log('User total points updated!'),
      error: err => console.error('Error updating users:', err)
    });
  }
  




}
