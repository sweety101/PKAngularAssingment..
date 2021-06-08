import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { MyCollectionsComponent } from './my-collections/my-collections.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CartComponent } from './cart/cart.component';
import { BookDetailsComponent } from './book-details/book-details.component';
const routes: Routes = [
  {path: 'search', component: SearchPageComponent},
  { path: 'bookDetails/:id', component: BookDetailsComponent },
  { path: 'myCollections', component: MyCollectionsComponent },
  { path: 'billingDetails', component: BillingDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
