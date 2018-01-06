import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { QuestionsService } from '../services/questionsService';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'store';
import { CounterActions } from 'app/app.actions';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit, OnChanges {
    questionsLength: number;
    subscription;
    count: number;
    question;
    
    @Input()
    currentQuestion: number;
    currentLength: number;
    
    constructor(
        public questionsService: QuestionsService,
        private ngRedux: NgRedux<IAppState>,
        private actions: CounterActions
    ) {
        this.subscription = ngRedux.select<number>('count')
        .subscribe(newCount => this.count = newCount);
    }
    
    ngOnChanges() {
        this.count = this.currentQuestion;
    }
    
    ngOnInit() {
        this.questionsService.getQuestionsList()
            .subscribe(data => this.question = data);
        this.questionsService.getQuestionsList()
            .subscribe(data => this.questionsLength = data.length);
    }
}
