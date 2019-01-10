import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleVoteComponent } from './article-vote.component';

describe('ArticleVoteComponent', () => {
  let component: ArticleVoteComponent;
  let fixture: ComponentFixture<ArticleVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
