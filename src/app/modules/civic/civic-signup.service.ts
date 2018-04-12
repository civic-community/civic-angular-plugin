import { Injectable } from '@angular/core';
import {CivicComponent} from './civic.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CivicSignupService {
  private civicObject:CivicComponent;
  private flagSource=new BehaviorSubject<number>(-1);
  currentFlag=this.flagSource.asObservable();
  constructor() { }

  init(x:CivicComponent){
    this.civicObject=x;
  }
//this flag is observable and the changes in flag should be visible in real time to comsumer component
  updateFlag(n:number){
    console.log('updating flag ' +n);
    this.flagSource.next(n);
  }

  getJwtToken():string{
    
    this.civicObject.updateFlag();
    return this.civicObject.getJwtToken();
  }
  getSignupObject():CivicComponent{
    this.civicObject.updateFlag();
    return this.civicObject;
  }

  getError():any{
    this.civicObject.updateFlag();
    return this.civicObject.getError();
  }
  getFlag():any{
    this.civicObject.updateFlag();
    return this.civicObject.flag;
  }
}
