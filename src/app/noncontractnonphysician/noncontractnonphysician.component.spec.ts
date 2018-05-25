import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncontractnonphysicianComponent } from './noncontractnonphysician.component';

describe('NoncontractnonphysicianComponent', () => {
  let component: NoncontractnonphysicianComponent;
  let fixture: ComponentFixture<NoncontractnonphysicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncontractnonphysicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncontractnonphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
