import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
