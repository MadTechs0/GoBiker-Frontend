import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  animations: [
      trigger('slideAnimation', [
        transition(':increment', [
          group([
            query(':enter', [
              style({ transform: 'translateX(100%)', opacity: 0, position: 'absolute', width: '100%' }),
              animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
            ]),
            query(':leave', [
              style({ position: 'absolute', width: '100%' }),
              animate('300ms ease-out', style({ transform: 'translateX(-50%)', opacity: 0 })),
            ]),
          ]),
        ]),
        transition(':decrement', [
          group([
            query(':enter', [
              style({ transform: 'translateX(-100%)', opacity: 0, position: 'absolute', width: '100%' }),
              animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
            ]),
            query(':leave', [
              style({ position: 'absolute', width: '100%' }),
              animate('300ms ease-out', style({ transform: 'translateX(50%)', opacity: 0 })),
            ]),
          ]),
        ]),
      ]),
    ],
})
export class InboxComponent {
  activeIndex: 0 | 1 = 0;
  
  notifications = [
    {
      id: 1,
      title: 'New Message',
      message: 'You have received a new message from Shivam',
      time: '2 min ago',
      read: false
    },
    {
      id: 2,
      title: 'System Update',
      message: 'New features available in your dashboard',
      time: '1 hour ago',
      read: true
    },
    {
      id: 3,
      title: 'Reminder',
      message: 'Your meeting starts in 15 minutes',
      time: '3 hours ago',
      read: true
    }
  ];

  chats = [
    {
      id: 1,
      name: 'Shivam',
      lastMessage: 'Hi there, how are you doing?',
      lastMessageTime: '2:30 PM',
      unreadCount: 3
    },
    {
      id: 2,
      name: 'Priya',
      lastMessage: 'About the project deadline...',
      lastMessageTime: 'Yesterday',
      unreadCount: 0
    },
    {
      id: 3,
      name: 'Team Group',
      lastMessage: 'Meeting at 3 PM tomorrow',
      lastMessageTime: 'Monday',
      unreadCount: 5
    }
  ];

  setActiveTab(tab: 0 | 1) {
    this.activeIndex = tab;
  }
}
