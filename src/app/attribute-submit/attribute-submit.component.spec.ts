import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSubmitComponent } from './attribute-submit.component';

describe('AttributeSubmitComponent', () => {
  let component: AttributeSubmitComponent;
  let fixture: ComponentFixture<AttributeSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
