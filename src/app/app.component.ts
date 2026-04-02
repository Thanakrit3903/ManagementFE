import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

declare const liff: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'ManagementFE';
 userId: string = '';
  constructor(private theme: ThemeService) {}

  async ngOnInit() {
    this.theme.init();

    try {
      await liff.init({
        liffId: 'https://miniapp.line.me/2009663047-Ks8TZQbC', // Use your own LIFF ID
      });

      console.log('LIFF Ready');

      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        this.userId = profile.userId;
      } else {
        liff.login();
      }

    } catch (err) {
      console.error(err);
    }
  }
}
