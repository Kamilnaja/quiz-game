import { Injectable } from '@angular/core';
import Question from 'app/question';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { questionList } from 'app/question-list';

@Injectable()
/*
* Class returns data from json file (in the futer, from db);
*/
export class QuestionsService {
  constructor() {}

  getQuestionsList(): Question[] {
    return questionList;
  }

  getQuestionsListLength(): number {
    return questionList.length;
  }
}

export default QuestionsService;
