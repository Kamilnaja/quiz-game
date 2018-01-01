import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CounterActions {

    static NEXT_QUESTION = 'NEXT_QUESTION';
    static PREVIOUS_QUESTION = 'PREVIOUS_QUESTION';
    static RESET_QUESTION = 'RESET_QUESTION';
    // static ADD_QUESTION = 'ADD_QUESTION';
    static ADD_POINT = 'ADD_POINT';

    nextQuestion(): Action {
        return {
            type: CounterActions.NEXT_QUESTION
        };
    }

    previousQuestion(): Action {
        return {
            type: CounterActions.PREVIOUS_QUESTION
        };
    }

    resetQuestion(): Action {
        return {
            type: CounterActions.RESET_QUESTION
        };
    }

    addPoint(): Action {
        return {
            type: CounterActions.ADD_POINT
        };
    }

    
}
