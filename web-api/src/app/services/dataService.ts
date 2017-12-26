import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
    private questionSource = new BehaviorSubject<number>(0);
    currentQuestion = this.questionSource.asObservable();
    constructor() { }
    
    changeQuestion(question: number) {
        this.questionSource.next(question);
    }
}
