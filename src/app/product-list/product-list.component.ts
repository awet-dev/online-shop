import { Component, OnInit } from '@angular/core';
import {products} from '../product';
import {findIndex} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {
    this.products.forEach(product => {
      // @ts-ignore
      product.id = this.products.indexOf(product);
    });
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }

}
