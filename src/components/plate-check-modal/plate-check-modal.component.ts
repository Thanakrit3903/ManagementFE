import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plate-check-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plate-check-modal.component.html',
  styleUrls: ['./plate-check-modal.component.scss']
})
export class PlateCheckModalComponent {

  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  keyword = '';

  result = {
    province: '-',
    project: '-',
    address: '-',
    plate: '-',
    type: '-'
  };

  closeModal() {
    this.close.emit();
  }

  search() {
    console.log('search:', this.keyword);

    // mock data
    this.result = {
      province: 'กทม',
      project: 'บ้านเอื้ออาทร',
      address: 'บางนา',
      plate: this.keyword,
      type: 'รถยนต์'
    };
  }
}