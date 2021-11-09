import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myVariable?: string = 'Hasta la vista, baby!';

  constructor() {}

  updateMyValue() {
    if (this.myVariable === 'Hasta la vista, baby!') {
      this.myVariable = 'I\'ll be back.';
    } else {
      this.myVariable = 'Hasta la vista, baby!';
    }
  }
}
