import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-display-single',
  templateUrl: './display-single.component.html',
  styleUrls: ['./display-single.component.css']
})
export class DisplaySingleComponent implements OnInit {
  currentNum: number;
  question: {};
  questionsLength: number;

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.question = this.questionService.getQuestionsList();
    this.currentNum = 0;
    this.questionsLength = Object.keys(this.question).length;
  }

  nextQuestion() {
    // aktualny nr pytania ma być krotszy od długości tablicy pytań - 1
    if (this.currentNum < this.questionsLength - 1) {
      return this.currentNum++;
    } else {
      // todo - poprawić, żeby nie było przeładowania strony
      window.location.href = 'http://localhost:4200/lastquestion';
    }
  }

  previousQuestion() {
    // if number is less or equal than one, do not decrement
    if (this.currentNum > 0) {
      return this.currentNum--;
    }
  }

}
