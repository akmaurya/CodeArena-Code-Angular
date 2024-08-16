import { Component } from '@angular/core';
import { EndpointsResponse } from '../endpoint.model';
import { EndpointService } from '../endpoint.service';

@Component({
  selector: 'app-endpoint-list',
  templateUrl: './endpoint-list.component.html',
  styleUrl: './endpoint-list.component.css'
})
export class EndpointListComponent {
  endpoints: EndpointsResponse | null = null;
  endpointEntries: [string, any][] = [];

  constructor(private endpointService: EndpointService) { }

  ngOnInit(): void {
    this.endpointService.getEndpoints().subscribe(data => {
      this.endpoints = data;
      this.endpointEntries = Object.entries(data);
    });
  }
  
  objectEntries(obj: any): [string, any][] {
    return Object.entries(obj);
  }
  
}
