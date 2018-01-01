import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../services/questionsService';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'store';
import { CounterActions } from 'app/app.actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})

export class ResultsComponent implements OnInit {
  message: number;
  questionsLength: number;
  subscription;
  points: number;

  constructor(

    public questionService: QuestionsService,
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions
  ) {
    this.subscription = ngRedux.select<number>('points')
      .subscribe(newCount => this.points = newCount);
  }

  ngOnInit() {
    // this.data.currentQuestion.subscribe(message => this.message = message);
    this.questionsLength = this.questionService.getQuestionsListLength();
  }
}
