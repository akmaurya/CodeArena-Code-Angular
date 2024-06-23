import { Component, OnInit } from '@angular/core';
import { VisitCounterService } from './visit-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'moviekilibrary';

  visitCount: number=0;

  constructor(private visitCounterService: VisitCounterService) {}

  ngOnInit(): void {
    this.visitCount = this.visitCounterService.getVisitCount();
  }
}
