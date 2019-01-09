import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAnalysisSubmitComponent } from './full-analysis-submit.component';

describe('FullAnalysisSubmitComponent', () => {
  let component: FullAnalysisSubmitComponent;
  let fixture: ComponentFixture<FullAnalysisSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullAnalysisSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAnalysisSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
