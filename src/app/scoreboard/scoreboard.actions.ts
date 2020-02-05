import {createAction, props} from '@ngrx/store';

export const addPlayer = createAction('[Scoreboard] addPlayer', props<{name: string}>());
export const removePlayer = createAction('[Scoreboard] Away Score', props<{id: number}>());
export const upPoints = createAction('[Scoreboard] Score Reset', props<{id: number}>());
export const downPoints = createAction('[Scoreboard] Set Scores', props<{id: number}>());
