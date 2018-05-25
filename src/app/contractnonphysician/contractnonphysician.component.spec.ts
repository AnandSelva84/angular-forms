import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractnonphysicianComponent } from './contractnonphysician.component';

describe('ContractnonphysicianComponent', () => {
  let component: ContractnonphysicianComponent;
  let fixture: ComponentFixture<ContractnonphysicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractnonphysicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractnonphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
