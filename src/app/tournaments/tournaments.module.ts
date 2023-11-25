import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {TournamentsPageComponent} from "./tournaments-page/tournaments-page.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TournamentPageComponent } from './tournament-page/tournament-page.component';
import { TournamentMatchesPageComponent } from './tournament-matches-page/tournament-matches-page.component';

@NgModule({
  declarations: [
    TournamentsPageComponent,
    TournamentPageComponent,
    TournamentMatchesPageComponent
  ],
  imports:[
      CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: TournamentsPageComponent},
      {path: ':tournamentId', component: TournamentPageComponent},
      {path: ':tournamentId/matches', component: TournamentMatchesPageComponent}
    ]),
  ]
})
export class TournamentsModule {
}
