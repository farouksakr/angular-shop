import { Product } from 'src/app/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Product = { id: '', title: '', desc: '', price: '', image: '' };
  productId: any;

  constructor(
    private apiService: ApiService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log('product det Id', this.productId);
    });
    // -----------------------------
    this.apiService.getProductId(this.productId).subscribe((res) => {
      this.products = res;
    });
  }

  AddToCart(product: any) {
    this.cartService.addProduct(product);
  }
}
