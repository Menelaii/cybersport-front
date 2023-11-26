import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { RaitingPageComponent } from './raiting-page/raiting-page.component';

@NgModule({
    declarations: [

    TeamsPageComponent,
         TeamPageComponent,
         RaitingPageComponent
  ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {path: '', component: TeamsPageComponent},
            {path: ':teamId', component: TeamPageComponent}
        ]),
    ]
})
export class TeamsModule {
}
