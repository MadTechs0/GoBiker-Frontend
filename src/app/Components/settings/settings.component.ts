import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  activeTab = 'profile';
  
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    twoFactorEnabled: false
  };

  tabs = [
    { id: 'profile', label: 'Profile', icon: 'bi-person' },
    { id: 'security', label: 'Security', icon: 'bi-shield-lock' },
    { id: 'notifications', label: 'Notifications', icon: 'bi-bell' },
    { id: 'privacy', label: 'Privacy', icon: 'bi-lock' }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  updateProfile() {
    console.log('Profile updated:', this.user);
    alert('Profile updated successfully!');
  }
}