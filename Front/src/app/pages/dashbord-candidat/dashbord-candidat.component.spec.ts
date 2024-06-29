import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordCandidatComponent } from './dashbord-candidat.component';

describe('DashbordCandidatComponent', () => {
  let component: DashbordCandidatComponent;
  let fixture: ComponentFixture<DashbordCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordCandidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
