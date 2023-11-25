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
  ]
})
export class SharedModule {

}
