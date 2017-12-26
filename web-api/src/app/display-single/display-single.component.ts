import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QuestionsService } from 'app/services/questionsService';
import { DataService } from 'app/services/dataService';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

@Component({
    selector: 'app-display-single',
    templateUrl: './display-single.component.html',
})

export class DisplaySingleComponent implements OnInit, OnDestroy {
    question: {};
    questionLength: number = 0;
    correctAnswers = 0;

    router: Router;

    // export this variable to
    @Input() currentNum: number;

    constructor(
        public questionsService: QuestionsService,
        private data: DataService,
        _router: Router,
    ) {
        this.router = _router;
    }

    ngOnInit() {
        this.question = this.questionsService.getQuestionsList();
        this.currentNum = 0;
        this.questionLength = this.questionsService.getQuestionsListLength();
    }

    nextQuestion(e) {

        const questionsLength: number = Object.keys(this.question).length;

        if (e.target.textContent === this.question[this.currentNum].goodAnswer) {
            this.correctAnswers++;
        }
        if (this.currentNum < questionsLength - 1) {
            return this.currentNum++;
        } else {
            this.router.navigateByUrl('/lastquestion');
        }
    }

    previousQuestion() {
        if (this.currentNum > 0) {
            return this.currentNum--;
        }
    }

    ngOnDestroy() {
        this.data.changeQuestion(this.correctAnswers);
    }
}
