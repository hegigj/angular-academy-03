import { Injectable } from '@angular/core';

export interface PostModel {
  id: number;
  title: string;
}

@Injectable()
export class PostService {
  private posts: PostModel[];

  constructor() {
    this.posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
    ];
  }

  getPosts(title?: string): PostModel[] {
    if (title) {
      return this.posts.filter(
        post => post.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      );
    }

    return this.posts.slice();
  }

  getPost(id: number): PostModel {
    const post: PostModel | undefined = this.posts.find(post => post.id === id);

    if (!post) throw new Error('Post not found');

    return post;
  }
}
