import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicComponent } from './civic.component';

describe('CivicComponent', () => {
  let component: CivicComponent;
  let fixture: ComponentFixture<CivicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
