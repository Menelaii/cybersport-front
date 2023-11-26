import {Component, OnInit} from '@angular/core';
import {AuthRequestDTO} from "../../shared/interfaces/auth/auth-request.dto";
import {Observer} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AuthStorageService} from "../../shared/services/auth-storage.service";
import {Router} from "@angular/router";
import {AuthResponseDTO} from "../../shared/interfaces/auth/auth-response.dto";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  error = false;

  constructor(private service: AuthService,
              private tokenStorage: AuthStorageService,
              private router: Router)
  {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  ngOnInit(): void {
    if (this.service.isAuthenticated()) {
      const role = this.tokenStorage.getRole();
      //todo check role
      //judge dashboard
      //player dashboard
      switch (role) {
        case 'ROLE_ADMIN':
          this.router.navigate(['/admin', 'dashboard']);
          break;
        default:
          throw new Error('Неизвестная роль');
      }
    }
  }

  onSubmit() {
    if (this.isSubmitted || this.form.invalid) {
      return;
    }

    this.isSubmitted = true;

    const formData: AuthRequestDTO = {...this.form.value}

    const observer: Observer<AuthResponseDTO | null> = {
      complete: () =>  {
      },

      error: (err: any) => {
        this.error = true;
        this.isSubmitted = false;
      },

      next: (value: AuthResponseDTO | null) => {
        if (value) {
          this.tokenStorage.setAuth(value);
          //todo check role
          //judge dashboard
          //player dashboard
          console.log(value.role)
          switch (value.role) {
            case 'ROLE_ADMIN':
              this.router.navigate(['/admin']);
              break;
            default:
              throw new Error('Неизвестная роль');
          }

          this.isSubmitted = false;
          this.error = false;
        }
      }
    }

    this.service.signIn(formData).subscribe(observer);
  }
}
