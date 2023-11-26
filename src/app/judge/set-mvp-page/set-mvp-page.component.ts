import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateMvpDTO} from "../../shared/interfaces/players/create-mvp.dto";
import {MvpService} from "../../shared/services/mvp.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-set-mvp-page',
  templateUrl: './set-mvp-page.component.html',
  styleUrls: ['./set-mvp-page.component.scss']
})
export class SetMvpPageComponent implements OnInit {
  mvpForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: MvpService, private router: Router) { }

  ngOnInit() {
    this.mvpForm = this.fb.group({
      tournamentId: ['', Validators.required],
      playerId: ['', Validators.required],
      cause: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.mvpForm.valid) {
      this.service.setMvp(this.mvpForm.value).subscribe(
          response => {
            console.log('успешно');
            this.router.navigate(['judge', 'dashboard'])
          },
          error => console.error('Ошибка при создании турнира', error)
      );
    }
  }
}
