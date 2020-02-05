import { NgModule } from '@angular/core';
import {ScoreboardComponent} from './scoreboard.component';
import {BrowserModule} from '@angular/platform-browser';
import {PlayerComponent} from '../player/player.component';
import {StoreModule} from '@ngrx/store';
import * as fromScoreboard from './scoreboard.reducer';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [StoreModule.forFeature(fromScoreboard.key, fromScoreboard.reducer), CommonModule, FormsModule],
  declarations: [ScoreboardComponent, PlayerComponent],
  exports: [
    ScoreboardComponent
  ],
  bootstrap: [ScoreboardComponent]
})
export class ScoreboardModule { }
