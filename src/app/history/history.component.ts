import { Component, OnInit } from '@angular/core';

import { HistoryService } from '../services/history.service'



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: any = null;

  constructor( private historyService: HistoryService ) { }

  ngOnInit() {
    console.log(this.historyService.getGlobalMeasurementHistory());
    console.log(typeof this.historyService.getGlobalMeasurementHistory());
    this.history = this.historyService.getGlobalMeasurementHistory();
    //console.log( JSON.parse(this.history) );
    console.log( this.history);
    console.log( JSON.parse(this.history));

    this.history = JSON.parse(this.history);
    console.log(typeof this.history);
  }

}
