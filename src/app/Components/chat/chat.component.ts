import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

interface User {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
}

interface Message {
  text: string;
  time: Date;
  sender: 'me' | 'other';
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  newMessage = '';
  currentUser: User = {
    id: 2,
    name: 'John Doe',
    avatar: '',
    isOnline: true
  };
  
  messages: Message[] = [
    {
      text: 'Hi there! How are you doing?',
      time: new Date(Date.now() - 3600000),
      sender: 'other'
    },
    {
      text: "I'm good, thanks for asking. How about you?",
      time: new Date(Date.now() - 1800000),
      sender: 'me'
    },
    {
      text: "Pretty good! Just working on some Angular components.",
      time: new Date(Date.now() - 1200000),
      sender: 'other'
    },
    {
      text: "That sounds interesting. What kind of components?",
      time: new Date(Date.now() - 600000),
      sender: 'me'
    },
    {
      text: "Building a chat interface like this one!",
      time: new Date(Date.now() - 300000),
      sender: 'other'
    }
  ];

  ngOnInit() {
    // Simulate online status changes
    setInterval(() => {
      this.currentUser.isOnline = Math.random() > 0.3;
    }, 5000);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        time: new Date(),
        sender: 'me'
      });
      this.newMessage = '';
      this.scrollToBottom();
      
      // Simulate reply after 1-3 seconds
      if (Math.random() > 0.3) {
        setTimeout(() => {
          this.messages.push({
            text: this.getRandomReply(),
            time: new Date(),
            sender: 'other'
          });
          this.scrollToBottom();
        }, 1000 + Math.random() * 2000);
      }
    }
  }

  private scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }, 100);
    } catch(err) { 
      console.error(err); 
    }
  }

  private getRandomReply(): string {
    const replies = [
      "That's interesting!",
      "I see what you mean.",
      "Let me think about that.",
      "Thanks for letting me know.",
      "Can we discuss this later?",
      "I agree with you.",
      "What do you think about this idea?",
      "Let me check and get back to you.",
      "That makes sense.",
      "Interesting perspective!",
      "I'll get back to you on that.",
      "Thanks for sharing!"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }
}
