import { Component, OnInit, Input } from '@angular/core';
import questionsService, { QuestionsService } from 'app/services/questionsService';
import { Http, HttpModule } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'store';
import { CounterActions } from 'app/app.actions';

@Component({
  selector: 'app-display-question',
  templateUrl: './displayAllQuestions.html',
})

export class DisplayAllQuestionsComponent implements OnInit {
  public questionsList: {};
  public questionsLength: number;
  subscription;
  count: number;

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

  deleteQuestion (e: any){
    this.questionsService.removeQuestion(e.target.id);
  }

  ngOnInit() {
    this.questionsService.getQuestionsList()
      .subscribe(data => this.questionsList = data);
    this.questionsService.getQuestionsList()
      .subscribe(data => this.questionsLength = data.length);
  }
}
