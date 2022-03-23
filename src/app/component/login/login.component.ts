import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() eventEnver = new EventEmitter<boolean>();
  validate = false;
  user= "wrgimenez";
  pass = "validado"
  constructor() { }

  ngOnInit(): void {
  }
  
  validateUser(user: string, pass:string): void{
    if(this.user == user && this.pass == pass){
        this.validate = true;
        this.eventEnver.emit(this.validate);
        console.log("user ->", user);
        console.log("pass ->", pass);
    }
    
  }

}
