import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService]
})
export class LoginComponent {
  loading = false;

  loginFormGroup = new FormGroup({
    txtLogin: new FormControl(),
    txtPassword: new FormControl()
  });

  constructor(private messageService: MessageService) {
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (this.loginFormGroup.controls["txtLogin"].value === 'admin' &&
          this.loginFormGroup.controls["txtPassword"].value === 'admin') {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Logged in'});
      } else {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid credentials'});
      }
    }, 3000);
  }
}
