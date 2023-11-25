import {Component, OnInit} from '@angular/core';
import {TeamDTO} from "../../shared/interfaces/teams/team.dto";
import {ActivatedRoute} from "@angular/router";
import {TeamsService} from "../../shared/services/teams.service";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  team: TeamDTO | null = null;

  constructor(
      private teamService: TeamsService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const teamId = parseInt(this.route.snapshot.paramMap.get('teamId') || '0');
    this.teamService.getTeamById(teamId).subscribe(data => {
      this.team = data;
    });
  }
}
