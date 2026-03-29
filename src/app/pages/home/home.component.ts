import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppMenuItem } from '../../models/actionItem';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SidebarMenuComponent } from '../../shared/components/sidebar-menu/sidebar-menu.component';
import { AuthModalComponent } from '../../components/auth-modal/auth-modal.component';
import { PlateCheckModalComponent } from '../../components/plate-check-modal/plate-check-modal.component';
import { ReportModalComponent } from '../../components/report-modal/report-modal.component';
import { RequestModalComponent } from '../../components/request-modal/request-modal.component';
import { SendSlipModalComponent } from '../../components/send-slip-modal/send-slip-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarMenuComponent,
    SendSlipModalComponent,
    ReportModalComponent,
    RequestModalComponent,
    PlateCheckModalComponent,
    AuthModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  sidebarOpen = false;
  darkMode = false;
  slipModalOpen = false;
  reportModalOpen = false;
  requestModalOpen = false;
  openPlate = false;
  openAuthInfos = false;

  menuItems: AppMenuItem[] = [
    {
      id: 'Detail',
      title: 'รายละเอียด',
      subtitle: 'ข้อมูลหลักของระบบ',
      icon: 'bi bi-wallet2',
      bgClass: 'tile-blue',
    },
    {
      id: 'transfer',
      title: 'ส่งสลิปโอนเงิน',
      subtitle: 'อัปโหลดและส่งสลิป',
      icon: 'bi bi-file-earmark-arrow-up',
      bgClass: 'tile-purple',
    },
    {
      id: 'copyAccount',
      title: 'คัดลอกเลขบัญชี',
      subtitle: 'แตะเพื่อคัดลอก',
      icon: 'bi bi-clipboard2',
      bgClass: 'tile-slate',
    },
    {
      id: 'payment',
      title: 'รายละเอียดการชำระเงิน',
      subtitle: 'ดูประวัติและสถานะการชำระเงิน',
      icon: 'bi bi-cash-coin',
      bgClass: 'tile-green',
    },
    {
      id: 'report',
      title: 'แจ้งเหตุ รปภ/ขอความช่วยเหลือด่วน',
      subtitle: 'เมนูแจ้งปัญหาเร่งด่วน',
      icon: 'bi bi-exclamation-triangle',
      bgClass: 'tile-orange',
    },
    {
      id: 'request',
      title: 'เขียนใบคำร้อง',
      subtitle: 'แบบฟอร์มคำร้อง',
      icon: 'bi bi-file-text',
      bgClass: 'tile-green',
    },
    {
      id: 'plateCheck',
      title: 'ตรวจสอบเลขทะเบียนรถ',
      subtitle: 'ค้นหาข้อมูลรถ',
      icon: 'bi bi-car-front',
      bgClass: 'tile-blue',
    },
    {
      id: 'authInfo',
      title: 'ตรวจสอบข้อมูล',
      subtitle: 'ตรวจสอบข้อมูลส่วนตัวและบัญชี',
      icon: 'bi bi-person-check',
      bgClass: 'tile-slate',
    },
  ];

  user = {
    name: 'Dev Test User',
    address: 'บ้านเอื้ออาทรเทพารักษ์ 3/2 - 000-00',
    balance: 0,
  };
  accountNo = 'เลขบัญชี : 1995478318';

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  onMenuClick(id: string) {
    switch (id) {
      case 'transfer':
        this.openSlipModal();
        break;
      case 'copyAccount':
        this.copyAccountNumber();
        break;
      case 'report':
        this.openReportModal();
        break;
      case 'request':
        this.openRequestModal();
        break;
      case 'plateCheck':
        this.openPlateCheck();
        break;
      case 'authInfo':
        this.openAuthInfo();
        break;
      default:
        this.router.navigate([`/${id.toLowerCase()}`]);
    }
  }

  copyAccountNumber() {
    const text = this.accountNo.replace(/[^\d]/g, '');

    navigator.clipboard.writeText(text).then(() => {
      this.toastr.success('คัดลอกเลขบัญชี 1995478318 เรียบร้อยแล้ว ✅');
    });
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

  openReportModal() {
    this.reportModalOpen = true;
  }

  closeReportModal() {
    this.reportModalOpen = false;
  }

  onReportSubmit(payload: { phone: string }) {
    console.log('submitted report:', payload);
  }

  openRequestModal() {
    this.requestModalOpen = true;
  }

  closeRequestModal() {
    this.requestModalOpen = false;
  }

  onRequestSubmit(payload: {
    phone: string;
    title: string;
    detail: string;
    file: File | null;
  }) {
    console.log('submitted request:', payload);
  }

  openPlateCheck() {
    this.openPlate = true;
  }

  closePlateCheck() {
    this.openPlate = false;
  }

  openAuthInfo() {
    this.openAuthInfos = true;
  }

  closeAuthInfo() {
    this.openAuthInfos = false;
  }

  onAuthInfoConfirm(password: string) {
    console.log('confirm auth info with password:', password);
  }
}
