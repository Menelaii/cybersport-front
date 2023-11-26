import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./shared/components/main-layout-component/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {
        path: 'tournaments',
        loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'registration',
        component: RegistrationPageComponent
      }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'judge', loadChildren: () => import('./judge/judge.module').then(m => m.JudgeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  declarations: []
})
export class AppRoutingModule { }
