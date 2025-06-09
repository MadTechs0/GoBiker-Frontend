import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AwsService } from './aws.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private awsService:AwsService) { }

  createPost(post:any, file?:File){
    return this.http.post(`${this.baseUrl}/createPost`, post).subscribe((res:any)=>{
      console.log(res);
      if(file){
        this.awsService.uploadImage(res,file);
      }
    },(error)=>{
      console.log(error);      
    });
  }
  communityPosts(communityId:any){
    return this.http.get(`${this.baseUrl}/communityPosts?communityId=${communityId}`);
  }
  postDetails(postId:any){
    return this.http.get(`${this.baseUrl}/posts?id=${postId}`);
  }
  addComment(comment:string){
    return this.http.post(`${this.baseUrl}/comment`, comment);
  }
}
