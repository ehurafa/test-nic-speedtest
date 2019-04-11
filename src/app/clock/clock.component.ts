import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  velocity = {
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

  constructor() { }

  getRandomInt(min, max) {
    //return Math.floor(Math.random() * (max - min + 1)) + min;
    return + parseFloat(Math.random() * (max - min + 1) + min).toFixed(2);
  }

  calcNet( metric ){

    console.log('bla ', metric);

    let loop = setInterval(()=>{
      this.totalTime ++;

      if( this.totalTime < 21){

        metric.value = this.getRandomInt(90,100);
        metric.list.push(this.getRandomInt(90,100));

      }else{

        let total = metric.list.reduce(function(t, n){
            return t + n;
           }, 0);
        console.log('reduce ', (total / 10).toFixed(2));
        console.log('lista ', metric.list);
        console.log('lista length ', metric.list.length);
        clearInterval(loop);

      }
      console.log('range ', this.getRandomInt(90,200));
      console.log('rr ', this.totalTime);

    }, 100);

  }
  ngOnInit() {
    this.calcNet(this.velocity.download);
    this.calcNet(this.velocity.upload);
  }

}
