import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.items = this.cartService.getCartItems();
  }

  deleteEventHandler(p: any) {
    this.getCart();
  }
}
