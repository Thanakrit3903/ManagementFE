import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItem } from '../../models/actionItem';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  @Input() open = true;
  @Input() darkMode = false;

  @Output() openChange = new EventEmitter<boolean>();
  @Output() darkModeChange = new EventEmitter<boolean>();
  @Output() menuClick = new EventEmitter<string>();

  items: SidebarItem[] = [
    {
      id: 'details',
      label: 'รายละเอียด',
      subtitle: 'ข้อมูลหลักของระบบ',
      icon: 'bi bi-wallet2',
      gradientClass: 'item-blue',
    },
    {
      id: 'transfer',
      label: 'ส่งสลิปโอนเงิน',
      subtitle: 'อัปโหลดสลิปและส่งข้อมูล',
      icon: 'bi bi-file-earmark-arrow-up',
      gradientClass: 'item-purple',
    },
    {
      id: 'copyAccount',
      label: 'คัดลอกเลขบัญชี',
      subtitle: 'แตะเพื่อคัดลอกเลขบัญชี',
      icon: 'bi bi-clipboard2',
      gradientClass: 'item-slate',
    },
    {
      id: 'report',
      label: 'แจ้งเหตุรูป/ขอความช่วยเหลือด่วน',
      subtitle: 'กรณีเร่งด่วนหรือปัญหา',
      icon: 'bi bi-exclamation-triangle',
      gradientClass: 'item-orange',
    },
    {
      id: 'request',
      label: 'เขียนใบคำร้อง',
      subtitle: 'ส่งคำร้องและเอกสาร',
      icon: 'bi bi-file-text',
      gradientClass: 'item-green',
    },
    {
      id: 'plateCheck',
      label: 'ตรวจสอบเลขทะเบียนรถ',
      subtitle: 'ค้นหาและตรวจสอบข้อมูลรถ',
      icon: 'bi bi-car-front',
      gradientClass: 'item-blue',
    },
  ];

  close() {
    this.openChange.emit(false);
  }
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeChange.emit(this.darkMode);
  }

  selectItem(id: string) {
    this.menuClick.emit(id);
  }
}
