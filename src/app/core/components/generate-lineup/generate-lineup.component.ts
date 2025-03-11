import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Constructor } from '../../models/constructor';
import { Driver } from '../../models/driver';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-generate-lineup',
  templateUrl: './generate-lineup.component.html',
  styleUrls: ['./generate-lineup.component.scss']
})
export class GenerateLineupComponent implements OnInit {
  users: User[] = [];
  constructorLineup: Constructor[] = [];

  displayedColumns: string[] = ['Constructor', 'Driver 1', 'Driver 2'];

  drivers: Driver[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users; 
    });
    
    // Initialize constructorLineup with empty fields
    const randomizedUsers = this.users.sort(() => Math.random() - 0.5);
    randomizedUsers.forEach(user => {
      this.constructorLineup.push({
        UserName: user.Name,
        Driver1: { Number: 0, Name: '', ChampionshipPosition: 0 },
        Driver2: { Number: 0, Name: '', ChampionshipPosition: 0 },
        DriverNumbers: []
      });
    });

    this.dataService.getDriverList().subscribe(drivers => {
      this.drivers = drivers; 
    });
  }

  onAssignDrivers(): void {
    const numberOfUsers = this.constructorLineup.length;

    console.log('Number of users:', numberOfUsers);

    // Split drivers into two lists and randomize them
    const topDrivers = this.drivers.slice(0, numberOfUsers).sort(() => Math.random() - 0.5);
    const restDriversTmp = this.drivers.slice(numberOfUsers, 2 * numberOfUsers - 1);
    restDriversTmp.push({ Number: 0, Name: 'Best Of The Rest', ChampionshipPosition: 0 });
    const restDrivers = restDriversTmp.sort(() => Math.random() - 0.5);

    const bestOfTheRest = this.drivers.slice(2 * numberOfUsers - 1);

    console.log('Top drivers:', topDrivers);
    console.log('Rest drivers:', restDrivers);
    console.log('Best of the rest:', bestOfTheRest);

    // Add the rest of the drivers' numbers to the "Best of the Rest"
    let restDriverNumbers: number[] = [];
    for (let i = 2 * numberOfUsers - 1; i < this.drivers.length; i++) {
      restDriverNumbers.push(this.drivers[i].Number);
    }
    console.log('Best of the rest:', restDriverNumbers);

    // Assign drivers to users
    this.constructorLineup.forEach((constructor, index) => {
      let driver1: Driver;
      let driver2: Driver;

      if (index < topDrivers.length) {
        driver1 = topDrivers[index];
      } else {
        driver1 = bestOfTheRest[0]; // In case there are more users than top drivers
        console.log('There are more users than top drivers');
      }

      if (index < restDrivers.length) {
        driver2 = restDrivers[index];
      } else {
        driver2 = bestOfTheRest[0]; // In case there are more users than rest drivers
        console.log('There are more users than rest drivers');
      }

      constructor.Driver1 = driver1;
      constructor.Driver2 = driver2;

      if (driver2.Number === 0) {
        constructor.DriverNumbers = [driver1.Number];
        constructor.DriverNumbers.push(...restDriverNumbers);
      } else {
        constructor.DriverNumbers = [driver1.Number, driver2.Number];
      }
    });

    // // Assign the "Best of the Rest" driver to the last user
    // if (bestOfTheRest.length > 0) {
    //   this.constructorLineup[numberOfUsers - 1].Driver2 = bestOfTheRest[0];
    //   this.constructorLineup[numberOfUsers - 1].DriverNumbers.push(...restDriverNumbers);
    // }
    console.log('Constructor lineup:', this.constructorLineup);
  }
}