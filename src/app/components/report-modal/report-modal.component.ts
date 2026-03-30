import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-report-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-modal.component.html',
  styleUrl: './report-modal.component.scss',
})
export class ReportModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  phone = '';
  darkMode = false;

  constructor(public theme: ThemeService) {}

  ngOnInit() {
    this.darkMode = this.theme.isDark();
  }

  closeModal() {
    this.close.emit();
  }

  submitRequest() {
    this.submit.emit({ phone: this.phone });
  }
}
