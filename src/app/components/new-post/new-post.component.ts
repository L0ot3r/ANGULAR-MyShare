import { Component, OnInit } from '@angular/core';
import { PostShare } from 'src/app/models/post-share.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  // The form
  createPost!: FormGroup;
  // The preview is an observable
  postPreview$!: Observable<PostShare>;

  ngOnInit(): void {
    // Create the form
    // The form is created with the formBuilder
    // The formBuilder is a service that allows to create forms
    this.createPost = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null],
    })
    // Create the preview
    // The preview is created with the form value
    // The form value is an observable
    this.postPreview$ = this.createPost.valueChanges.pipe(
      // The map operator allows to transform the value
      map((post: PostShare) => ({
        ...post,
        createdDate: new Date(),
        snaps: 0,
        id: Math.floor(Math.random() * 1000),
      }))
    );
  }
  
  onSubmitForm() {
    console.log(this.createPost.value);
  }

}
