import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieQuotesPageRoutingModule } from './movie-quotes-routing.module';

import { MovieQuotesPage } from './movie-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieQuotesPageRoutingModule
  ],
  declarations: [MovieQuotesPage]
})
export class MovieQuotesPageModule {}
