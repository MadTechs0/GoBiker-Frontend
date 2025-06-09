import { I18NHtmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{
  @Input()postClose: boolean = false;
  @Input()communityId: string = '';
  posts!: Post[];
  constructor(private postService:PostService){
  }
  ngOnInit(): void {
    console.log(this.communityId);    
    this.postService.communityPosts(this.communityId).subscribe((res:any)=>{
      this.posts = res.posts
      console.log('posts',this.posts);
    });
  }
}
