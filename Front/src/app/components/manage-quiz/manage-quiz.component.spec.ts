import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuizComponent } from '../../services/manage-quiz.component';

describe('ManageQuizComponent', () => {
  let component: ManageQuizComponent;
  let fixture: ComponentFixture<ManageQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
