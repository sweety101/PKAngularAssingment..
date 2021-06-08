import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssign';
  books = false;
  results : any;
  constructor (private apiService: ApiserviceService) {}
  ngOnInit () {

  }
}
