import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {
  constructor() {}
  questionList = [{
    id: 1,
    content: 'Zaznacz slowo na C',
    answers: ['lorem', 'ipsum', 'dolor', 'consectetur']
  },
  {
    id: 2,
    content: 'Zaznacz slowo na L',
    answers: {
      '1': 'Lorem',
      '2': 'Ipsum',
      '3': 'Dolor',
      '4': 'Consectetur'
    }
  }];

  getQuestionsList() {
    return this.questionList;
    // this.questionList = this.questionService.getQuestionsList();
  }
}
export default QuestionsService;
