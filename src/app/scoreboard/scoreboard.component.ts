import { Component, Input } from '@angular/core';
import { Player } from './player.model';
import { Store } from '@ngrx/store';
import { Scoreboard } from './scoreboard.reducer';
import { addPlayer, downPoints, removePlayer, upPoints } from './scoreboard.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent {
  private nameForNewPlayer = '';
  public reverse: boolean = false;
  public sorts = {
    alphabet: (a: Player, b: Player) => (a.name > b.name ? -1 : 1),
    rating: (a: Player, b: Player) => (a.points === b.points ? 0 : (a.points > b.points ? 1 : -1)),
    date: (a: Player, b: Player) => (a.date > b.date ? 1 : -1),
  }
  sortedSort: Player[];
  reversedSort: Player[];
  constructor(public store: Store<{ scoreboard: Scoreboard }>) {
    store.subscribe((newValue) => {
      localStorage.setItem("Scoreboard", JSON.stringify(newValue.scoreboard));
      this.sortedSort = newValue.scoreboard.players.sort(this.sorts[this._selectedSort]);
      if (this.reverse) {
        this.reversedSort = [...this.sortedSort].reverse();
      } else {
        this.reversedSort = this.sortedSort;
      }
    });
  }
  reverseButton() {
    this.reverse = !this.reverse;
    if (this.reverse) {
      this.reversedSort = [...this.sortedSort].reverse();
    } else {
      this.reversedSort = this.sortedSort;
    }
  }
  private _selectedSort: string;
  public set selectedSort(v: string) {
    this._selectedSort = v;
    this.sortedSort = this.sortedSort.sort(this.sorts[this._selectedSort]);
  }
  public get selectedSort() {
    return this._selectedSort;
  }
  onRemovePlayer($event) {
    this.store.dispatch(removePlayer({ id: $event }));
  }
  onRatingUp($event) {
    this.store.dispatch(upPoints({ id: $event }));
  }
  onRatingDown($event) {
    this.store.dispatch(downPoints({ id: $event }));
  }
  onAddNewPlayer() {
    this.store.dispatch(addPlayer({ name: this.nameForNewPlayer }));
    this.nameForNewPlayer = "";
  }
  onRatingChange($event) {
    
  }
}