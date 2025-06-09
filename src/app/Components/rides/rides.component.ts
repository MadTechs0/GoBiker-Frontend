import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  showCards: boolean = true;
  showSearch: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showCards = this.route.snapshot.firstChild === null;
    });
    this.focusSearch();
  }

  focusSearch() {
    setTimeout(() => {
    this.searchInput.nativeElement.focus();
  }, 0);
  }
}
