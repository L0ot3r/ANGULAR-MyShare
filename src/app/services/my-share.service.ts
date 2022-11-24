import { Injectable } from '@angular/core'
import { PostShare } from '../models/post-share.model'

const { v4: uuidv4 } = require('uuid')

@Injectable({
  providedIn: 'root'
})

export class MyShareService {
  posts: PostShare[] = [
    {
      id: 1,
      title: 'Kitty',
      description: 'Le chaton tout mimi',
      imageUrl: 'https://images.unsplash.com/photo-1596789866050-b7d8cf68c636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 1,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Scotty',
      description: 'Encore une mignorie',
      imageUrl: 'https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 3
    },
    {
      id: 3,
      title: 'Harry',
      description: 'Il est pas pas trop beau ?!',
      imageUrl: 'https://images.unsplash.com/photo-1621238282106-827d0261f0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 5,
      location: 'Marseille'
    },
    {
      id: 4,
      title: 'Billy',
      description: 'Il est pas pas trop beau ?!',
      imageUrl: 'https://images.unsplash.com/photo-1602519362498-a57e90340bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 2
    },
    {
      id: 5,
      title: 'Sammy',
      description: 'Une petite virée en mer',
      imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 2
    },
    {
      id: 6,
      title: 'Kitty',
      description: 'Le chaton tout mimi',
      imageUrl: 'https://images.unsplash.com/photo-1596789866050-b7d8cf68c636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 1,
      location: 'Paris'
    },
    {
      id: 7,
      title: 'Scotty',
      description: 'Encore une mignorie',
      imageUrl: 'https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 3
    },
    {
      id: 8,
      title: 'Harry',
      description: 'Il est pas pas trop beau ?!',
      imageUrl: 'https://images.unsplash.com/photo-1621238282106-827d0261f0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 5,
      location: 'Marseille'
    },
    {
      id: 9,
      title: 'Billy',
      description: 'Il est pas pas trop beau ?!',
      imageUrl: 'https://images.unsplash.com/photo-1602519362498-a57e90340bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 2
    },
    {
      id: 10,
      title: 'Sammy',
      description: 'Une petite virée en mer',
      imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      createdDate: new Date(),
      snaps: 2
    },
  ]

  // On récupère les posts
  getAllPosts(): PostShare[] {
    return this.posts
  }

  // On récupère un post en fonction de son id
  getPostById(postId: number): PostShare {
    const post = this.posts.find((itemPost) => itemPost.id === postId)
    if(!post) {
      throw new Error(`Le Post n'existe pas`)
    } else {
      return post
    }
  }

  // On like un post en fonction de son id
  likePostById(postId: number, likeType: 'like' | 'dislike'): void {
    const post = this.getPostById(postId);
    likeType === 'like' ? post.snaps++ : post.snaps--
  }

  isHidden: boolean = false
  toggleHidden() {
    this.isHidden = !this.isHidden
    return this.isHidden
  }
}