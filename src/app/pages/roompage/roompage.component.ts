import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomItem } from '../../models/actionItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roompage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roompage.component.html',
  styleUrl: './roompage.component.scss',
})
export class RoompageComponent {
  searchText = signal('');
  selectedRoomId = signal<string | null>(null);
  isLoading = signal(false);

  readonly userName = 'Thanakrit';
  readonly projectName = 'บ้านเอื้ออาทรเทพารักษ์ 3/2';

  rooms: RoomItem[] = [
    {
      id: '1',
      roomNo: '101-03',
      building: 'อาคาร A',
      floor: 'ชั้น 1',
      status: 'active',
      note: 'ห้องหลัก',
    },
    {
      id: '2',
      roomNo: '203-12',
      building: 'อาคาร B',
      floor: 'ชั้น 2',
      status: 'active',
      note: 'ห้องเสริม',
    },
    {
      id: '3',
      roomNo: '305-08',
      building: 'อาคาร C',
      floor: 'ชั้น 3',
      status: 'pending',
      note: 'รออนุมัติ',
    },
    {
      id: '4',
      roomNo: '410-01',
      building: 'อาคาร D',
      floor: 'ชั้น 4',
      status: 'inactive',
      note: 'ปิดใช้งานชั่วคราว',
    },
  ];

  constructor(private router: Router) {}

  selectRoom(id: string) {
    this.selectedRoomId.set(id);
  }

  onConfirm() {
    if (!this.selectedRoomId()) return;

    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.router.navigate(['/home']);
    }, 800);
  }

  goToHome(room: any, event: Event) {
    event.stopPropagation(); // ❗ กันไม่ให้ click ไปโดน selectRoom

    localStorage.setItem('selectedRoom', JSON.stringify(room));

    this.router.navigate(['/home']);
  }
}
