import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: AdminDetailComponent;
  let fixture: ComponentFixture<AdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
