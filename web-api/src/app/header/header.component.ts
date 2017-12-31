import { Component,  Input , OnChanges} from '@angular/core';
import { QuestionsService } from '../services/questionsService';
import { IAppState } from 'store';
import { NgRedux } from '@angular-redux/store';
import { CounterActions } from 'app/app.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnChanges {
    subscription;
    count: number;
    @Input()
    currentQuestion: number;
    constructor(
        public questionService: QuestionsService,
        private ngRedux: NgRedux<IAppState>,
        private actions: CounterActions
    ) {
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
     }

    ngOnChanges() {
        this.count = this.currentQuestion;
    }

    reset() {
        this.ngRedux.dispatch(this.actions.resetQuestion());
    }
}
