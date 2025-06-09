import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  position: string;
  photo: string;
  linkedin: string;
  twitter: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team: TeamMember[] = [
    {
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Williams',
      position: 'CTO',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Community',
      photo: 'https://randomuser.me/api/portraits/men/22.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];
}