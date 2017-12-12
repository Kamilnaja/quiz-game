import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from 'app/services/questionsService';
import { DataService } from 'app/services/dataService';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: ' app-display-single',
  templateUrl: './display-single.component.html',
})

export class DisplaySingleComponent implements OnInit, OnDestroy {
  question: {};
  questionsLength: number;
  correctAnswers = 0;
  message: number;
  router: Router;
  currentNum: number;

  constructor(
    public questionsService: QuestionsService,
    private data: DataService,
    _router: Router
  ) {
    this.router = _router;
  }
  
  ngOnInit() {
    this.questionsService
      .getQuestionsList()
      .subscribe((data) => this.question = data
    );
    this.currentNum = 0;
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
