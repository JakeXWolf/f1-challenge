import { Component } from '@angular/core';

import { User } from '../../models/user';
import { GrandPrix } from '../../models/race';
import { RaceStatus } from '../../models/race-status';
import { Constructor } from '../../models/constructor';
import { RaceResult } from '../../models/race-results';
import { Driver } from '../../models/driver';

import { DataService } from '../../services/data-service';
import { RaceId, buildRaceId } from '../../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  RaceStatus = RaceStatus; // ✅ THIS replaces the broken `RaceStatus: any;`

  displayedColumns: string[] = ['Place', 'Name', 'TotalPoints'];
  gpDisplayedColumns: string[] = ['RaceNum', 'Name', 'Location', 'Date', 'HasSprint', 'RaceStatus'];

  users: User[] = [];
  grandPrixList: GrandPrix[] = [];
  drivers: Driver[] = [];

  selectedRaceResults: { [key: string]: RaceResult[] } = {};
  selectedLineups: { [key: string]: Constructor[] } = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data
        this.users.sort((a, b) => b.TotalPoints - a.TotalPoints);
      },
      error: (err) => console.error('Error fetching users:', err),
    });
  
    this.dataService.getGrandPrixList().subscribe((grandPrixList) => {
      const today = new Date();
    
      this.grandPrixList = grandPrixList
        .map(gp => {
          const raceDate = new Date(gp.Date);
          const isThisWeek = this.isDateThisWeek(raceDate, today);
          const isPast = raceDate.getTime() < today.getTime();
    
          return {
            ...gp,
            RaceStatus: isPast ? RaceStatus.COMPLETED : isThisWeek ? RaceStatus.RACEWEEK : RaceStatus.UPCOMING
          };
        })
        .sort((a, b) => {
          if (a.RaceNum !== b.RaceNum) {
            return a.RaceNum - b.RaceNum; // by race number ascending
          }
    
          // Same RaceNum: sprint first
          const aIsSprint = a.Name.toLowerCase().includes('sprint');
          const bIsSprint = b.Name.toLowerCase().includes('sprint');
    
          if (aIsSprint && !bIsSprint) return -1;
          if (!aIsSprint && bIsSprint) return 1;
          return 0;
        });
      console.log('Grand Prix List:', this.grandPrixList);
    });
    

    this.dataService.getDriverList().subscribe(drivers => {
      this.drivers = drivers;
    });
  }

  // TODO: should this stuff be in the componenets or out here?
  // how can i only load the open panel
  // uses actual api
  onLoadRaceContent(race: GrandPrix, isSprint: boolean = false) {
    const raceId = this.buildRaceId(race, isSprint);
  
    // Load results
    if (!this.selectedRaceResults[raceId]) {
      this.dataService.getRaceResults(raceId).subscribe(results => {
        this.selectedRaceResults[raceId] = results;
      });
    }
  
    // Load lineups
    if (!this.selectedLineups[raceId]) {
      this.dataService.getRaceLineups(raceId).subscribe(lineups => {
        this.selectedLineups[raceId] = lineups;
      });
    }
  
    // Optionally: load challenge results here
  }

  // This thing is older and uses static
  loadRaceContent(race: GrandPrix, isSprint: boolean = false) {
    const raceId = this.buildRaceId(race, isSprint);

    if (race.RaceStatus === RaceStatus.COMPLETED) {
      if (!this.selectedRaceResults[raceId]) {
        this.dataService.getRaceResults(raceId).subscribe(results => {
          this.selectedRaceResults[raceId] = results;
        });
      }
    } else {
      if (!this.selectedLineups[raceId]) {
        this.dataService.getConstructorLineupByRace(raceId as RaceId).subscribe(lineups => {
          this.selectedLineups[raceId] = lineups;
        });
      }
    }
  }
  

    
/*
    this.dataService.saveRaceMetadata('1GP', {
      RaceNum: 1,
      Name: 'Australian Grand Prix',
      Location: 'Melbourne',
      Date: new Date('2025-03-16'),
      HasSprint: false,
      RaceStatus: 'COMPLETED',
      IsScored: false
    }).subscribe();
    */
  


  isRaceWithinPastNDays(date: Date, days: number): boolean {
    const today = new Date();
    const past = new Date();
    past.setDate(today.getDate() - days);
    return new Date(date) >= past && new Date(date) <= today;
  }
  
  isRaceUpcomingSoon(date: Date, days: number): boolean {
    const today = new Date();
    const future = new Date();
    future.setDate(today.getDate() + days);
    return new Date(date) >= today && new Date(date) <= future;
  }
  
  shouldShowFullScoring(race: GrandPrix): boolean {
    return race.RaceStatus === RaceStatus.UPCOMING &&
           this.isRaceWithinPastNDays(race.Date, 5); // configurable
  }
  
  shouldShowGenerateLineup(race: GrandPrix): boolean {
    return this.isRaceUpcomingSoon(race.Date, 7) && !this.selectedLineups[this.buildRaceId(race)];
  }
  


  
  isDateThisWeek(date: Date, today: Date = new Date()): boolean {
    const oneDay = 86400000;
    const startOfWeek = new Date(today.getTime() - today.getDay() * oneDay); // Sunday
    const endOfWeek = new Date(startOfWeek.getTime() + 6 * oneDay); // Saturday
    return date >= startOfWeek && date <= endOfWeek;
  }

  buildRaceId(race: GrandPrix, isSprint: boolean = false): string {
    return `${race.RaceNum}${isSprint ? 'SP' : 'GP'}`;
  }

  getRaceDisplayText(race: GrandPrix): string {
    return `The ${race.Name} is scheduled for ${race.Date.toDateString()}`;
  }


  /* used to save all races from test-data.ts to Firebase
  saveAllRaces() {
    this.grandPrixList.forEach(gp => {

      this.dataService.saveRaceMetadata(buildRaceId(gp.RaceNum, false) , {
        RaceNum: gp.RaceNum,
        Name: `${gp.Name} Grand Prix`,
        Location: gp.Location,
        Date: gp.Date,
        HasSprint: gp.HasSprint,
        SprintDate: gp.SprintDate || null,
        RaceStatus: gp.RaceStatus,
        IsScored: false
      }).subscribe();

      if (gp.HasSprint && gp.SprintDate) {
        this.dataService.saveRaceMetadata(buildRaceId(gp.RaceNum, true), {
          RaceNum: gp.RaceNum,
          Name: `${gp.Name} Sprint`,
          Location: gp.Location,
          Date: gp.SprintDate,
          HasSprint: true,
          SprintDate: gp.SprintDate,
          RaceStatus: gp.RaceStatus, // or whatever logic you want
          IsScored: false
        }).subscribe();
      }
    });
  }
  */
}
