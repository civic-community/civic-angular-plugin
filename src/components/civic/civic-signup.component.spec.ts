import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicSignupComponent } from './civic-signup.component';

describe('CivicSignupComponent', () => {
  let component: CivicSignupComponent;
  let fixture: ComponentFixture<CivicSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivicSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
