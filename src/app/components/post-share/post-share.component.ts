import { Component, Input, OnInit } from '@angular/core';
import { PostShare } from '../../models/post-share.model';
import { MyShareService } from '../../services/my-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-share',
  templateUrl: './post-share.component.html',
  styleUrls: ['./post-share.component.scss'],
})
export class PostShareComponent implements OnInit {
  constructor(private myShareService: MyShareService, private router: Router) {}
  
  @Input() postShare!: PostShare;
  buttonText: string = 'Add Like';
  snapped: boolean = false;

  ngOnInit() {
    this.buttonText = 'Add Like';
  }

  onLike() {
    if (this.buttonText === 'Add Like') {
      this.myShareService.likePostById(this.postShare.id, 'like');
      this.snapped = true;
      this.buttonText = 'Oops, dislike';
    } else {
      this.myShareService.likePostById(this.postShare.id, 'dislike');
      this.snapped = false;
      this.buttonText = 'Add Like';
    }
  }

  onPostViewDetail() {
    this.router.navigateByUrl(`posts/${this.postShare.id}`);
  }
}
