import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CommunitiesComponent } from './Components/communities/communities.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RidesComponent } from './Components/rides/rides.component';
import { EventComponent } from './Components/Event/event.component';
import { RideDefComponent } from './Components/Cards/ride-def/ride-def.component';
import { PostDefComponent } from './Components/Cards/post-def/post-def.component';
import { CommunityDefComponent } from './Components/Cards/community-def/community-def.component';
import { CreateRideComponent } from './Components/create-ride/create-ride.component';
import { LogInComponent } from './Components/Auth/log-in/log-in.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { EventDefComponent } from './Components/Cards/event-def/event-def.component';
import { CreateComponent } from './Components/create/create.component';

const routes: Routes = [
  {path: 'auth', 
    children: [
      {path:'login', component:LogInComponent},
      {path:'signup', component:SignInComponent},
    ]
  },
  {path:'home', component:HomeComponent},
  {path:'create', component:CreateComponent},
  {path: 'communities', component:CommunitiesComponent},
  {path:'profile', component:ProfileComponent},
  {path: 'posts', 
    children:[
      {path: 'postdef', component:PostDefComponent},
    ]
  },
  {path:'rides', component:RidesComponent,
    children:[
      {path: 'ridedef', component:RideDefComponent},
      {path: 'create', component:CreateRideComponent},
    ]
  },
  {path:'events', component:EventComponent,
    children:[
      {path:'eventdef', component:EventDefComponent},
    ]
  },
  {path: 'community', 
    children:[
      {path:'communitydef', component:CommunityDefComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
