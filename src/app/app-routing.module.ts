import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  LandingPageComponent, 
  ListPostsComponent, 
  LoginPageComponent, 
  NewPostComponent, 
  PostDetailComponent, 
} from './components';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'create', component: NewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
