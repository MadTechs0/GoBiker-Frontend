import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PostCardComponent } from './Components/Cards/post-card/post-card.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PostDefComponent } from './Components/Cards/post-def/post-def.component';
import { EventComponent } from './Components/Event/event.component';
import { EventCardComponent } from './Components/Cards/event-card/event-card.component';
import { EventDefComponent } from './Components/Cards/event-def/event-def.component';
import { RidesComponent } from './Components/rides/rides.component';
import { RideCardComponent } from './Components/Cards/ride-card/ride-card.component';
import { RideDefComponent } from './Components/Cards/ride-def/ride-def.component';
import { CommunitiesComponent } from './Components/communities/communities.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { LogInComponent } from './Components/Auth/log-in/log-in.component';
import { CommunityDefComponent } from './Components/Cards/community-def/community-def.component';
import { LoadComponent } from './Components/load/load.component';
import { CreateRideComponent } from './Components/create-ride/create-ride.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './Components/map/map.component';
import { CreateComponent } from './Components/create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { AuthInterceptor } from './Shared/Interceptor/auth-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostCardComponent,
    FooterComponent,
    PostDefComponent,
    EventComponent,
    EventCardComponent,
    EventDefComponent,
    RidesComponent,
    RideCardComponent,
    RideDefComponent,
    CommunitiesComponent,
    ProfileComponent,
    SignInComponent,
    LogInComponent,
    CommunityDefComponent,
    LoadComponent,
    CreateRideComponent,
    MapComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
