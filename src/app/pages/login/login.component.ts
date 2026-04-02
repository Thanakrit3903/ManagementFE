import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get usernameCtrl() {
    return this.loginForm.get('username')!;
  }

  get passwordCtrl() {
    return this.loginForm.get('password')!;
  }

  get showUsernameError(): boolean {
    return (
      this.usernameCtrl.invalid &&
      (this.usernameCtrl.dirty || this.usernameCtrl.touched)
    );
  }

  get showPasswordError(): boolean {
    return (
      this.passwordCtrl.invalid &&
      (this.passwordCtrl.dirty || this.passwordCtrl.touched)
    );
  }

  getUsernameError(): string {
    if (this.usernameCtrl.hasError('required')) return 'กรุณากรอก Username';
    return '';
  }

  getPasswordError(): string {
    if (this.passwordCtrl.hasError('required')) return 'กรุณากรอก Password';
    if (this.passwordCtrl.hasError('minlength'))
      return 'Password อย่างน้อย 6 ตัว';
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

      const { username, password } = this.loginForm.value;
      console.log('Login:', username, password);

      // mock login
      if (username === 'admin' && password === '123456') {
        this.router.navigate(['/room']);
      } else {
        this.loginError.set('Username หรือ Password ไม่ถูกต้อง');
      }
    }, 1500);
  }
}