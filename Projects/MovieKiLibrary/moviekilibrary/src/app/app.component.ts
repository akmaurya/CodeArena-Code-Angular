import { Component, OnInit } from '@angular/core';
import { VisitCounterService } from './visit-counter.service';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'moviekilibrary';
  currentRouteName: string = '';
  
  visitCount: number=0;
  // activeTab: string = 'bollywood'; // default tab

  
  constructor(private visitCounterService: VisitCounterService, private router: Router, private activatedRoute: ActivatedRoute) {}
  
  // setActiveTab(tab: string) {
  //   this.activeTab = tab;
  // }
  ngOnInit(): void {
    this.visitCount = this.visitCounterService.getVisitCount();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activatedRoute.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }
        route?.data.subscribe(data => {
          this.currentRouteName = data['title'] || route?.snapshot.url.join('/') || 'Home';
          this.currentRouteName = this.currentRouteName!='home'?" | ["+this.currentRouteName+"]":'';
        });
      });
  }

  
}
