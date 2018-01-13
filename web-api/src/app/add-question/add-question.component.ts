import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionsService } from 'app/services/questionsService';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
})
export class AddQuestionComponent {
  constructor(
    public questionsService: QuestionsService,

  ) { }

  onSubmit = function (question) {
    const payload = {
      title: question.title,
      answers: [question.firstAnswer, question.secondAnswer, question.thirdAnswer, question.fourthAnswer],
      goodAnswer: question.goodAnswer
    };

    if (question.title) {
      this.questionsService.addQuestion(payload);
      console.log('Twoje pytanie zostało dodane')
    } else {
      console.log('wpisz wszystkie dane')
    }
    
  };
}
