import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSlipModalComponent } from './send-slip-modal.component';

describe('SendSlipModalComponent', () => {
  let component: SendSlipModalComponent;
  let fixture: ComponentFixture<SendSlipModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendSlipModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendSlipModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
