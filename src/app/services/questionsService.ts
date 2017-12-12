import { Injectable } from '@angular/core';
import { questionList } from 'app/questionList';
import Question from 'app/question';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {
  apiRoot = 'http://localhost:8080/api';
  constructor(private http: Http) {}
  public localVar: any;

  getQuestonsList() {
    return this.http.get(this.apiRoot).map(res => res.json());
  }
}

export default QuestionsService;
