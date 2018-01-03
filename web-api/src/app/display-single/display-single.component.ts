import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from 'app/services/questionsService';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { IAppState } from 'store';
import { CounterActions } from 'app/app.actions';
import { NgRedux } from '@angular-redux/store';

@Component({
    selector: 'app-display-single',
    templateUrl: './display-single.component.html',
})

export class DisplaySingleComponent implements OnInit {
    question: {};
    questionLength = 0;
    correctAnswers = 0;
    currentLength: number;
    router: Router;
    subscription;
    count: number = 1;

    constructor(
        public questionsService: QuestionsService,
        _router: Router,
        private ngRedux: NgRedux<IAppState>,
        private actions: CounterActions
    ) {
        this.router = _router;
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
    }

    ngOnInit() {
        this.questionsService.getQuestionsList().subscribe(data => this.question = data);
        this.ngRedux.dispatch(this.actions.resetQuestion());
    }

    evaluateAnswer(e) {
        if (e.target.textContent === this.question[this.count - 1].goodAnswer) {
            // this.correctAnswers++;
            this.ngRedux.dispatch(this.actions.addPoint());
        }
    }

    changeView() {
        const instance = this;
        instance.router.navigateByUrl('/lastquestion');
    }

    nextQuestion(e) {
        const questionsLength: number = Object.keys(this.question).length;
        // this count ma wskazywać zawsze na aktualne pytanie takie jak w "pytanie x z y"
        console.log(this.count);
        if (this.count < questionsLength) {
            this.evaluateAnswer(e);
            this.ngRedux.dispatch(this.actions.nextQuestion());
        } else if (this.count === questionsLength) {
            // ostatnie pytanie - sprawdź odp i przenieś
            this.evaluateAnswer(e);
            this.changeView();
        }
    }

    previousQuestion() {
        if (this.count > 1) {
            this.ngRedux.dispatch(this.actions.previousQuestion());
        }
    }
}
