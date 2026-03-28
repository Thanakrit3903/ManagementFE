import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateCheckModalComponent } from './plate-check-modal.component';

describe('PlateCheckModalComponent', () => {
  let component: PlateCheckModalComponent;
  let fixture: ComponentFixture<PlateCheckModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateCheckModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlateCheckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
