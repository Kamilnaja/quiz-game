import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-display-single',
  templateUrl: './display-single.component.html',
})
export class DisplaySingleComponent implements OnInit {
  currentNum: number;
  question: {};
  questionsLength: number;
  properAnswers = 0;

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.question = this.questionService.getQuestionsList();
    this.currentNum = 0;
    this.questionsLength = Object.keys(this.question).length;
  }

  nextQuestion(e) {
    // porównaj target z odpowiedzią na pytanie
    if (e.target.textContent === this.question[this.currentNum].goodAnswer) {
      this.properAnswers++;
      // todo - wyślij odpowiedzi do ostatniego componentu
    }
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
