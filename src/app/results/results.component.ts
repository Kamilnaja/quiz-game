import { Component, OnInit} from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})

export class ResultsComponent implements OnInit {
  message: number;
  constructor(public data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
