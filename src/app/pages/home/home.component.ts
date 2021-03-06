import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.apiService.getData().subscribe((res) => {
      this.products = res;
    });
  }
}
