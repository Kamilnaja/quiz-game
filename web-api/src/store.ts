import { Action } from 'redux';
import { CounterActions } from './app/app.actions';
import { LastQuestionComponent } from 'app/last-question/last-question.component';

export interface IAppState {
    count: number;
};

export const INITIAL_STATE: IAppState = {
    count: 1,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
    switch (action.type) {
        case CounterActions.NEXT_QUESTION: return { 
            count: lastState.count + 1
        };

        case CounterActions.PREVIOUS_QUESTION: return {
            count: lastState.count - 1
        };

        case CounterActions.RESET_QUESTION: return {
            count: 1
        };
    }

    return lastState;
}
