import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  editor!: Editor;
  post:Post = {
    communityId:'1234',
    title:'',
    description:''
  };
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],    
    ['text_color', 'background_color']
  ];
  selectedFile!: File;
  postImg: string | ArrayBuffer | null = null;
  html='';

  constructor(private postService:PostService){}
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

  createPost(){
    console.log(this.post);
    if(this.selectedFile && this.post.title && this.post.communityId){
      this.postService.createPost(this.post, this.selectedFile);
    }
  }
}
