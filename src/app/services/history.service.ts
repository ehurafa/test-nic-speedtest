import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  getMeasurementHistory( metric ){
    if( metric == 'download'){
      let res = localStorage.getItem('localMeasurementHistoryDownload');
     // console.log('res: ', JSON.parse(res));
      return res;
    }

    if( metric == 'upload'){
      let res = localStorage.getItem('localMeasurementHistoryUpload');
      return res;
    }

  }

  setMeasurementHistory( item, metric ){
    if( metric == 'download'){
      localStorage.setItem('localMeasurementHistoryDownload', JSON.stringify(item));
    }

    if( metric == 'upload'){
      localStorage.setItem('localMeasurementHistoryUpload', JSON.stringify(item));
    }
  }

  getMeasurementHistoryUpload(){
    return localStorage.getItem('localMeasurementHistoryUpload');
  }

  setMeasurementHistoryUpload(item){
    localStorage.setItem('localMeasurementHistoryUpload', item);
  }

}
