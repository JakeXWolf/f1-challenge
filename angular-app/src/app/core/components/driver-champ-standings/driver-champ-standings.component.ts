import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Driver } from '../../models/driver';
import { DataService } from '../../services/data-service';

@Component({
    selector: 'app-driver-champ-standings',
    templateUrl: './driver-champ-standings.component.html',
    styleUrl: './driver-champ-standings.component.scss',
    standalone: false
})
export class DriverChampStandingsComponent {
  displayedColumns: string[] = ['Position', 'Name', 'Number'];

  drivers: Driver[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDriverList().subscribe(drivers => {
      this.drivers = drivers; 
    });
  }

  drop(event: CdkDragDrop<Driver[]>) {
    moveItemInArray(this.drivers, event.previousIndex, event.currentIndex);
    console.log(this.drivers);

    if (event.previousIndex === event.currentIndex) {
      return;
    }

    this.renumberPositions(event.previousIndex, event.currentIndex);
    this.drivers = [...this.drivers];
  }

  renumberPositions(previousIndex: number, currentIndex: number) {
    let start: number = previousIndex;
    let end: number = currentIndex;
    if (previousIndex > currentIndex) {
      start = currentIndex;
      end = previousIndex;
    }

    for (let i = start; i < end + 1; i++) {
      this.drivers[i].ChampionshipPosition = i + 1;
    }
  }
}
