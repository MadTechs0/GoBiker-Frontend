import { Component } from '@angular/core';
interface TeamMember {
  name: string;
  position: string;
  photo: string;
  linkedin: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  collabForm = {
    company: '',
    industry: '',
    proposal: ''
  };

  industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Manufacturing'];
  
  benefits = [
    {
      icon: 'bi-globe',
      title: 'Global Reach',
      description: 'Access to our international network of professionals'
    },
    {
      icon: 'bi-lightbulb',
      title: 'Innovation',
      description: 'Collaborate on cutting-edge projects'
    },
    {
      icon: 'bi-graph-up',
      title: 'Growth',
      description: 'Expand your business opportunities'
    }
  ];

  successStories = [
    {
      company: 'Tech Innovators Inc',
      testimonial: 'Our partnership led to a 300% growth in user engagement',
      industry: 'Technology',
      logo: 'https://via.placeholder.com/60'
    },
    {
      company: 'Health Plus',
      testimonial: 'Revolutionized patient care through collaboration',
      industry: 'Healthcare',
      logo: 'https://via.placeholder.com/60'
    }
  ];

  submitCollaboration() {
    console.log('Collaboration proposal:', this.collabForm);
    this.collabForm = { company: '', industry: '', proposal: '' };
  }
}
