import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableDetailComponent } from './vegetable-detail.component';

describe('VegetableDetailComponent', () => {
  let component: VegetableDetailComponent;
  let fixture: ComponentFixture<VegetableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegetableDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegetableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
