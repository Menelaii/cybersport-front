import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamsService} from "../../shared/services/teams.service";
import {TeamShortDto} from "../../shared/interfaces/teams/team-short-dto";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {XPage} from "../../shared/interfaces/pagination/x-page";

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit, OnDestroy {
  teams: TeamShortDto[] = [];
  totalElements = 0;
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = true;

  private routeSubscription: Subscription;

  constructor(private teamService: TeamsService, private route: ActivatedRoute) {

    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] || this.currentPage;
      this.loadTeams({page: this.currentPage, itemsPerPage: this.itemsPerPage});
    });
  }

  ngOnInit() {
    this.loadTeams({ page: this.currentPage, itemsPerPage: this.itemsPerPage });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  loadTeams(xpage: XPage) {
    this.isLoading = true;
    this.teamService.getTeams(xpage).subscribe(page => {
      this.teams = page.models;
      this.totalElements = page.totalElements;
      this.isLoading = true;
    });
  }
}
