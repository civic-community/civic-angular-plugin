import { Component, OnInit, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { CivicSignupService } from './civic-signup.service';
declare var civic:any;
declare var window:any;

@Component({
  selector: 'app-civic',
  templateUrl: './civic.component.html',
  styleUrls: ['./civic.component.css']
})
export class CivicComponent implements OnInit {

  civicSip:any;
  jwtToken:any;
  flag:number;
  Id:string;
  buttonText:string;//=environment.buttonName;
  error:any;
  defaultStyle:boolean;
  /*
  flag index:
  1 auth-code-recieved
  2 user-cancelled
  3 read
  4 error
  after sending sign-up request using "sendSignUpRequest()" analyse flag
  retrieve jwtToken by using  getJwtToken() method
  get the error by using getError() method
  Use the attribute default in your app-civic reference tag if you want to use default civic style button,Ensure that you have the css file in your main html file
  otherwise you can style it using the id that is 'signupButton'
  
  */    
 currentClasses: {};
 setCurrentClasses() {
   // CSS classes: added/removed per current state of component properties
   this.currentClasses =  {
     'civic-button-a': this.defaultStyle,
     'medium': this.defaultStyle
    
   };
 }

  constructor(x:ElementRef,private data:CivicSignupService) {
    this.flag=-1;
    this.data.updateFlag(this.flag);

   this.Id= x.nativeElement.getAttribute('appId');
   this.buttonText=x.nativeElement.getAttribute('buttonLabel'); 
   this.defaultStyle=x.nativeElement.hasAttribute('default');
   }

  ngOnInit() {
    this.civicSip=new civic.sip({appId:this.Id});
    this.setCurrentClasses();
    this.data.init(this);

  }
  sendSignUpRequest():number{
    
    this.civicSip.signup({ style: 'popup', scopeRequest: this.civicSip.ScopeRequests.BASIC_SIGNUP });
    this.civicSip.on('auth-code-received', function (event) {
     
      // encoded JWT Token is sent to the server
     this.jwtToken = event.response;
     window.buffer_flag=1;
     window.buffer_jwt=this.jwtToken;
     console.log(this.jwtToken);
    });
  
    this.civicSip.on('user-cancelled', function (event) {
     console.log("user cancelled");
     window.buffer_flag=2;

     });
  
    this.civicSip.on('read', function (event) {
     window.buffer_flag=3;

    });
  
    this.civicSip.on('civic-sip-error', function (err) {
       window.buffer_flag=4;
       window.buffer_error=err;

      });

      return 0;
  }
  getJwtToken():any{
    this.jwtToken=window.buffer_jwt;
    this.flag=window.buffer_flag;
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
