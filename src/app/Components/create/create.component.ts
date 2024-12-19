import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  editor!: Editor;
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],    
    ['text_color', 'background_color']
  ];
  selectedFile: File|null = null;
  postImg: string | ArrayBuffer | null = null;
  html='';


  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onFileSelected(event:any):void{
    const file: File = event.target.files[0];
    if(file){
      const reader = new FileReader();

      reader.onload = () =>{
        this.postImg = reader.result;
      };
    reader.readAsDataURL(file);
    }
  }
}
