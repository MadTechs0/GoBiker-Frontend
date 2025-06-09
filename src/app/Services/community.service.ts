import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';
import { AwsService } from './aws.service';
import { AsyncValidatorFn } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private baseUrl = environment.baseUrl;
  constructor(private http:HttpClient, private awsService:AwsService) { }

  createCommunity(community:any, banner:File, avatar:File){
    return this.http.post(`${this.baseUrl}/createCommunity`, community).subscribe((res:any)=>{
      console.log(res);      
      this.awsService.uploadImage(res.bannerUrl, banner);
      this.awsService.uploadImage(res.avatarUrl, avatar);
    }, (error)=>{
      console.log(error);      
    });
  }
    communityNameAsyncValidator(): AsyncValidatorFn{
      return (control) => {
        if (!control.value) {
          return of(null);
        }      
      return this.http.get(`${this.baseUrl}/checkCommunityName?communityName=${control.value}`).pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((response: any) => {
          console.log('API Response: ', response);
          return response.isAvailable ? null : { nameTaken: true };
        }),     
        catchError(() => of (null))
      );
    };
  }
  searchCommunityByName(name:string){
    return this.http.get(`${this.baseUrl}/searchCommunity?name=${name}`);
  }

  myCommunities(){
    return this.http.get(`${this.baseUrl}/myCommunites`);
  }
  recommendations(){
    return this.http.get(`${this.baseUrl}/recommendations`);
  }
  community(communityId:any){
    return this.http.get(`${this.baseUrl}/community?id=${communityId}`);
  }
}
