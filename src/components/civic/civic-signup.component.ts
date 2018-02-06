import { Component, OnInit } from '@angular/core';
import {AppSettings} from './../../assets/AppSettings';




declare var civic:any;
@Component({
  selector: 'civic-component',
  templateUrl: './civic-signup.component.html',
  styleUrls: ['./civic-signup.component.css']
})
export class CivicSignupComponent implements OnInit {
  settings:AppSettings;
  Id:string;
  civicSip:any;
  jwtToken:any;
  flag:string;
  

  constructor(
   
  ) {
    this.settings=new AppSettings();
   this.Id=this.settings.appId;
    this.flag="nothing";

   }

  ngOnInit(){
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


