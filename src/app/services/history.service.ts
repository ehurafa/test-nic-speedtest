import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  getMeasurementHistory( metric ){
    console.log('metric ', metric );
    if( metric == 'download'){
      return localStorage.getItem('localMeasurementHistoryDownload');
    }

    if( metric == 'upload'){
      return localStorage.getItem('localMeasurementHistoryUpload');
    }

    console.log('>> ', localStorage.getItem('localMeasurementHistoryDownload'));
  }

  setMeasurementHistory(item, metric ){
    if( metric == 'download'){
      localStorage.setItem('localMeasurementHistoryDownload', item);
    }

    if( metric == 'upload'){
      localStorage.setItem('localMeasurementHistoryUpload', item);
    }

  }

  getMeasurementHistoryUpload(){
    return localStorage.getItem('localMeasurementHistoryUpload');
    console.log('>> ', localStorage.getItem('localMeasurementHistoryUpload'));
  }

  setMeasurementHistoryUpload(item){
    localStorage.setItem('localMeasurementHistoryUpload', item);
  }

}
