import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Login } from 'src/app/user/interfaces/login.interface';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  hidePassword: boolean = true;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.isLoading = true;
    const request: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    }

    this.userService.login(request).subscribe({
      next: (response) => {
        this.sharedService.guardarSesion(response);
        this.router.navigate(['layout']);
      },
      complete: () => {
        this.isLoading = false;
      },
      error: (error) => {
        this.sharedService.mostrarAlerta(error.error, 'Error!');
        this.isLoading = false;
      }
    })
  }
}
