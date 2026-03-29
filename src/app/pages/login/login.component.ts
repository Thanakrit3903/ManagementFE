// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = signal(false);
  loginError = signal('');

  readonly projectName = 'บ้านเอื้ออาทรเทพารักษ์ 3/2';
  readonly companyName = 'บริษัท พีค 2022 แมเนจเม้นท์ จำกัด';
  readonly adminName = 'ปกรณ์ (PK)';
  readonly adminPhone = '080-220-4491';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      tenantCode: [
        '',
        [Validators.required, Validators.pattern(/^\d{3}-\d{2}$/)],
      ],
    });
  }

  get tenantCodeCtrl() {
    return this.loginForm.get('tenantCode')!;
  }

  get showError(): boolean {
    return (
      this.tenantCodeCtrl.invalid &&
      (this.tenantCodeCtrl.dirty || this.tenantCodeCtrl.touched)
    );
  }

  getErrorMessage(): string {
    if (this.tenantCodeCtrl.hasError('required')) return 'กรุณากรอกรหัสลูกบ้าน';
    if (this.tenantCodeCtrl.hasError('pattern'))
      return 'รูปแบบไม่ถูกต้อง เช่น 101-03';
    return '';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loginError.set('');
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      console.log('Login:', this.tenantCodeCtrl.value);
      this.router.navigate(['/home']);
    }, 1800);
  }
}