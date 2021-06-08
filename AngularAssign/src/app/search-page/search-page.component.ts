import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  books = false;
  results : any;
  constructor(private apiService: ApiserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getData(value : string){
    console.log(value);
    this.apiService.search(value).subscribe(data => {
      this.books = true;
      this.results = data;
      console.log(data);
    });
  }
  trackByTitle(index: number, currentItem: any): string {
    return currentItem.title;
  }
  navigateToBookDetails(id : number) {
    this.router.navigate(['/bookDetails', { id: id }])
  }
}
