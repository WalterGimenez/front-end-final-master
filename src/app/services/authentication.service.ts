import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username: string, password: string){
    
    if(username === "walter" && password === "1234"){
      sessionStorage.setItem('authenticaterUser', username);
      
      return true;
    }else{
      return false;
    }
  }

  isUserLogged(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
