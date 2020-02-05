import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScoreboardModule} from './scoreboard/scoreboard.module';
import * as fromApp from './app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularSvgIconModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    ScoreboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
