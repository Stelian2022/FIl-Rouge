import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCompletionComponent } from './quiz-completion.component';

describe('QuizCompletionComponent', () => {
  let component: QuizCompletionComponent;
  let fixture: ComponentFixture<QuizCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
