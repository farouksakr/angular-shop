import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: any[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  AddToCart(product: any) {
    this.cartService.addProduct(product);
  }
}
