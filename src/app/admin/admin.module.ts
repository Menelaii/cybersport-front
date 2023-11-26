import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {adminAuthGuardFn} from "../shared/services/guards/admin-auth.guard";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InviteJudgesPageComponent } from './invite-judges-page/invite-judges-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
                    {path: 'dashboard', component: AdminDashboardComponent, canActivate: [adminAuthGuardFn]},
                    {path: 'judges/invite', component: InviteJudgesPageComponent, canActivate: [adminAuthGuardFn]},
                ]
            }
        ]),
        FormsModule,
    ],
    exports: [],
    declarations: [
    AdminLayoutComponent,
    AdminDashboardComponent,
    InviteJudgesPageComponent
  ]

})
export class AdminModule {
}
