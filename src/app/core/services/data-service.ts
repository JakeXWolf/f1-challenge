import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';
import { GrandPrix } from '../models/race';
import { RaceStatus } from '../models/race-status';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    const names = ['Jake', 'Zac', 'Nick', 'Jimmer', 'Kristin', 'Joey', 'Gabe'];
    const users: User[] = names.map((name, index) => ({
      Id: index + 1,
      Name: name,
      TotalPoints: Math.floor(Math.random() * 100) // Random points between 0 and 99
    }));
    
    return of(users);
  }

  getGrandPrixList(): Observable<GrandPrix[]> {
    return of(this.grandPrixList);
  }

  getDriverList(): Observable<Driver[]> {
    return of(this.drivers);
  }

  grandPrixList: GrandPrix[] = [
    { RaceNum: 1, Name: 'Australian Grand Prix', Location: 'Melbourne', Date: new Date('2025-03-16'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 2, Name: 'Chinese Grand Prix', Location: 'Shanghai', Date: new Date('2025-03-23'), HasSprint: true, SprintDate: new Date('2025-03-22'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 3, Name: 'Japanese Grand Prix', Location: 'Suzuka', Date: new Date('2025-04-06'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 4, Name: 'Bahrain Grand Prix', Location: 'Sakhir', Date: new Date('2025-04-13'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 5, Name: 'Saudi Arabian Grand Prix', Location: 'Jeddah', Date: new Date('2025-04-20'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 6, Name: 'Miami Grand Prix', Location: 'Miami', Date: new Date('2025-05-04'), HasSprint: true, SprintDate: new Date('2025-05-03'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 7, Name: 'Emilia Romagna Grand Prix', Location: 'Imola', Date: new Date('2025-05-18'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 8, Name: 'Monaco Grand Prix', Location: 'Monaco', Date: new Date('2025-05-25'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 9, Name: 'Spanish Grand Prix', Location: 'Barcelona', Date: new Date('2025-06-01'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 10, Name: 'Canadian Grand Prix', Location: 'Montreal', Date: new Date('2025-06-15'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 11, Name: 'Austrian Grand Prix', Location: 'Spielberg', Date: new Date('2025-06-29'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 12, Name: 'British Grand Prix', Location: 'Silverstone', Date: new Date('2025-07-06'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 13, Name: 'Belgian Grand Prix', Location: 'Spa', Date: new Date('2025-07-27'), HasSprint: true, SprintDate: new Date('2025-07-26'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 14, Name: 'Hungarian Grand Prix', Location: 'Budapest', Date: new Date('2025-08-03'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 15, Name: 'Dutch Grand Prix', Location: 'Zandvoort', Date: new Date('2025-08-31'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 16, Name: 'Italian Grand Prix', Location: 'Monza', Date: new Date('2025-09-07'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 17, Name: 'Azerbaijan Grand Prix', Location: 'Baku', Date: new Date('2025-09-21'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 18, Name: 'Singapore Grand Prix', Location: 'Marina Bay', Date: new Date('2025-10-05'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 19, Name: 'United States Grand Prix', Location: 'Austin', Date: new Date('2025-10-19'), HasSprint: true, SprintDate: new Date('2025-10-18'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 20, Name: 'Mexican Grand Prix', Location: 'Mexico City', Date: new Date('2025-10-26'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 21, Name: 'Brazilian Grand Prix', Location: 'Sao Paulo', Date: new Date('2025-11-09'), HasSprint: true, SprintDate: new Date('2025-11-08'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 22, Name: 'Las Vegas Grand Prix', Location: 'Las Vegas', Date: new Date('2025-11-22'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 23, Name: 'Qatar Grand Prix', Location: 'Lusail', Date: new Date('2025-11-30'), HasSprint: true, SprintDate: new Date('2025-11-29'), RaceStatus: RaceStatus.UPCOMING },
    { RaceNum: 24, Name: 'Abu Dhabi Grand Prix', Location: 'Yas Marina', Date: new Date('2025-12-07'), HasSprint: false, SprintDate: null, RaceStatus: RaceStatus.UPCOMING }
  ];

  drivers: Driver[] = [
    { Number: 23, Name: 'Alexander Albon', ChampionshipPosition: 1 },
    { Number: 55, Name: 'Carlos Sainz Jr.', ChampionshipPosition: 2 },
    { Number: 5, Name: 'Gabriel Bortoleto', ChampionshipPosition: 3 },
    { Number: 27, Name: 'Nico Hülkenberg', ChampionshipPosition: 4 },
    { Number: 1, Name: 'Max Verstappen', ChampionshipPosition: 5 },
    { Number: 30, Name: 'Liam Lawson', ChampionshipPosition: 6 },
    { Number: 6, Name: 'Isack Hadjar', ChampionshipPosition: 7 },
    { Number: 22, Name: 'Yuki Tsunoda', ChampionshipPosition: 8 },
    { Number: 12, Name: 'Andrea Kimi Antonelli', ChampionshipPosition: 9 },
    { Number: 63, Name: 'George Russell', ChampionshipPosition: 10 },
    { Number: 4, Name: 'Lando Norris', ChampionshipPosition: 11 },
    { Number: 81, Name: 'Oscar Piastri', ChampionshipPosition: 12 },
    { Number: 31, Name: 'Esteban Ocon', ChampionshipPosition: 13 },
    { Number: 87, Name: 'Oliver Bearman', ChampionshipPosition: 14 },
    { Number: 16, Name: 'Charles Leclerc', ChampionshipPosition: 15 },
    { Number: 44, Name: 'Lewis Hamilton', ChampionshipPosition: 16 },
    { Number: 14, Name: 'Fernando Alonso', ChampionshipPosition: 17 },
    { Number: 18, Name: 'Lance Stroll', ChampionshipPosition: 18 },
    { Number: 7, Name: 'Jack Doohan', ChampionshipPosition: 19 },
    { Number: 10, Name: 'Pierre Gasly', ChampionshipPosition: 20 }
  ];
}