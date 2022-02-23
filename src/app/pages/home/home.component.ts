import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // productName = [
  //   {
  //     id: 1,
  //     name: 'Laptops',
  //     image:
  //       'https://m.media-amazon.com/images/I/41jTUKmjY9S._AC_SR160,160_.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Watches',
  //     image:
  //       'https://m.media-amazon.com/images/I/61JzeOC9rsL._AC_UY327_FMwebp_QL65_.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'Accessories',
  //     image:
  //       'https://m.media-amazon.com/images/I/71NdBp4tEKL._AC_UY327_FMwebp_QL65_.jpg',
  //   },
  // ];

  products!: any;
  // products2!: any;
  // products3!: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
    // this.getProducts2();
    // this.getProducts3();
  }

  getProducts() {
    this.apiService.getData().subscribe((res) => {
      this.products = res;
    });
  }

  // getProducts2() {
  //   this.apiService.getData2().subscribe((res) => {
  //     this.products2 = res;
  //   });
  // }

  // getProducts3() {
  //   this.apiService.getData3().subscribe((res) => {
  //     this.products3 = res;
  //   });
  // }
}
