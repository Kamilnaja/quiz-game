import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'app/services/questionsService';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-display-question',
  templateUrl: './displayAllQuestions.html',
})
export class DisplayAllQuestionsComponent implements OnInit {
  private question: {};
  constructor(private questionsService: QuestionsService) {
  }
  
  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.questionsService.getQuestonsList().subscribe(question => {
      this.question = question;
      console.log(question);
    });
  }
}
