import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { User } from '../../models/user';
import { GrandPrix } from '../../models/race';
import { RaceStatus } from '../../models/race-status';

import { DataService } from '../../services/data-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {
  displayedColumns: string[] = ['Place', 'Name', 'TotalPoints'];
  users: User[] = [];
  
  gpDisplayedColumns: string[] = ['RaceNum', 'Name', 'Location', 'Date', 'HasSprint', 'RaceStatus'];
  grandPrixList: GrandPrix[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users; 
    });

    this.dataService.getGrandPrixList().subscribe(grandPrixList => {
      this.grandPrixList = grandPrixList;
    });
  }


}
