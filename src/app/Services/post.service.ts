import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  createPost(post:any, file:File){
    return this.http.post(`${this.baseUrl}/createPost`, post).subscribe((res:any)=>{
      console.log(res);
      this.uploadImage(res,file);
    },(error)=>{
      console.log(error);      
    });
  }
  private uploadImage(preSignedUrl:string, file:File){
    this.http.put(preSignedUrl, file, {
      headers: {'Content-Type':encodeURI
        (file.type)},
    }).subscribe({
      next: () => console.log('Image upload success'),
      error: (error) => console.log('Error uploading', error),
    });
  }
}
