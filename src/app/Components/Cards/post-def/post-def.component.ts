import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment, Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post-def',
  templateUrl: './post-def.component.html',
  styleUrls: ['./post-def.component.css']
})
export class PostDefComponent implements OnInit{
  commentBox: boolean = false;
  replyBox: boolean = false;
  post!: Post;
  newComment!: Comment;
  constructor(private route: ActivatedRoute, private postService: PostService){}
  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.postService.postDetails(postId).subscribe((res:any)=>{
      this.post = res.post;
      //this.post.comments = res.comments;
      console.log(res.post + 'result');    
      console.log("banner");
    });
  }
  addComment(){
    if(this.newComment.comment != ''){
      console.log(this.newComment);      
      this.postService.addComment(this.newComment.comment).subscribe(res =>{
        console.log(res);        
      });
    }
  }
}
