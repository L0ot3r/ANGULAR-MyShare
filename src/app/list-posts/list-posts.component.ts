import { Component, OnInit } from '@angular/core';
import { PostShare } from '../models/post-share.model';
import { MyShareService } from '../services/my-share.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  constructor(private myShareService: MyShareService) {}
  posts!: PostShare[]

  ngOnInit(): void {
    this.posts = this.myShareService.posts
  }
}
