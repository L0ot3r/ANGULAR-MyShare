import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ListPostsComponent } from "./list-posts/list-posts.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'posts', component: ListPostsComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}