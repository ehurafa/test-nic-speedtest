import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  msg: string = 'Medindo a velocidade da sua internet...';

  constructor() { }

  ngOnInit() {
  }

}
