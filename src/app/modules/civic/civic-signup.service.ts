import { Injectable } from '@angular/core';
import {CivicComponent} from './civic.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CivicSignupService {
  private civicObject:CivicComponent;
  private flagSource=new BehaviorSubject<number>(-1);
  currentFlag=this.flagSource.asObservable();
  constructor() { }

  init(x:CivicComponent){
    this.civicObject=x;
  }
//this flag is observable and the changes in flag should be visible in real time to dependent component
  updateFlag(n:number){
    console.log('updating flag ' +n);
    this.flagSource.next(n);
  }

  getJwtToken():string{
    return this.civicObject.getJwtToken();
  }
  getSignupObject():CivicComponent{
    return this.civicObject;
  }

  getError():any{
    return this.civicObject.getError();
  }
  getFlag():any{
    return this.civicObject.flag;
  }
}
