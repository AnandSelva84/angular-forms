import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncontractphysicianComponent } from './noncontractphysician.component';

describe('NoncontractphysicianComponent', () => {
  let component: NoncontractphysicianComponent;
  let fixture: ComponentFixture<NoncontractphysicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncontractphysicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncontractphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
