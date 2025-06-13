import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, race, from } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { User } from '../models/user';
import { GrandPrix } from '../models/race';
import { RaceStatus } from '../models/race-status';
import { Driver } from '../models/driver';
import { RaceResult } from '../models/race-results';
import { ConstructorResults } from '../models/constructor-results';
import { Constructor } from '../models/constructor';
import { constructorLineup_Australia, drivers, grandPrixList, raceResults_Australia } from './test-data';

import { buildRaceId } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  saveConstructorLineup(
    raceNum: number,
    isSprint: boolean,
    lineup: Constructor[]
  ): Observable<void> {
    const raceId = `${raceNum}${isSprint ? 'SP' : 'GP'}`;

    const savePromises = lineup.map(c => {
      const userId = c.UserName.toLowerCase().replace(/\s/g, '-');
      return this.saveLineup(userId, raceId, c); // 👈 fire here from instance method
    });

    return from(Promise.all(savePromises).then(() => undefined));
  }

  private saveLineup(userId: string, raceId: string, lineup: Constructor): Promise<void> {
    return this.firestore
      .collection('users')
      .doc(userId)
      .collection('lineups')
      .doc(raceId)
      .set(lineup);
  }
  

  getUsers(): Observable<User[]> {
    const functionUrl = 'https://getusers-vzdcza3fpq-uc.a.run.app/getusers'; // Paste your URL here
    return this.http.get<User[]>(functionUrl);
  }

  getGrandPrixList(): Observable<GrandPrix[]> {
    // TODO: MAKE API CALL
    return of(grandPrixList);
  }

  getDriverList(): Observable<Driver[]> {
    // TODO: MAKE API CALL
    return of(drivers);
  }

  getConstructorLineupByRace(raceNum: number): Observable<Constructor[]> {
    // TODO: MAKE API CALL
    const constructorLineup: Constructor[] = [];

    if (raceNum === 1) {
      constructorLineup_Australia.forEach(constructor => {
        constructorLineup.push(constructor);
      });
    }

    return of(constructorLineup);
  }

  getRaceResults(): Observable<RaceResult[]> {
    return of(raceResults_Australia);
  }

  private getTestData_Users(): Observable<User[]> {
    const names = ['Jake', 'Zac', 'Nick', 'Jimmer', 'Kristin', 'Joey', 'Gabe'];
    const users: User[] = names.map((name, index) => ({
      Id: index + 1,
      Name: name,
      TotalPoints: Math.floor(Math.random() * 100) // Random points between 0 and 99
    }));
    
    return of(users);
  }
}