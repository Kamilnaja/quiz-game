import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { QuestionsService } from '../services/questionsService';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit, OnChanges {
    questionsLength: number;
    @Input()
    currentQuestion: number;
    currentLength: number;

    constructor(
        public questionService: QuestionsService
    ) { }

    ngOnInit() {
        this.questionsLength = this.questionService.getQuestionsListLength();
    }

    ngOnChanges() {
        this.currentLength = Math.floor((this.currentQuestion) * 100 / this.questionsLength); 
    }
}
