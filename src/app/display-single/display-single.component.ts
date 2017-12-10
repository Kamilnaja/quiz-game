import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { DataService } from '../dataService';
import { Router } from '@angular/router';

@Component({
  selector: ' app-display-single',
  templateUrl: './display-single.component.html',
})

export class DisplaySingleComponent implements OnInit, OnDestroy {
  currentNum: number;
  question: {};
  questionsLength: number;
  correctAnswers = 0;
  message: number;
  router: Router;
  
  constructor(
    public questionService: QuestionsService,
    private data: DataService,
    _router: Router
  ) {
    this.router = _router;
  }
  
  ngOnInit() {
    this.question = this.questionService.getQuestionsList();
    this.currentNum = 0;
    this.questionsLength = Object.keys(this.question).length;
    this.data.currentQuestion.subscribe(message => this.message = message);
  }
  
  nextQuestion(e) {
    if (e.target.textContent === this.question[this.currentNum].goodAnswer) {
      this.correctAnswers++;
    }
    if (this.currentNum < this.questionsLength - 1) {
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
