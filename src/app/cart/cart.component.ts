import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Product[] = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({ name: '', address: '' });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    this.cartService.clearCart();
    window.alert(
      'Your order has been submitted' + JSON.stringify(this.checkoutForm.value)
    );
    this.checkoutForm.reset();
  }
}
