import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './core/services/data-service';

import { HomeComponent } from './core/components/home/home.component';
import { GenerateLineupComponent } from './core/components/generate-lineup/generate-lineup.component';
import { DriverChampStandingsComponent } from './core/components/driver-champ-standings/driver-champ-standings.component';
import { RaceResultsComponent } from './core/components/race-results/race-results.component';

//firebase stuff
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environment';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      DriverChampStandingsComponent,
      GenerateLineupComponent,
      RaceResultsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
  
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
  
      MatTableModule,
      MatButtonModule,
      MatInputModule,
  
      DragDropModule,
      FormsModule
    ],
    providers: [
      provideAnimationsAsync(),
      DataService,
      provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule {}
  
