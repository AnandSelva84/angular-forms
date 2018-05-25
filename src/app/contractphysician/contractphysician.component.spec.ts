import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractphysicianComponent } from './contractphysician.component';

describe('ContractphysicianComponent', () => {
  let component: ContractphysicianComponent;
  let fixture: ComponentFixture<ContractphysicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractphysicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
