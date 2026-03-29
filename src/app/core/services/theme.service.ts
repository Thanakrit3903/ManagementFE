import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private key = 'darkMode';

  init() {
    const saved = localStorage.getItem(this.key);
    const isDark = saved === 'true';

    this.apply(isDark);
  }

  toggle() {
    const isDark = this.isDark();
    this.apply(!isDark);
    localStorage.setItem(this.key, String(!isDark));
  }

  apply(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  isDark(): boolean {
    return document.body.classList.contains('dark');
  }
}