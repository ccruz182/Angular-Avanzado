import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from './../../interfaces/Product';

@Component({
  selector: 'app-stateless-component',
  templateUrl: './stateless-component.component.html',
  styleUrls: ['./stateless-component.component.css']
})
export class StatelessComponentComponent implements OnInit {

  @Input() item: Product;
  @Output() itemClicked: EventEmitter<Product> = new EventEmitter();

  disabled: boolean;
  purchaseAction: string;
  menuInvisibility: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.purchaseAction = `BUY FOR $${this.item.price}`
    this.menuInvisibility = true
  }

  selectItem = (item: Product) => {
    this.disabled = true;
    this.purchaseAction = 'ALREADY IN CART';
    this.itemClicked.emit(item);
  }

  showMenu = () => {
    this.menuInvisibility = true;
  }

  onRightClick = () => {
    this.menuInvisibility = false;

    return false; // Prevent showing the contextual menu.
  }

}
