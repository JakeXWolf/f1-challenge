import { Component } from '@angular/core';
import { User } from '../../models/user';
import { GrandPrix } from '../../models/race';
import { RaceStatus } from '../../models/race-status';
import { Constructor } from '../../models/constructor';
import { RaceResult } from '../../models/race-results';
import { DataService } from '../../services/data-service';

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

  selectedRaceResults: { [key: string]: RaceResult[] } = {};
  selectedLineups: { [key: string]: Constructor[] } = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error fetching users:', err),
    });
  
    this.dataService.getGrandPrixList().subscribe((grandPrixList) => {
      const today = new Date();
      this.grandPrixList = grandPrixList.map(gp => {
        const raceDate = new Date(gp.Date);
        const isThisWeek = this.isDateThisWeek(raceDate, today);
        const isPast = raceDate.getTime() < today.getTime();
  
        return {
          ...gp,
          RaceStatus: isPast ? RaceStatus.COMPLETED : isThisWeek ? RaceStatus.RACEWEEK : RaceStatus.UPCOMING
        };
      });
    });
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

  loadRaceContent(race: GrandPrix, isSprint: boolean = false) {
    const raceId = this.buildRaceId(race, isSprint);

    if (race.RaceStatus === RaceStatus.COMPLETED) {
      if (!this.selectedRaceResults[raceId]) {
        this.dataService.getRaceResults().subscribe(results => {
          this.selectedRaceResults[raceId] = results;
        });
      }
    } else {
      if (!this.selectedLineups[raceId]) {
        this.dataService.getConstructorLineupByRace(race.RaceNum).subscribe(lineups => {
          this.selectedLineups[raceId] = lineups;
        });
      }
    }
  }
}
