import {Component, OnInit} from '@angular/core';
import { strictEqual } from 'assert';
import {Store} from '@ngrx/store';
import {AppStore} from './app.store';
// import {init} from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppStore>) {
    store.subscribe(newStore => {
      console.log(newStore);
      localStorage.setItem('appStore', JSON.stringify(newStore));
    });
  }

  ngOnInit() {

  }
}
