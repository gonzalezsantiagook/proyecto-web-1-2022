import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonsaiListComponent } from './bonsai-list/bonsai-list.component';
import { ShopListComponent } from './shop-list/shop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BonsaiListComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
