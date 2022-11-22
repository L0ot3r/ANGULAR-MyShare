import { Component, OnInit } from '@angular/core';
import { MyShareService } from '../../services/my-share.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private myShareService: MyShareService) { }

  ngOnInit() {}
  
  isHidden!: boolean;
  onToggleVisibility() {
    this.isHidden = this.myShareService.toggleHidden();
  }

}
