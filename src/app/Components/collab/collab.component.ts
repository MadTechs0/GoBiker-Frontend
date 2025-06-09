import { Component } from '@angular/core';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.css']
})
export class CollabComponent {
  request = {
    orgName: '',
    email: '',
    industry: '',
    proposal: ''
  };

  industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail'
  ];

  benefits = [
    {
      icon: 'bi-people-fill',
      title: 'Network Expansion',
      description: 'Connect with professionals across industries'
    },
    {
      icon: 'bi-lightbulb-fill',
      title: 'Innovation',
      description: 'Collaborate on cutting-edge projects'
    },
    {
      icon: 'bi-graph-up',
      title: 'Growth',
      description: 'Expand your business opportunities'
    }
  ];

  submitRequest() {
    console.log('Collaboration request:', this.request);
    alert('Your collaboration request has been submitted!');
    this.request = { orgName: '', email: '', industry: '', proposal: '' };
  }
}