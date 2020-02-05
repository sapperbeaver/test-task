import {Action, createReducer, on, State} from '@ngrx/store';
import * as  ScoreboardActions from './scoreboard.actions';
import {Player} from './player.model';

export interface Scoreboard {
  players: Player[];
}
const fromLocalStorage = localStorage.getItem('Scoreboard') || '{ "players": [] }';
const initialState: Scoreboard = JSON.parse(fromLocalStorage);
let lastId = 0;
const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardActions.addPlayer, (state, payload) => {
    return ({...state, players: [...state.players, {id: lastId++, name: payload.name, points: 0, date: new Date(), }]});
  }),
  on(ScoreboardActions.removePlayer, (state, payload) => {
      return ({...state, players: state.players.filter((player) => ((player.id !== payload.id)))});
  }),
  on(ScoreboardActions.downPoints, (state, payload) => {
    const finded = state.players.find((player) => (player.id === payload.id));
    return ({...state, players: [...state.players.filter(player => (player.id !== payload.id)),
        {...finded, points: (finded.points > 0 ? finded.points - 1 : finded.points) }]});
  }),
  on(ScoreboardActions.upPoints, (state, payload) => {
    const finded = state.players.find((player) => (player.id === payload.id));
    return ({...state, players: [...state.players.filter(player => (player.id !== payload.id)),
        {...finded, points: finded.points + 1 }]});
  }),
);

export const key = 'scoreboard';
export function reducer(state: Scoreboard | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
