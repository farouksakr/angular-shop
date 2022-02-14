import { CartService } from 'src/app/services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css'],
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkoutProducts!: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  removeItem(product: any) {
    this.cartService.removerItem(product);
    this.deleteEvent.emit();
  }
}
