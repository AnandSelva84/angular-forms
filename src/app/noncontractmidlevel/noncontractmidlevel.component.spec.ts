import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncontractmidlevelComponent } from './noncontractmidlevel.component';

describe('NoncontractmidlevelComponent', () => {
  let component: NoncontractmidlevelComponent;
  let fixture: ComponentFixture<NoncontractmidlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoncontractmidlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoncontractmidlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
