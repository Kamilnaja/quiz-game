import { Component,  Input , OnChanges} from '@angular/core';
import { QuestionsService } from '../services/questionsService';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnChanges {
    count: number;
    @Input()
    currentQuestion: number;
    constructor(
        public questionService: QuestionsService
    ) { }

    ngOnChanges() {
        this.count = this.currentQuestion;
    }
}
