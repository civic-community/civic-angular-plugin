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
  flag:string;
  Id:string=environment.appId;
  buttonText:string=environment.buttonName;


  constructor() { }

  ngOnInit() {
    this.civicSip=new civic.sip({appId:this.Id});

  }
  sendSignUpRequest(){
   
    this.civicSip.signup({ style: 'popup', scopeRequest: this.civicSip.ScopeRequests.BASIC_SIGNUP });
    this.civicSip.on('auth-code-received', function (event) {
     
  
      // encoded JWT Token is sent to the server
     this.jwtToken = event.response;
     console.log(this.jwtToken);
      this.flag="success";
     
      
    });
  
    this.civicSip.on('user-cancelled', function (event) {
     console.log("user cancelled");
     this.flag="user cancelled";
     });
  
    this.civicSip.on('read', function (event) {
      this.flag="read";
    });
  
    this.civicSip.on('civic-sip-error', function (error) {
        // handle error display if necessary.
        console.log('   Error type = ' + error.type);
        console.log('   Error message = ' + error.message);
        this.flag="error\t"+error.type+"\t"+error.message;
      });
  }

}
