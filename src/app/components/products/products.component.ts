import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: any;
  products2!: any;
  products3!: any;
  pageId: any;
  sub!: Subscription;

  constructor(
    public apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pageId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('from products', this.pageId);

    // ----------------------------

    this.getProducts();
    this.getProducts2();
    this.getProducts3();
  }

  getProducts() {
    this.apiService.getData().subscribe((res) => {
      this.products = res;
    });
  }
  getProducts2() {
    this.apiService.getData2().subscribe((res) => {
      this.products2 = res;
    });
  }
  getProducts3() {
    this.apiService.getData3().subscribe((res) => {
      this.products3 = res;
    });
  }
}
