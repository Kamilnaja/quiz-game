import { Injectable } from '@angular/core';
import {questionList} from './questionList';
import Question from 'app/question';

@Injectable()
export class QuestionsService {
  constructor() {}


  getQuestionsList(): Question[] {
    return questionList;
  }
}

export default QuestionsService;
