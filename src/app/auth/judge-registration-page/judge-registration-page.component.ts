import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InviteService} from "../../shared/services/invites.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateJudgeRequestDTO} from "../../shared/interfaces/judges/create-judge-request.dto";

@Component({
  selector: 'app-judge-registration-page',
  templateUrl: './judge-registration-page.component.html',
  styleUrls: ['./judge-registration-page.component.scss']
})
export class JudgeRegistrationPageComponent {
  registrationForm: FormGroup;
  token!: string;
  isValidLink!: boolean;

  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private invitationService: InviteService,
      private router: Router
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      contacts: this.fb.array([]),
      birthDate: ['', Validators.required],
      subjectOfRF: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      residence: [''],
      certificationLevel: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';

    this.invitationService.validateLink(this.token).subscribe(
        isValid => {
          this.isValidLink = isValid;
        },
        error => {
          console.error('Ошибка при валидации ссылки', error);
          this.isValidLink = false;
        }
    );
  }

  onRegister(): void {
    if (this.isValidLink && this.registrationForm.valid) {
      const createJudgeDTO: CreateJudgeRequestDTO = {
        ...this.registrationForm.value,
        token: this.token
      };

      this.invitationService.registerJudge(this.token, createJudgeDTO).subscribe(
          () => {
            console.log('Регистрация успешна');
            this.router.navigate(['/auth']);
          },
          error => {
            console.error('Ошибка при регистрации', error);
            // Обработка ошибок регистрации
          }
      );
    }
  }
}
