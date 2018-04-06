import { Component, OnInit } from '@angular/core';

import { CivicSignupService } from './modules/civic/civic-signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  message:any;
  constructor(private civicServ:CivicSignupService){

  }
  ngOnInit(){
    this.civicServ.currentFlag.subscribe(flag =>this.message=flag);
    console.log('app component oninit');
  }
  updateMessage(){
    this.message=this.civicServ.getSignupObject().buttonText;
  }
  updateMessagetoFlag(){
    this.message=this.civicServ.getSignupObject().flag.toString();

  }
   updateMessagetoToken(){
    this.message=this.civicServ.getJwtToken();

  }
  updateMessagetoError(){
    //this.message=this.civicServ.getSignupObject().getError();
    this.message=this.civicServ.getError();
  }
  updateMessagetoId(){
    this.message=this.civicServ.getSignupObject().Id;

  }
  
}
