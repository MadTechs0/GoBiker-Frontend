import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/profile.model';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  profile:Profile = {
    name:'',
    userName:'',
    phone:'',
    email:'',
    profileUrl:''
  };

  constructor(private profileService:ProfileService, private router: Router){}

  ngOnInit(){
    this.profileService.getProfileDetails().subscribe((res:any)=>{
      console.log(res);
      this.profile = res.user; 
    });
  }
  logOut(){
    localStorage.removeItem('token');
  }
}
