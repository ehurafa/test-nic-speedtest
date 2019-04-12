import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HistoryService } from '../services/history.service'


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Output() message:EventEmitter<any> = new EventEmitter();

  msg: string = "Veja abaixo o resultado do teste de conexão!";

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
  isHistory: boolean = false;
  measurementHistory: any = [];
  measurementHistoryDownload: any = [];
  measurementHistoryUpload: any = [];

  constructor( private historyService: HistoryService ) { }

  calcNet( measurement, metric: any, arr: any ){

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

  buildListMeasurements(){
    if(this.isHistory){
      let historyResultDownload: any = JSON.parse(this.getHistory('download'));
      let historyResultUpload: any = JSON.parse(this.getHistory('upload'));
      for (let i = 0; i < historyResultDownload.length; i++) {
        let obj = {
          download: historyResultDownload[i],
          upload: historyResultUpload[i]
        };
        this.measurementHistory.push(obj);
      }

    }
  }

  ngOnInit() {
    let historyResultDownload: any = this.getHistory('download');
    let historyResultUpload: any = this.getHistory('upload');
    if( ! (
      historyResultDownload  == undefined ||
      historyResultDownload  == null ||
      historyResultDownload  == '')){
      this.measurementHistoryDownload = JSON.parse(historyResultDownload);
      console.log(historyResultDownload );
      this.isHistory = true;
    }else{
      this.isHistory = false;
    }

    if( ! (
      historyResultUpload  == undefined ||
      historyResultUpload  == null ||
      historyResultUpload  == '')){
      this.measurementHistoryUpload = JSON.parse(historyResultUpload);
      console.log(historyResultUpload );
    }

    this.calcNet(this.velocity.download, 'download', this.measurementHistoryDownload);
    this.calcNet(this.velocity.upload, 'upload', this.measurementHistoryUpload);

    console.log('this.isHistory ', this.isHistory);

    this.buildListMeasurements();
    this.historyService.setGlobalMeasurementHistory( this.measurementHistory );

    this.message.emit(this.msg);

    console.log('this.measurementHistory ', this.measurementHistory);

  }

}
