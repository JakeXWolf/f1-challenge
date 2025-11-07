import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, race, from } from 'rxjs';

import { User } from '../models/user';
import { GrandPrix } from '../models/race';
import { RaceStatus } from '../models/race-status';
import { Driver } from '../models/driver';
import { RaceResult } from '../models/race-results';
import { ConstructorResults } from '../models/constructor-results';
import { Constructor } from '../models/constructor';
import { constructorLineup_Australia, constructorLineup_AustrianGP, constructorLineup_Bahrain, constructorLineup_BarcelonaGP, constructorLineup_BritishGP, constructorLineup_CanadaGP, constructorLineup_China_GP, constructorLineup_China_Sprint, constructorLineup_ImolaGP, constructorLineup_Japan, constructorLineup_Miami_GP, constructorLineup_Miami_Sprint, constructorLineup_MonacoGP, constructorLineup_SaudiArabia, constructorLineup_SpaGP, drivers, raceResults_Australia } from './test-data';

import { buildRaceId, RaceId } from '../utils';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    //const functionUrl = 'https://getusers-vzdcza3fpq-uc.a.run.app/getusers'; // Paste your URL here
    const functionUrl = 'https://us-central1-f1-challenge-backendapi.cloudfunctions.net/getUsers';

    return this.http.get<User[]>(functionUrl);
  }
  
  getRaceChallengeResults(raceId: string): Observable<ConstructorResults[]> {
    const url = `https://us-central1-f1-challenge-backendapi.cloudfunctions.net/getRaceChallengeResults?raceId=${raceId}`;
    return this.http.get<ConstructorResults[]>(url);
  }


  saveRaceResults(raceId: string, results: RaceResult[]): Observable<void> {
    const url = 'https://us-central1-f1-challenge-backendapi.cloudfunctions.net/saveRaceResults';
    return this.http.post<void>(url, { raceId, results }, { responseType: 'text' as 'json' });
  }

  
  getRaceResults(raceId: string): Observable<RaceResult[]> {
    const url = `https://us-central1-f1-challenge-backendapi.cloudfunctions.net/getRaceResults?raceId=${raceId}`;
    return this.http.get<RaceResult[]>(url);
  }
  
  

  /* used to save all races from test-data.ts to Firebase */
  /* can be used to update RaceStatus and IsScored */
  saveRaceMetadata(raceId: string, metadata: GrandPrix & { IsScored: boolean }): Observable<void> {
    const url = 'https://us-central1-f1-challenge-backendapi.cloudfunctions.net/saveRaceMetadata';
    return this.http.post<void>(url, { raceId, metadata }, { responseType: 'text' as 'json' });
  }

  // gets RaceMetadata for all Grand Prix
  getGrandPrixList(): Observable<GrandPrix[]> {
    const url = 'https://us-central1-f1-challenge-backendapi.cloudfunctions.net/getAllRaceMetadata';
    return this.http.get<GrandPrix[]>(url);
  }
  
  // gets Race Lineup 
  getRaceLineups(raceId: string): Observable<Constructor[]> {
    const url = `https://us-central1-f1-challenge-backendapi.cloudfunctions.net/getRaceLineups?raceId=${raceId}`;
    return this.http.get<Constructor[]>(url);
  }
  
  


  // For missed races:
  /**/
  saveMissedRaceLineup() {
    this.saveConstructorLineup('13GP', constructorLineup_SpaGP, false).subscribe({});
  }
  

  saveConstructorLineup(
    raceId: string,
    lineup: Constructor[],
    isSprint: boolean
  ): Observable<void> {
    
    console.log('Saving constructor lineup in data-service.ts:', {raceId, lineup, isSprint});
    const url =
      "https://us-central1-f1-challenge-backendapi.cloudfunctions.net/saveConstructorLineup";
    return this.http.post<void>(url, { raceId, lineup, isSprint }, { responseType: 'text' as 'json' });
  }
  

  // Save Challenge Results
  saveRaceChallengeResults(raceId: string, results: ConstructorResults[]): Observable<void> {
    const url = 'https://us-central1-f1-challenge-backendapi.cloudfunctions.net/saveRaceChallengeResults';
    return this.http.post<void>(url, { raceId, results }, { responseType: 'text' as 'json' });
  }


  // Save users to update the total points
  saveUsers(users: User[]): Observable<void> {
    const url = 'https://us-central1-f1-challenge-backendapi.cloudfunctions.net/saveUsers';
    return this.http.post<void>(url, { users }, { responseType: 'text' as 'json' });
  }
  


  getDriverList(): Observable<Driver[]> {
    // TODO: MAKE API CALL
    return of(drivers);
  }

  // using test-data to then be used to save in api firebase
  getConstructorLineupByRace(raceId: RaceId): Observable<Constructor[]> {
    const lineupMap: Record<RaceId, Constructor[]> = {
      '1GP': constructorLineup_Australia,
      '2SP': constructorLineup_China_Sprint,
      '2GP': constructorLineup_China_GP,
      '3GP': constructorLineup_Japan,
      '4GP': constructorLineup_Bahrain,
      '5GP': constructorLineup_SaudiArabia,
      '6SP': constructorLineup_Miami_Sprint,
      '6GP': constructorLineup_Miami_GP,
      '7GP': constructorLineup_ImolaGP,
      '8GP': constructorLineup_MonacoGP,
      '9GP': constructorLineup_BarcelonaGP,
      '10GP': constructorLineup_CanadaGP,
      '11GP': constructorLineup_AustrianGP,
    };

    const constructorLineup: Constructor[] = lineupMap[raceId]; // Fixed type for constructorLineup

    return of(constructorLineup || []); // Return an empty array if undefined
  }

  getStaticRaceResults(): Observable<RaceResult[]> {
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