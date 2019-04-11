import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }

}
