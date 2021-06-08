import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  key = "AIzaSyB9FNNtrceZnozsFIbYy-zZGohU9XaJG0c";
  constructor(private httpClient: HttpClient) { }

  search(searchQuery: string): Observable<Book[]> {
    return this.httpClient
      .get<{ items: Book[] }>(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=4&keyes&key=${this.key}`)
      .pipe(map(books => books.items || []));
  }
}
