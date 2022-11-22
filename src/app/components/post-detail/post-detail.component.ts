import { Component, OnInit } from '@angular/core';
import { PostShare } from '../../models/post-share.model';
import { MyShareService } from '../../services/my-share.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  postShare!: PostShare
  buttonText: string = 'Add Like';
  snapped: boolean = false

  constructor(
    private myShareService: MyShareService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Add Like';
    const postId = +this.route.snapshot.params['id']
    this.postShare = this.myShareService.getPostById(postId)
  }

  onLike() {
    if(this.buttonText === 'Add Like') {
      this.myShareService.likePostById(this.postShare.id, 'like')
      this.snapped = true
      this.buttonText = 'Oops, dislike'
    } else {
      this.myShareService.likePostById(this.postShare.id, 'dislike')
      this.snapped = false
      this.buttonText = 'Add Like'
    }
  }
}
