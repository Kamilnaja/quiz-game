import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {
  question: {};
  constructor(private questionService:QuestionsService) { }
  ngOnInit() {
    this.question = this.questionService.getQuestionsList();
  }
}
