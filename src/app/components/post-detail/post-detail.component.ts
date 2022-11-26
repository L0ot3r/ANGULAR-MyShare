import { Component, OnInit } from '@angular/core';
import { PostShare } from '../../models/post-share.model';
import { ActivatedRoute } from '@angular/router'
import { SanityService } from 'src/app/services/sanity.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post!: PostShare
  buttonText: string = 'Add Like';
  snapped: boolean = false
  postShare$!: Promise<Observable<PostShare>>;

  constructor(
    private route: ActivatedRoute,
    private sanity: SanityService
  ) {}

  ngOnInit() {
    this.buttonText = 'Add Like';
    const postId = this.route.snapshot.params['id']
    this.postShare$ = this.sanity.getPostById(postId).then((data: any) => this.post = data[0])
  }

  onLike() {
    // if(this.buttonText === 'Add Like') {
    //   this.myShareService.likePostById(this.postShare.id, 'like')
    //   this.snapped = true
    //   this.buttonText = 'Oops, dislike'
    // } else {
    //   this.myShareService.likePostById(this.postShare.id, 'dislike')
    //   this.snapped = false
    //   this.buttonText = 'Add Like'
    // }
  }
}
