import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractmidlevelComponent } from './contractmidlevel.component';

describe('ContractmidlevelphysicianComponent', () => {
  let component: ContractmidlevelComponent;
  let fixture: ComponentFixture<ContractmidlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractmidlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractmidlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
