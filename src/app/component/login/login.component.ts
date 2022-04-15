import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //email!: string;
  //password!: string;
  username = "walter";
  password!: string;
  errorMessage = "Credenciales inválidas ";
  invalidLogin = false;

  constructor(public userService: UserService, public router: Router, private authentication: AuthenticationService) {}

  /*login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setTokenStorage(data.token);
      this.router.navigate(['/']);
    });
    
  }*/

  hadleLogin(){
    if(this.authentication.authenticate(this.username, this.password)){
      this.router.navigate(['edicion']);
    }else{
      this.invalidLogin = true;
    }
  }

  userLogged(){
    
  }

  

  ngOnInit (): void {
  }
} 