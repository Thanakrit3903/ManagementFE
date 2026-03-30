import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SendSlipModalComponent } from '../../components/send-slip-modal/send-slip-modal.component';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, SendSlipModalComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  user = {
    name: 'Dev Test User',
    address: 'บ้านเอื้ออาทรเทพารักษ์ 3/2 - 000-00',
    balance: 0,
  };

  invoices: any[] = [];
  invoiceDetails: any[] = [];
  sidebarOpen = false;
  darkMode = false;
  slipModalOpen = false;

  constructor(public theme: ThemeService) {}

  ngOnInit() {
    this.darkMode = this.theme.isDark();
  }

  goBack() {
    history.back();
  }

  openSlipModal() {
    this.slipModalOpen = true;
  }

  closeSlipModal() {
    this.slipModalOpen = false;
  }

  onSlipSubmit(payload: { phone: string; file: File | null }) {
    console.log('submitted slip:', payload);
  }
}
