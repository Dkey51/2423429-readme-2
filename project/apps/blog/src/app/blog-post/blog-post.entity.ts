import { Post, PostStatus, PostType } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class BlogPostEntity implements Post, Entity<string, Post> {
  public id?: string;
  public type!: PostType;
  public authorId!: string;
  public status!: PostStatus;
  public tags?: string[];
  public title?: string;
  public videoUrl?: string;
  public announceText?: string;
  public text?: string;
  public quoteText?: string;
  public quoteAuthor?: string;
  public photo?: string;
  public linkUrl?: string;
  public description?: string;
  public createdAt?: Date;
  public publishedAt?: Date;
  public isRepost?: boolean;
  public originalPostId?: string;
  public originalAuthorId?: string;

  constructor(post: Post) {
    this.populate(post);
  }

  public toPOJO() {
    return { ...this };
  }

  public populate(data: Post): void {
    Object.assign(this, data);
  }

  static fromObject(data: Post): BlogPostEntity {
    return new BlogPostEntity(data);
  }
}
