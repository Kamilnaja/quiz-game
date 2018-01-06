import { Injectable } from '@angular/core';
import Question from 'app/question';
import { Http, HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { questionList } from 'app/question-list';

@Injectable()
/*
* Class returns data from json file (in the future, from db);
*/
export class QuestionsService {
    private url = 'http://localhost:8080';
    constructor(private http: Http) { }

    getQuestionsList() {
        return this.http.get(`${this.url}/questions`).map((res: Response) => res.json());
    }

    // getQuestionsListLength() {
    //     // return this.http.get(`${this.url}/questions`);
    //     return 12;
    // }

    // addQuestion(data) {
    //     questionList.push(data);
    // }
}

export default QuestionsService;
