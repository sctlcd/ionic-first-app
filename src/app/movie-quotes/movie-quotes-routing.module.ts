import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieQuotesPage } from './movie-quotes.page';

const routes: Routes = [
  {
    path: '',
    component: MovieQuotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieQuotesPageRoutingModule {}
