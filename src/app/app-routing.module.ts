import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CommunitiesComponent } from './Components/communities/communities.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RidesComponent } from './Components/rides/rides.component';
import { EventComponent } from './Components/event/event.component';
import { RideDefComponent } from './Components/Cards/ride-def/ride-def.component';
import { PostDefComponent } from './Components/Cards/post-def/post-def.component';
import { CommunityDefComponent } from './Components/Cards/community-def/community-def.component';
import { CreateRideComponent } from './Components/create-ride/create-ride.component';
import { LogInComponent } from './Components/Auth/log-in/log-in.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { EventDefComponent } from './Components/Cards/event-def/event-def.component';
import { CreateComponent } from './Components/create/create.component';
import { CreateCommunityComponent } from './Components/create-community/create-community.component';
import { InboxComponent } from './Components/inbox/inbox.component';
import { ChatComponent } from './Components/chat/chat.component';
import { TestComponent } from './Components/test/test.component';
import { AboutComponent } from './Components/about/about.component';
import { SupportComponent } from './Components/support/support.component';
import { CollabComponent } from './Components/collab/collab.component';
import { SettingsComponent } from './Components/settings/settings.component';

const routes: Routes = [
  {path: 'auth', 
    children: [
      {path:'login', component:LogInComponent},
      {path:'signup', component:SignInComponent},
    ]
  },
  {path:'home', component:HomeComponent},
  {path:'create', component:CreateComponent},
  {path: 'communities', component:CommunitiesComponent, 
    children:[
      {path:'create', component:CreateCommunityComponent},
      {path:':id', component:CommunityDefComponent}
    ]
  },
  {path:'profile', component:ProfileComponent},
  {path: 'posts', 
    children:[
      {path: ':id', component:PostDefComponent},
    ]
  },
  {path:'rides', component:RidesComponent,
    children:[
      {path: 'ridedef', component:RideDefComponent},
      {path: 'create', component:CreateRideComponent},
    ]
  },
  {path:'inbox', component: InboxComponent},
  {path: 'chat', component: ChatComponent},
  {path:'events', component:EventComponent,
    children:[
      {path:'eventdef', component:EventDefComponent},
    ]
  },
  {path:'about', component: AboutComponent},
  {path:'support', component: SupportComponent},
  {path:'collab', component: CollabComponent},
  {path:'settings', component: SettingsComponent},
  {path:'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
