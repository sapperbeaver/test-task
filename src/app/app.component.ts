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
    // this.store.dispatch(init({state: (JSON.parse(localStorage.getItem('appStore')) || {})}));
    // кладём стор в локалсторейдж при каждом изменении
    store.subscribe(newStore => {
      console.log(newStore);
      localStorage.setItem('appStore', JSON.stringify(newStore));
    });
    // TODO инициализировать приложение ил локал стора
  }

  ngOnInit() {

  }
}
