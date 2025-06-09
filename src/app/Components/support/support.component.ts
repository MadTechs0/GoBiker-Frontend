import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  ticket = {
    email: '',
    subject: '',
    message: ''
  };

  faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click "Forgot Password". You will receive an email with instructions.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Our support team is available 24/7 through live chat and email.'
    },
    {
      question: 'How can I upgrade my account?',
      answer: 'Navigate to Settings > Subscription to view upgrade options.'
    }
  ];

  submitTicket() {
    console.log('Support ticket submitted:', this.ticket);
    alert('Your support request has been submitted!');
    this.ticket = { email: '', subject: '', message: '' };
  }
}