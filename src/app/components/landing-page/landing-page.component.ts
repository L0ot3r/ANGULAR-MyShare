import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  userEmail!: string;
  userName!: string;

  ngOnInit() {
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }

  onContinue() {
    this.router.navigateByUrl('/posts')
  }

}
