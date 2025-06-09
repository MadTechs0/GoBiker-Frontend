import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Community } from 'src/app/Models/community.model';
import { Post } from 'src/app/Models/post.model';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-community-def',
  templateUrl: './community-def.component.html',
  styleUrls: ['./community-def.component.css']
})
export class CommunityDefComponent implements OnInit{
  index:number = 0;
  community!: Community;
  constructor(private route: ActivatedRoute, private communityService: CommunityService){}
  ngOnInit(): void {
    const communityId = this.route.snapshot.paramMap.get('id');
    this.communityService.community(communityId).subscribe((res:any)=>{
      this.community = res.community;
      console.log("banner");
    });
  }

}
