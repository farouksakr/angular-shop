import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl: string = 'assets/products/products.json';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
