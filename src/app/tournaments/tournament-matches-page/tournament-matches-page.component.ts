import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatchDTO} from "../../shared/interfaces/matches/match.dto";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatchesService} from "../../shared/services/matches.service";
import {XPage} from "../../shared/interfaces/pagination/x-page";

@Component({
  selector: 'app-tournament-matches-page',
  templateUrl: './tournament-matches-page.component.html',
  styleUrls: ['./tournament-matches-page.component.scss']
})
export class TournamentMatchesPageComponent implements OnInit, OnDestroy {
  matches: MatchDTO[] = [];
  totalElements = 0;
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = true;
  tournamentId: number = 0;

  private routeSubscription: Subscription | null = null;

  constructor(private matchService: MatchesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tournamentId = parseInt(this.route.snapshot.paramMap.get('tournamentId') || '0');

    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] || this.currentPage;
      this.loadMatches(this.tournamentId, {page: this.currentPage, itemsPerPage: this.itemsPerPage});
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe()
  }

  loadMatches(tournamentId: number, xpage: XPage) {
    this.isLoading = true;
    this.matchService.getCurrentStageMatches(tournamentId, xpage).subscribe((page) => {
      this.matches = page.models;
      this.totalElements = page.totalElements;
      this.isLoading = false;
    });
  }
}
