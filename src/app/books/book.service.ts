import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { iBook } from './book.interface';

export const BOOK_API = {
    getBooks_URL: '/assets/data/books.json'
}


@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http: HttpClient){}

    getBooks(){
        return this.http.get<iBook[]>(BOOK_API.getBooks_URL);
    }
}