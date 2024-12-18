import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  showCards:boolean = true;
  constructor(private router:Router, private route: ActivatedRoute){}
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showCards = this.route.snapshot.firstChild === null;
    });
  }
}
