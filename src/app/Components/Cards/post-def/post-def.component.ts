import { Component } from '@angular/core';

@Component({
  selector: 'app-post-def',
  templateUrl: './post-def.component.html',
  styleUrls: ['./post-def.component.css']
})
export class PostDefComponent {
  commentBox: boolean = false;
  replyBox: boolean = false;
}
