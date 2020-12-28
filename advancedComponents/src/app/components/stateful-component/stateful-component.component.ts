import { AlertConfirmationComponent } from './../alert-confirmation/alert-confirmation.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-stateful-component',
  templateUrl: './stateful-component.component.html',
  styleUrls: ['./stateful-component.component.css'],
})
export class StatefulComponentComponent implements OnInit, OnDestroy {
  storeModel: Store = new Store();
  purchasedItems: Array<Product> = [];

  @ViewChild(AlertConfirmationComponent, { static: false })
  alertConfirmation: AlertConfirmationComponent;

  total: number = 0.0;

  constructor() {}

  ngOnInit(): void {
    this.enableKeyboardEvents();
  }

  ngOnDestroy = (): void => {
    window.onkeydown = null;
  };

  selectItem = ($event: Product) => {
    this.purchasedItems.push($event);
    this.total += $event.price;
  };

  pay = () => {
    this.alertConfirmation.show();
  };

  enableKeyboardEvents = () => {
    window.onkeydown = (event) => {
      if (event.code === 'F12') {
        this.pay();
      }

      return false;
    };
  };
}
