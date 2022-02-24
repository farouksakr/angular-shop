import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    const url = `http://localhost:5000/products`;
    return this.httpClient.get(url);
  }

  getProductId(id: any) {
    const url = 'http://localhost:5000/products/' + id;
    console.log('service', id);
    return this.httpClient.get(url);
  }
}
