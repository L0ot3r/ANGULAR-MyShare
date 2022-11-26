import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/services/sanity.service';
import { PostShare } from '../../models/post-share.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  constructor(
    private sanity: SanityService
  ) {}
  posts!: PostShare[];

  ngOnInit(): void {
    this.sanity.getAllPosts().then((data) => this.posts = data);
  }
}
