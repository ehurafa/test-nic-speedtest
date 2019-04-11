import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service'


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  velocity: any = {
    download: {
      value:0,
      list:[],
      average:0
    },
    upload: {
      value:0,
      list:[],
      average:0
    }
  };

  totalTime: number = 0;

  measurementHistoryDownload: any = [];
  measurementHistoryUpload: any = [];

  constructor( private historyService: HistoryService ) { }

  getRandomInt(min, max) {
    return + parseFloat(Math.random() * (max - min + 1) + min).toFixed(2);
  }

  getHistory( metric ){
    return this.historyService.getMeasurementHistory( metric );
    console.log( 'this.historyService.getMeasurementHistory() ', this.historyService.getMeasurementHistory( metric ) );
  }

  setHistory(item, metric){
    this.historyService.setMeasurementHistory( item, metric );
    console.log('this.measurementHistory ',  item );
  }

  calcNet( metric, measurement ){
    let loop = setInterval(()=>{
      this.totalTime ++;
      if( this.totalTime < 21){
        metric.value = this.getRandomInt(90,100);
        metric.list.push(metric.value);
      }else{
        let total = metric.list.reduce(function(t, n){
            return t + n;
           }, 0);

           measurement.push( total );
           console.log('this.measurementHistory  ', measurement );
          this.setHistory( measurement, metric );

        clearInterval(loop);
        //this.getHistory();
      }
    }, 100);


  }


  ngOnInit() {
    let historyResultDonload = this.getHistory('download');
    console.log('historyResult ',  historyResultDonload);
    console.log('historyResult ', typeof historyResultDonload);

    if(  historyResultDonload  != undefined || historyResultDonload  != null  ){
      this.measurementHistoryDownload.push( this.getHistory('download') );
    }
    this.calcNet(this.velocity.download, this.measurementHistoryDownload);
    this.calcNet(this.velocity.upload, this.measurementHistoryUpload);
  }

}
