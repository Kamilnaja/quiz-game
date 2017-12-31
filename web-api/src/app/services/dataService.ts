import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
/*
* Class returns data, that will change on lifecycle of app
*/
export class DataService {
    private questionSource = new BehaviorSubject<number>(0);
    currentQuestion = this.questionSource.asObservable();
    
    changeQuestion(question: number) {
        this.questionSource.next(question);
    }
}
