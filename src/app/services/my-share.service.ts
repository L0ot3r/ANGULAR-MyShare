import { HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})

export class MyShareService {
  constructor(private http: HttpClientModule) { }


  isHidden: boolean = false
  toggleHidden() {
    this.isHidden = !this.isHidden
    return this.isHidden
  }

  // addNewPost(newPost: {title: string, description: string, imageUrl: string, location?: string}) {
  //   const newAddingPost: PostShare = {
  //     ...newPost,
  //     createdDate: new Date(),
  //     snaps: 0,
  //     id: this.posts[this.posts.length - 1].id + 1
  //   }
  //   this.posts.push(newAddingPost)
  // }
}