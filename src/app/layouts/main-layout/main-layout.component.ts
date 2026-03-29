import { Component } from '@angular/core';
import { AppFooterComponent } from '../../shared/components/app-footer/app-footer.component';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { SidebarMenuComponent } from '../../shared/components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [AppFooterComponent, RouterOutlet, SidebarMenuComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  isDarkMode = true;
  // sidebarOpen = false;
  constructor(public theme: ThemeService) {}

  // toggleSidebar() {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  // closeSidebar() {
  //   this.sidebarOpen = false;
  // }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

}
