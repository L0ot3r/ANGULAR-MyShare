import { Component, Input, OnInit } from '@angular/core';
import { PostShare } from '../../models/post-share.model';
import { Router } from '@angular/router';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-post-share',
  templateUrl: './post-share.component.html',
  styleUrls: ['./post-share.component.scss'],
})
export class PostShareComponent implements OnInit {
  constructor(
    private router: Router,
    private sanity: SanityService
    ) {}
  
  @Input() postShare!: PostShare;
  buttonText: string = 'Add Like';
  snapped: boolean = false;

  ngOnInit() {
    this.buttonText = 'Add Like';
  }

  onLike() {
    // if (this.buttonText === 'Add Like') {
    //   this.myShareService.likePostById(this.postShare.id, 'like');
    //   this.snapped = true;
    //   this.buttonText = 'Oops, dislike';
    // } else {
    //   this.myShareService.likePostById(this.postShare.id, 'dislike');
    //   this.snapped = false;
    //   this.buttonText = 'Add Like';
    // }
  }

  async onPostViewDetail() {
    await this.router.navigateByUrl(`posts/${this.postShare._id}`);    
  }
}
