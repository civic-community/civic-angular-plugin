import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
declare var civic:any;

@Component({
  selector: 'app-civic',
  templateUrl: './civic.component.html',
  styleUrls: ['./civic.component.css']
})
export class CivicComponent implements OnInit {

  civicSip:any;
  jwtToken:any;
  flag:number;
  Id:string=environment.appId;
  buttonText:string=environment.buttonName;
  error:any;
  /*
  flag index:
  1 auth-code-recieved
  2 user-cancelled
  3 read
  4 error
  after sending sign-up request using "sendSignUpRequest()" analyse returned number
  retrieve jwtToken by using  getJwtToken() method
  get the error by using getError() method
  
  */


  constructor() {
    this.flag=-1;
   }

  ngOnInit() {
    this.civicSip=new civic.sip({appId:this.Id});

  }
  sendSignUpRequest():number{
   
    this.civicSip.signup({ style: 'popup', scopeRequest: this.civicSip.ScopeRequests.BASIC_SIGNUP });
    this.civicSip.on('auth-code-received', function (event) {
     
  
      // encoded JWT Token is sent to the server
     this.jwtToken = event.response;
     this.flag=1;
     
      
    });
  
    this.civicSip.on('user-cancelled', function (event) {
     console.log("user cancelled");
     this.flag=2;
     });
  
    this.civicSip.on('read', function (event) {
      this.flag=3;
    });
  
    this.civicSip.on('civic-sip-error', function (err) {
        this.error=err;
        this.flag=4;
      });
      return this.flag;
  }
  getJwtToken():any{
    if(this.flag==1){
    return this.jwtToken;
    }
    else{
      console.log("Error jwtToken not yet recieved");
      return null;

    }
  }

  getError():any{
    if(this.flag==4){
      return this.error;

    }
    console.log("No errors while sending signup request..check flag number to find out more");
    return null;
  }


}
