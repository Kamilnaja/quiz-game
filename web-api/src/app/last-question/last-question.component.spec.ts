import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastQuestionComponent } from './last-question.component';

describe('LastQuestionComponent', () => {
  let component: LastQuestionComponent;
  let fixture: ComponentFixture<LastQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
