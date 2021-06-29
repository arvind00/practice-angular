import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { iBook } from './book.interface';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BooksResolver implements Resolve<iBook[]> {

  constructor(private bookService: BookService){ }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<iBook[]> | Promise<iBook[]> | iBook[] {
    return this.bookService.getBooks();
  }
  
}
