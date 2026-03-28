import { Component, EventEmitter, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss']
})
export class RequestModalComponent {

  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  phone = '';
  title = '';
  detail = '';

  previewUrl: string | null = null;

  closeModal() {
    this.close.emit();
  }

  openFile() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.previewUrl = URL.createObjectURL(file);
  }

  submitForm() {
    this.submit.emit({
      phone: this.phone,
      title: this.title,
      detail: this.detail
    });
  }
}