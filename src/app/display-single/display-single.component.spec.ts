import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleComponent } from './display-single.component';

describe('DisplaySingleComponent', () => {
  let component: DisplaySingleComponent;
  let fixture: ComponentFixture<DisplaySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
