import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string = "Silvio Santos";

  edit: boolean = false;

  constructor( private userService: UserService ) {  }

  editing(){
    this.edit = !this.edit;
    this.setUser( this.name );
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    let str = this.userService.getUser();
    if( str ){
      str = str.replace(/['"]+/g, '');
      this.name = str;
    }
  }

  setUser( user ){
    this.userService.setUser( user );
  }

}
