import {Component, OnDestroy, OnInit} from '@angular/core';
import {TournamentShortDTO} from "../../shared/interfaces/tournaments/tournament-short.dto";
import {TournamentService} from "../../shared/services/tournaments.service";
import {XPage} from "../../shared/interfaces/pagination/x-page";
import {PageDTO} from "../../shared/interfaces/pagination/page.dto";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tournaments-page',
  templateUrl: './tournaments-page.component.html',
  styleUrls: ['./tournaments-page.component.scss']
})
export class TournamentsPageComponent implements OnInit, OnDestroy {
  tournaments: TournamentShortDTO[] = [];
  totalElements = 0;
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = true;

  private routeSubscription: Subscription;

  constructor(private tournamentService: TournamentService, private route: ActivatedRoute) {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] || this.currentPage;
      this.loadTournaments({page: this.currentPage, itemsPerPage: this.itemsPerPage});
    });
  }

  ngOnInit() {
    this.loadTournaments({ page: this.currentPage, itemsPerPage: this.itemsPerPage });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  loadTournaments(xpage: XPage) {
    this.isLoading = true;
    this.tournamentService.getTournaments(xpage).subscribe((page: PageDTO<TournamentShortDTO>) => {
      this.tournaments = page.models;
      this.totalElements = page.totalElements;
      this.isLoading = false;
    });
  }
}
