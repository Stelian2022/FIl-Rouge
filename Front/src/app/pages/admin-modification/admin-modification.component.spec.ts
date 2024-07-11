import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModificationComponent } from './admin-modification.component';

describe('AdminModificationComponent', () => {
  let component: AdminModificationComponent;
  let fixture: ComponentFixture<AdminModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
