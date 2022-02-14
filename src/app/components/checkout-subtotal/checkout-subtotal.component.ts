import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css'],
})
export class CheckoutSubtotalComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
