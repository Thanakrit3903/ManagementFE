import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {

  @Input() open: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<any>();

  password: string = '';

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirmAction.emit(this.password);
  }
}