import { ProductBComponent } from './product-b/product-b.component';
import { ProductAComponent } from './product-a/product-a.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    component: ProductAComponent
  },
  {
    path: 'product-b',
    component: ProductBComponent
  }
]
