import { Component } from '@angular/core';
import {InviteService} from "../../shared/services/invites.service";

@Component({
  selector: 'app-invite-judges-page',
  templateUrl: './invite-judges-page.component.html',
  styleUrls: ['./invite-judges-page.component.scss']
})
export class InviteJudgesPageComponent {
  amount: number = 1;
  links: string[] = [];

  constructor(private inviteService: InviteService) {}

  onSubmit() {
    if (this.amount <= 0) {
      alert('Количество должно быть больше нуля.');
      return;
    }

    this.inviteService.generateInvites(this.amount, 'ROLE_JUDGE').subscribe(
        response => {
          this.links = response.urls;
        },
        error => {
          console.error('Произошла ошибка при генерации пригласительных ссылок', error);
          alert('Не удалось сгенерировать пригласительные ссылки. Проверьте консоль для подробностей.');
        }
    );
  }
}
