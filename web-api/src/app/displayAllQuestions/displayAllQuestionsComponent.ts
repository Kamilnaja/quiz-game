import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'app/services/questionsService';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-display-question',
  templateUrl: './displayAllQuestions.html',
})

export class DisplayAllQuestionsComponent implements OnInit {
  public questionsList: {};
  public questionsLength: number;

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.questionsService.getQuestionsList()
      .subscribe(data => this.questionsList = data);
    this.questionsService.getQuestionsList()
      .subscribe(data => this.questionsLength = data.length);
  }
}
