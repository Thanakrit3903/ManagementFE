import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PaymentpageComponent } from './pages/paymentpage/paymentpage.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'detail', component: DetailComponent},
  // { path: 'paymentpage', component: PaymentpageComponent}

  // ✅ Layout ปกติ (มี sidebar + footer)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'payment', component: PaymentpageComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];
