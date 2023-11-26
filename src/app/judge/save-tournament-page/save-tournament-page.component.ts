import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TournamentService} from "../../shared/services/tournaments.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-tournament-page',
  templateUrl: './save-tournament-page.component.html',
  styleUrls: ['./save-tournament-page.component.scss']
})
export class SaveTournamentPageComponent implements OnInit {
  tournamentForm!: FormGroup;

  constructor(private fb: FormBuilder, private tournamentService: TournamentService,
              private router: Router) { }

  ngOnInit() {
    this.tournamentForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      discipline: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      registrationDate: ['', Validators.required],
      closingDate: ['', Validators.required],
      reportDate: ['', Validators.required],
      organizer: ['', Validators.required],
      stages: this.fb.array([]),
      judgeIds: this.fb.array([]),
      secretaryIds: this.fb.array([]),
      chiefJudgeId: [''],
      chiefSecretaryId: [''],
      results: this.fb.array([])
    });
  }

  get stages() {
    return this.tournamentForm.get('stages') as FormArray;
  }

  get results(): FormArray {
    return this.tournamentForm.get('results') as FormArray;
  }

  getMatches(stageIndex: number): FormArray {
    return (this.stages.at(stageIndex).get('matches') as FormArray);
  }

  addStage() {
    const stageGroup = this.fb.group({
      name: ['', Validators.required],
      matches: this.fb.array([])
    });

    this.stages.push(stageGroup);
  }

  addMatch(stageIndex: number) {
    const matchGroup = this.fb.group({
      team1Id: ['', Validators.required],
      team2Id: ['', Validators.required],
      winnerTeamId: ['', Validators.required]
    });

    (this.stages.at(stageIndex).get('matches') as FormArray).push(matchGroup);
  }

  addResult() {
    const resultGroup = this.fb.group({
      teamId: ['', Validators.required],
      allStagesScore: ['', Validators.required],
      takenPlace: ['', Validators.required]
    });

    (this.tournamentForm.get('results') as FormArray).push(resultGroup);
  }

  onSubmit() {
    if (this.tournamentForm.valid) {
      this.tournamentService.saveCompletedTournament(this.tournamentForm.value).subscribe(
          response => {
            console.log('успешно');
            this.router.navigate(['judge', 'dashboard'])
          },
          error => console.error('Ошибка при создании турнира', error)
      );
    }
  }
}
