import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/Models/profile.model';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:Profile = {
    name:'',
    userName:'',
    phone:'',
    email:'',
  };

  constructor(private profileService:ProfileService){}

  ngOnInit(){
    this.profileService.getProfileDetails().subscribe((res:any)=>{
      this.profile = res; 
    });
  }

  logOut(){
    localStorage.removeItem('token');
  }
}
