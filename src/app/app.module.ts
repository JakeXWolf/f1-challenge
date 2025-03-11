import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './core/services/data-service';

import { HomeComponent } from './core/components/home/home.component';
import { GenerateLineupComponent } from './core/components/generate-lineup/generate-lineup.component';
import { DriverChampStandingsComponent } from './core/components/driver-champ-standings/driver-champ-standings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriverChampStandingsComponent,
    GenerateLineupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatTableModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [
    provideAnimationsAsync(),

    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
