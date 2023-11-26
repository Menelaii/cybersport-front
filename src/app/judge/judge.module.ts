import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "../admin/admin-layout/admin-layout.component";
import {AdminDashboardComponent} from "../admin/admin-dashboard/admin-dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {judgeAuthGuardFn} from "../shared/services/guards/judge-auth.guard";
import { JudgeDashboardComponent } from './judge-dashboard/judge-dashboard.component';
import { SaveTournamentPageComponent } from './save-tournament-page/save-tournament-page.component';
import { SetMvpPageComponent } from './set-mvp-page/set-mvp-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/judge/dashboard', pathMatch: 'full'},
                    {path: 'dashboard', component: JudgeDashboardComponent, canActivate: [judgeAuthGuardFn]},
                    {path: 'save-tournament', component: SaveTournamentPageComponent, canActivate: [judgeAuthGuardFn]},
                    {path: 'set-mvp', component: SetMvpPageComponent, canActivate: [judgeAuthGuardFn]},
                ]
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [


    JudgeDashboardComponent,
           SaveTournamentPageComponent,
           SetMvpPageComponent
  ]
})
export class JudgeModule {
}
