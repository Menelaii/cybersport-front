import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import { MainLayoutComponent } from './components/main-layout-component/main-layout.component';
import {RouterModule} from "@angular/router";
import { PaginationComponent } from './components/pagination/pagination.component';
import {RuDatePipe} from "./pipes/ru-date.pipe";
import {TournamentService} from "./services/tournaments.service";
import {HttpClientModule} from "@angular/common/http";
import {TeamsService} from "./services/teams.service";
import {MatchesService} from "./services/matches.service";
import {AuthStorageService} from "./services/auth-storage.service";
import {AuthService} from "./services/auth.service";
import {InviteJudgesPageComponent} from "../admin/invite-judges-page/invite-judges-page.component";
import {InviteService} from "./services/invites.service";
import {MvpService} from "./services/mvp.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    MainLayoutComponent,
    PaginationComponent,
    RuDatePipe
  ],
  exports: [
    RuDatePipe,
    PaginationComponent,
  ],
  providers: [
      TournamentService,
      TeamsService,
      MatchesService,
      AuthStorageService,
      AuthService,
      InviteService,
      MvpService
  ]
})
export class SharedModule {

}
