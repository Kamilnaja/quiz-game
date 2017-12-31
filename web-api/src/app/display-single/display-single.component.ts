import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QuestionsService } from 'app/services/questionsService';
import { DataService } from 'app/services/dataService';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { IAppState } from 'store';
import { CounterActions } from 'app/app.actions';
import { NgRedux } from '@angular-redux/store';

@Component({
    selector: 'app-display-single',
    templateUrl: './display-single.component.html',
})

export class DisplaySingleComponent implements OnInit, OnDestroy {
    question: {};
    questionLength = 0;
    correctAnswers = 0;
    currentLength: number;
    router: Router;
    subscription;
    count: number;

    constructor(
        public questionsService: QuestionsService,
        private data: DataService,
        _router: Router,
        private ngRedux: NgRedux<IAppState>,
        private actions: CounterActions
    ) {
        this.router = _router;
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
    }

    ngOnInit() {
        this.question = this.questionsService.getQuestionsList();
        this.questionLength = this.questionsService.getQuestionsListLength();
        this.ngRedux.dispatch(this.actions.resetQuestion());
    }
    
    evaluateAnswer() {
        // todo - przenieść tutaj kod odpowiedzialny za sprawdzenie odpowiedzi
    }

    nextQuestion(e) {
        const questionsLength: number = Object.keys(this.question).length;

        if (this.count < questionsLength - 1) {
            this.ngRedux.dispatch(this.actions.nextQuestion());
        } else {
            const instance = this;
            instance.router.navigateByUrl('/lastquestion');
        }

        if (e.target.textContent === this.question[this.count].goodAnswer) {
            this.correctAnswers++;
        }
    }

    previousQuestion() {
        this.ngRedux.dispatch(this.actions.previousQuestion());
    }



// todo - ustawić counter na 1 od początku
// todo - dodać reseta

    ngOnDestroy() {
        this.data.changeQuestion(this.correctAnswers);
        this.subscription.unsubscribe();
    }
}
