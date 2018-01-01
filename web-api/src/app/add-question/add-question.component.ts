import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionsService } from 'app/services/questionsService';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  constructor(
    public questionsService: QuestionsService,

  ) { }

  onSubmit = function (question) {
    console.log(question);
    this.questionsService.addQuestion(question);
  };
}
