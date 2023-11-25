import { Component } from '@angular/core';
import {TournamentDTO} from "../../shared/interfaces/tournaments/tournament.dto";
import {TournamentService} from "../../shared/services/tournaments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss']
})
export class TournamentPageComponent {
  tournament: TournamentDTO | null = null;

  constructor(
      private tournamentService: TournamentService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const tournamentId = parseInt(this.route.snapshot.paramMap.get('tournamentId') || '0');
    this.tournamentService.getTournament(tournamentId).subscribe(data => {
      this.tournament = data;
    });
  }
}
