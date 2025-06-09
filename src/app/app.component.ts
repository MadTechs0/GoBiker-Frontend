import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GoBiker';
  showTopBar: boolean = true;
  pageName:string = '';
  loading = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } 
      else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => {
          this.loading = false;
        }, 300);
        if(event instanceof NavigationEnd){        
          const currentRoute = event.urlAfterRedirects;
          const hiddenRoutes = ['/auth/login', '/auth/signup', '/rides/create', '/create', '/profile', '/communities/create'];
          this.showTopBar = !hiddenRoutes.includes(event.url);
          this.pageName = this.getPageName(currentRoute);
        }
      }
    });
  }

  private getPageName(route: string){
    const routeMap: {[key:string]:string} = {
      '/':'',
      '/communities':'Communities',
      '/rides':'Rides',
      '/inbox':'Inbox'
    }
    return routeMap[route];
  }
}
