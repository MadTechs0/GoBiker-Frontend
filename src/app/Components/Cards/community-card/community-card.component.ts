import { Component, Input } from '@angular/core';
import { Community } from 'src/app/Models/community.model';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css']
})
export class CommunityCardComponent {
  @Input()community!: Community;
}
