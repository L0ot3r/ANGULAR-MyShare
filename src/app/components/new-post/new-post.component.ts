import { Component, OnInit } from '@angular/core';
import { PostShare } from 'src/app/models/post-share.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyShareService } from 'src/app/services/my-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private myShareService: MyShareService,
    private router: Router
  ) {}

  // The form
  createPost!: FormGroup;
  acceptRules!: FormGroup
  // The preview is an observable
  postPreview$!: Observable<PostShare>;
  imgRegexUrl!: RegExp;

  ngOnInit(): void {
    this.imgRegexUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    // Create the form
    // The form is created with the formBuilder
    // The formBuilder is a service that allows to create forms
// ------------------------------------------------------------------------------ //
    this.createPost = this.formBuilder.group({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, [Validators.required, Validators.pattern(this.imgRegexUrl)]),
      location: new FormControl(null),
    }, { updateOn: 'blur' });
    this.acceptRules = this.formBuilder.group({
      validation: new FormControl(null, [Validators.requiredTrue]),
    });
// ------------------------------------------------------------------------------ //

    // Create the preview
    // The preview is created with the form value
    // The form value is an observable
    this.postPreview$ = this.createPost.valueChanges.pipe(
      map((post: PostShare) => ({
        ...post,
        snaps: 0,
        _createdAt: new Date(),
        _id: '',
      }))
    );
  }
  
  onSubmitForm() {
    const newPost = this.createPost.value;
    // this.myShareService.addNewPost(newPost);
    this.router.navigateByUrl('posts');
  }

}
