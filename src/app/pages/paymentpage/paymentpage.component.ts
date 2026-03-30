import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-paymentpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paymentpage.component.html',
  styleUrl: './paymentpage.component.scss',
})
export class PaymentpageComponent {
  user = {
    name: 'Dev Test User',
    address: 'บ้านเอื้ออาทรเทพารักษ์ 3/2 - 000-00',
  };

  receipts: any[] = [];
  receiptDetails: any[] = [];
  darkMode = false;

  constructor(public theme: ThemeService) {}
  
  ngOnInit() {
    this.darkMode = this.theme.isDark();
  }

  goBack() {
    history.back();
  }
}
