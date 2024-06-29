import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAgenceComponent } from './dashbord-agence.component';

describe('DashbordAgenceComponent', () => {
  let component: DashbordAgenceComponent;
  let fixture: ComponentFixture<DashbordAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordAgenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
