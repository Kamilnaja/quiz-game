import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit, OnChanges {
    @Input()

    data;
    currentQuestion: number;
    currentLength: number;
    constructor(
    ) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.currentQuestion = this.data;
        this.currentLength = Math.floor(this.currentQuestion * 100 / 3) ;  
        console.log(this.currentLength);
    }

}
