import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    const url = `http://localhost:5000/products`;
    return this.httpClient.get(url);
  }

  getProductId(Id: number) {
    const url = `http://localhost:5000/products/ ${Id}`;
    console.log('service', Id);
    return this.httpClient.get(url);
  }
}
