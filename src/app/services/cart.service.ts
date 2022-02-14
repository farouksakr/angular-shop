import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: any[] = [];

  constructor() {}

  addProduct(product: any) {
    let items = this.getCartItems();
    if (items) {
      items.push(product);
      localStorage.setItem('cart', JSON.stringify(items));
    } else {
      this.cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  getCartItems() {
    let items: any = localStorage.getItem('cart');
    return JSON.parse(items);
  }

  getCartLength() {
    let items = this.getCartItems();
    return items ? this.getCartItems().length : 0;
  }

  getTotal() {
    let items = this.getCartItems();
    return items
      ? items.reduce((acc: any, item: any) => acc + item.price, 0)
      : 0;
  }

  removerItem(product: any) {
    let items = this.getCartItems();

    const index = items.findIndex((item: any) => item.id == product.id);
    if (index >= 0) {
      items.splice(index, 1);
      return localStorage.setItem('cart', JSON.stringify(items));
    }
  }
}
