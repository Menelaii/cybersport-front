import {NgModule} from "@angular/core";
import {TeamsPageComponent} from "../teams/teams-page/teams-page.component";
import {TeamPageComponent} from "../teams/team-page/team-page.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JudgeRegistrationPageComponent } from './judge-registration-page/judge-registration-page.component';

@NgModule({
    declarations: [
    LoginPageComponent,
    JudgeRegistrationPageComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {path: '', component: LoginPageComponent},
        ]),
        ReactiveFormsModule,
    ]
})
export class AuthModule {
}
