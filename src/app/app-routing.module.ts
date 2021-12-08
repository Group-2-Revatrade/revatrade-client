import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-up', 
    component: SignUpComponent
  },
  {
    // routing for profile component-logged in user's info will load view with corresponding user id path - *need child route*
    path: 'users',
    component: UserProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
