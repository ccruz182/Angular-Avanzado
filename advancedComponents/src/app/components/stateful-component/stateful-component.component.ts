import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-stateful-component',
  templateUrl: './stateful-component.component.html',
  styleUrls: ['./stateful-component.component.css']
})
export class StatefulComponentComponent implements OnInit {

  storeModel: Store = new Store();
  purchasedItems: Array<Product> = [];

  total: number = 0.0;

  constructor() { }

  ngOnInit(): void {

  }

  selectItem = ($event: Product) => {
    this.purchasedItems.push($event);
    this.total += $event.price;
  }

}
