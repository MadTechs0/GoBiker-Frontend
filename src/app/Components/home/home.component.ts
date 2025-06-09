import { Component, ViewChild } from '@angular/core';
import { RidesComponent } from '../rides/rides.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(RidesComponent) rides!: RidesComponent;
  constructor(private router:Router){}
  navigateSearchRides() {
    this.router.navigate(['/rides']).then(() => {
      setTimeout(() => {
        this.rides.focusSearch();
      }, 0);
    });
  }
}
