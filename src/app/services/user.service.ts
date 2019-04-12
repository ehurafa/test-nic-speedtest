import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser( ){
      return localStorage.getItem('localUser');
  }

  setUser( user ){

      localStorage.setItem('localUser', JSON.stringify( user ));



  }


}
