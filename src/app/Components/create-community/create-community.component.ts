import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0, position: 'absolute', width: '100%' }),
            animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
          ]),
          query(':leave', [
            style({ position: 'absolute', width: '100%' }),
            animate('300ms ease-out', style({ transform: 'translateX(-50%)', opacity: 0 })),
          ]),
        ]),
      ]),
      transition(':decrement', [
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0, position: 'absolute', width: '100%' }),
            animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
          ]),
          query(':leave', [
            style({ position: 'absolute', width: '100%' }),
            animate('300ms ease-out', style({ transform: 'translateX(50%)', opacity: 0 })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class CreateCommunityComponent {
  index:number = 0;
  communityForm!: FormGroup;
  selectedBanner!: File;
  selectedAvatar!: File;
  banner: string | ArrayBuffer | null = null;
  avatar: string | ArrayBuffer | null = null;

  constructor(private fb:FormBuilder, private communityService: CommunityService){
    this.communityForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)], [communityService.communityNameAsyncValidator()]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      restricted:[false, Validators.required],
    });
  }
  nextStep(){
    this.index += 1;
  }
  previousStep(){
    this.index -= 1;
  }
  onAvatarSelected(event:any):void{
    this.selectedAvatar = event.target.files[0];
    if(this.selectedAvatar){
      const reader = new FileReader();

      reader.onload = () =>{
        this.avatar = reader.result;
      };
    reader.readAsDataURL(this.selectedAvatar);
    }
  }
  onBannerSelected(event:any):void{
    this.selectedBanner = event.target.files[0];
    if(this.selectedBanner){
      const reader = new FileReader();

      reader.onload = () =>{
        this.banner = reader.result;
      };
    reader.readAsDataURL(this.selectedBanner);
    }
  }
  createCommunity(){
    if(this.communityForm.valid){
      console.log(this.communityForm.value);      
      this.communityService.createCommunity(this.communityForm.value, this.selectedBanner, this.selectedAvatar);
    }else{
      console.error('fill prper details');      
    }
  }
}
