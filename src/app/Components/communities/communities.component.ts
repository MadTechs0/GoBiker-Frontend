import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Community } from 'src/app/Models/community.model';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent {
    showCards: boolean = true;
    myCommunities!: Community[];
    recommendations!: Community[];
    constructor(private router: Router, private route: ActivatedRoute, private communityService:CommunityService){}
  
    ngOnInit() {
      this.router.events.subscribe(() => {
        this.showCards = this.route.snapshot.firstChild === null;
      });
      this.communityService.myCommunities().subscribe((res:any) =>{
        this.myCommunities = res.communities;
        console.log(res.communities);        
      },
      (error)=>{
        console.log(error);      
      });
      this.communityService.recommendations().subscribe((res:any) =>{
        console.log(res);
        
        this.recommendations = res.communities;
      },
      (error)=>{
        console.log(error);      
      });
    }
}
