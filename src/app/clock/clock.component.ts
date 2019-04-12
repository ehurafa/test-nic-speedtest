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
      list:[]
    },
    upload: {
      value:0,
      list:[]
    }
  };

  totalTime: number = 0;

  measurementHistoryDownload: any = [];
  measurementHistoryUpload: any = [];

  constructor( private historyService: HistoryService ) { }

  calcNet( measurement, metric, arr: any ){


    let loop = setInterval(()=>{
      this.totalTime ++;
      if( this.totalTime < 21){
        measurement.value = this.getRandomInt(90,100);
        measurement.list.push(measurement.value);

      }else{
          let sum = measurement.list.reduce(function(t, n){
          return t + n;
          }, 0);
          let media =  sum / 10;
          measurement.value = media.toFixed(2);
          arr.push( media.toFixed(2) );
          this.setHistory( arr, metric );
          clearInterval(loop);
      }
    }, 50);

  }

  getRandomInt(min, max) {
    return + parseFloat(Math.random() * (max - min + 1) + min).toFixed(2);
  }

  getHistory( metric ){
    return this.historyService.getMeasurementHistory( metric );
  }

  setHistory(item, metric){
    this.historyService.setMeasurementHistory( item, metric );
  }

  ngOnInit() {
    let historyResultDownload: any = this.getHistory('download');

    console.log(historyResultDownload );
    console.log(typeof historyResultDownload );

    if( ! (
      historyResultDownload  == undefined ||
      historyResultDownload  == null ||
      historyResultDownload  == '')){
      //historyResultDownload = historyResultDownload.split(',');
      console.log(typeof historyResultDownload );
      console.log(historyResultDownload );
      //this.measurementHistoryDownload.push( historyResultDownload );
      this.measurementHistoryDownload = JSON.parse(historyResultDownload);
      console.log(historyResultDownload );
    }else{
      console.log('vazio');
    }
    this.calcNet(this.velocity.download, 'download', this.measurementHistoryDownload);
  }

}
