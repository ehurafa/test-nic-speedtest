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
  getGlobalMeasurementHistory(){
    return localStorage.getItem('localMeasurementHistory');
  }

  setMeasurementHistory( item, metric ){
    if( metric == 'download'){
      localStorage.setItem('localMeasurementHistoryDownload', JSON.stringify(item));
    }

    if( metric == 'upload'){
      localStorage.setItem('localMeasurementHistoryUpload', JSON.stringify(item));
    }
  }
  setGlobalMeasurementHistory( item ){
    console.log('setGlobalMeasurementHistory ', item );
    localStorage.setItem('localMeasurementHistory', JSON.stringify(item));
  }


}
