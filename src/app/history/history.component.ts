import { Component, OnInit, Input } from '@angular/core';

import { HistoryService } from '../services/history.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input() msg;

  history: any = null;

  constructor( private historyService: HistoryService ) { }

  ngOnInit() {
    this.history = this.historyService.getGlobalMeasurementHistory();
    this.history = JSON.parse(this.history);
  }

}
