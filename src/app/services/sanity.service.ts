import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Observable } from 'rxjs';
import { PostShare } from '../models/post-share.model';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "l2kwvrs9",
      dataset: "production"
    })
  }

  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source);


  async getAllPosts() {
    const query = `*[_type == "post"]`;
    return await this.sanityClientCredentials.option.fetch(query);
  }
  
  async getPostById(id: any): Promise<Observable<PostShare>> {
    const query = `*[_type == "post" && _id == "${id}"]{
      title,
      imageUrl,
      description,
      location,
      snaps,
      _id,
      _createdAt,
    }`;
    return await this.sanityClientCredentials.option.fetch(query);
  }

  // async likePostById(id: any, likeType: 'like' | 'dislike') {
  //   const post = await this.getPostById(id);
  //   likeType === 'like' ? post.snaps++ : post.snaps--
  // }

}