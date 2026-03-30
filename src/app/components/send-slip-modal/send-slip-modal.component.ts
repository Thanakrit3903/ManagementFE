import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-send-slip-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './send-slip-modal.component.html',
  styleUrls: ['./send-slip-modal.component.scss'],
})
export class SendSlipModalComponent {
  @Input() open = false;
  @Input() accountName = 'ธนาคาร : ธนาคาร กรุงเทพฯ';
  @Input() accountNo = 'เลขบัญชี : 1995478318';
  @Input() userName = 'บ้านเอื้ออาทรเทพารักษ์ 3/2';

  @Output() close = new EventEmitter<void>();
  @Output() submitSlip = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  phone = '';
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  // 🔔 Toast
  toastMessage = '';
  showToastFlag = false;

  darkMode = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    public theme: ThemeService
  ) {}

  ngOnInit() {
    this.darkMode = this.theme.isDark();
  }

  /* ---------------- CLOSE ---------------- */
  closeModal() {
    this.close.emit();
  }

  /* ---------------- COPY ACCOUNT ---------------- */
  copyAccountNumber() {
    const text = this.accountNo.replace(/[^\d]/g, '');

    navigator.clipboard.writeText(text).then(() => {
      this.toastr.success('คัดลอกเลขบัญชีเรียบร้อยแล้ว ✅');
    });
  }

  fallbackCopy(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      this.showToast('คัดลอกเลขบัญชีเรียบร้อยแล้ว ✅');
    } catch {
      this.showToast('ไม่สามารถคัดลอกได้ ❌');
    }

    document.body.removeChild(textarea);
  }

  /* ---------------- TOAST ---------------- */
  showToast(message: string) {
    this.toastMessage = message;
    this.showToastFlag = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showToastFlag = false;
    }, 2000);
  }

  /* ---------------- FILE ---------------- */
  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedFile = file;
    this.previewUrl = URL.createObjectURL(file);
  }

  removeFile() {
    this.selectedFile = null;
    this.previewUrl = null;
    this.fileInput.nativeElement.value = '';
  }

  /* ---------------- SUBMIT ---------------- */
  submit() {
    this.submitSlip.emit({
      phone: this.phone,
      file: this.selectedFile,
    });
    this.toastr.success('อัปโหลดสำเร็จ 🎉');
    this.closeModal();
  }
}
