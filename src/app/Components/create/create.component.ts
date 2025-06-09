import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { Community } from 'src/app/Models/community.model';
import { createPost } from 'src/app/Models/create-post.model';
import { CommunityService } from 'src/app/Services/community.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  editor!: Editor;
  communityName:string = '';
  communities!: Community[];
  post:createPost = {
    communityId:'',
    title:'',
    description:'',
    hasImage: false
  };
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],    
    ['text_color', 'background_color']
  ];
  selectedFile!: File;
  postImg: string | ArrayBuffer | null = null;

  constructor(private postService:PostService, private communityService:CommunityService){}
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onFileSelected(event:any):void{
    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      const reader = new FileReader();

      reader.onload = () =>{
        this.postImg = reader.result;
      };
    reader.readAsDataURL(this.selectedFile);
    }
  }
  searchCommunity(name:string){
    this.communityService.searchCommunityByName(name).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name:any)=>
        this.communityService.searchCommunityByName(name).pipe(
          catchError(() => of (null))
        )
      )
    ).subscribe((response:any) => {
      this.communities = response.communities;
      console.log(response);      
    });
  }
  createPost(){
    console.log(this.post);
    if(this.post.title && this.post.communityId){
      if(this.selectedFile){
        this.post.hasImage = true;
        this.postService.createPost(this.post, this.selectedFile);
      }else{
        this.postService.createPost(this.post);
      }
    }
  }
}
