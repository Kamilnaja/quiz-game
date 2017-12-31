import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
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
    count: number = 1;

    @Input()
    currentQuestion: number;
    currentLength: number;

    constructor(
        public questionService: QuestionsService,
        private ngRedux: NgRedux<IAppState>,
        private actions: CounterActions
    ) {
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
     }

    ngOnInit() {
        this.questionsLength = this.questionService.getQuestionsListLength();
        // console.log(`length: ${this.count}  QuestionLength: ${this.questionsLength} `)
        
    }
    
    ngOnChanges() {
        // this.currentLength = this.count;
        console.log(this.currentLength);
        this.currentLength = Math.floor((this.count) * 100 / this.questionsLength); 
        // console.log(`length: ${this.currentLength}  currQuestion: ${this.questionsLength} `)
    }

}
