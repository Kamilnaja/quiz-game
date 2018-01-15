import { Injectable } from '@angular/core';
import Question from 'app/question';
import { Http, HttpModule, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
/*
* Class returns data from db
*/
export class QuestionsService {
    private url = 'http://localhost:8080';
    constructor(private http: Http) { }

    getQuestionsList() {
        return this.http
            .get(`${this.url}/api/questions`)
            .map((res: Response) => res.json());
    }

    getQuestionsListLength() {
        return this.http
            .get(`${this.url}/api/questions_length`)
            .map((res: Response) => res.json());
    }
    
    removeQuestionsList() {
        this.http
            .delete(`${this.url}/api/delete_questions`);
    }

    removeQuestion(item: String) {
        this.http
            .delete(`${this.url}/api/delete_question/${item}`)
            .subscribe(
            () => { },
            err => console.log(err));

    }

    addQuestion(payload) {
        // przekaż dane z formularza
        const body = payload;
        this.http
            .post(`${this.url}/api/create_question`, body)
            .subscribe(
            () => { },
            err => console.log(err));
    }
}

export default QuestionsService;