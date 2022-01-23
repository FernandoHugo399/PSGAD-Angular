import { HelpComponent } from './pages/help/help.component';
import { Page404Component } from './pages/page404/page404.component';
import { IsAuthenticatedGuard } from './services/auth/is-authenticated.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
