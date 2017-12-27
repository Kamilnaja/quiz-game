import { Component, OnInit} from '@angular/core';
import { DataService } from 'app/services/dataService';
import { QuestionsService } from '../services/questionsService';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})

export class ResultsComponent implements OnInit {
  message: number;
  questionsLength: number;
  constructor(
    public data: DataService,
    public questionsService: QuestionsService
  ) { }

  ngOnInit() {
    this.data.currentQuestion.subscribe(message => this.message = message);
    this.questionsLength = this.questionsService.getQuestionsListLength(); 
  }
}
