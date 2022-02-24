import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: any;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.apiService.getData().subscribe((res) => {
      this.products = res;
    });
  }
}
