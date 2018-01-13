import { Action } from 'redux';
import { CounterActions } from './app/app.actions';
import { LastQuestionComponent } from 'app/last-question/last-question.component';

export interface IAppState {
    count: number;
    points: number;
};

export const INITIAL_STATE: IAppState = {
    count: 1,
    points: 0,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
    switch (action.type) {
        case CounterActions.NEXT_QUESTION: return {
            count: lastState.count + 1,
            points: lastState.points
        };

        case CounterActions.PREVIOUS_QUESTION: return {
            count: lastState.count - 1,
            points: lastState.points
        };

        case CounterActions.RESET_QUESTION: return {
            count: 1,
            points: 0
        };

        case CounterActions.ADD_POINT: return {
            count: lastState.count,
            points: lastState.points + 1
        };
    }

    return lastState;
}
