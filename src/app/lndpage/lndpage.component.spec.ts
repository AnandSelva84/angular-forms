import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LndpageComponent } from './lndpage.component';

describe('LndpageComponent', () => {
  let component: LndpageComponent;
  let fixture: ComponentFixture<LndpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LndpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LndpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
