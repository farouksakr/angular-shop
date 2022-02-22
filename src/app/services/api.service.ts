import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  getData() {
    const url = 'http://localhost:5000/laptops';
    return this.httpClient.get(url);
  }

  getData2() {
    const url = 'http://localhost:5000/watches';
    return this.httpClient.get(url);
  }

  getData3() {
    const url = 'http://localhost:5000/accessories';
    return this.httpClient.get(url);
  }

  getId(productId: number) {
    const url = 'http://localhost:5000' + productId;
    console.log('service', productId);
    return this.httpClient.get(url);
  }
}
