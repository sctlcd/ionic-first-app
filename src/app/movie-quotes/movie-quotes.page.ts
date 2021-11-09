import { Component, OnInit } from '@angular/core';
import { MovieQuote } from './movie-quote.model';

@Component({
  selector: 'app-movie-quotes',
  templateUrl: './movie-quotes.page.html',
  styleUrls: ['./movie-quotes.page.scss'],
})
export class MovieQuotesPage implements OnInit {

  movieQuotes: MovieQuote[] = [
    {
      id: 1,
      text: 'Hasta la vista, baby!',
      movie: 'Terminator 2'
    },
    {
      id: 2,
      text: 'I\'ll be back.',
      movie: 'The Terminator'
    },
    {
      id: 3,
      text: 'Why so serious?',
      movie: 'The Dark Knight'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
