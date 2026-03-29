import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItem } from '../../../models/actionItem';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  @Input() darkMode = false;
  @Input() isOpen = false;
  @Output() onClose = new EventEmitter<void>();

  constructor(public theme: ThemeService) {}

  ngOnInit() {
    this.darkMode = this.theme.isDark();
    console.log(this.isOpen);
  }

  close() {
    this.onClose.emit();
  }

  toggleDarkMode() {
    this.theme.toggle();
  }

  isDark() {
    return this.theme.isDark();
  }

}
