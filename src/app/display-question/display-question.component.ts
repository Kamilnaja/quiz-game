import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
})
export class DisplayQuestionComponent implements OnInit {
  question: {};
  constructor(private questionService: QuestionsService) { }
  ngOnInit() {
    debugger;
    this.question = this.questionService.getQuestionsList();
  }
}
