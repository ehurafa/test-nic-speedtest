import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  getMeasurementHistory( metric ){
    if( metric == 'download'){
      return localStorage.getItem('localMeasurementHistoryDownload');
    }

    if( metric == 'upload'){
      return localStorage.getItem('localMeasurementHistoryUpload');
    }

  }

  setMeasurementHistory( item, metric ){
    if( metric == 'download'){
      localStorage.setItem('localMeasurementHistoryDownload', item);
    }

    if( metric == 'upload'){
      localStorage.setItem('localMeasurementHistoryUpload', item);
    }
  }

  getMeasurementHistoryUpload(){
    return localStorage.getItem('localMeasurementHistoryUpload');
  }

  setMeasurementHistoryUpload(item){
    localStorage.setItem('localMeasurementHistoryUpload', item);
  }

}
