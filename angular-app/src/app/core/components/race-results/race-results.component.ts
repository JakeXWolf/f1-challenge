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
}
