import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../product';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    this.product = products.find(product => {
      // @ts-ignore
      return product.id === Number(productIdFromRoute);
    });
  }

}
