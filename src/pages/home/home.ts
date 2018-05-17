import { Flight } from './../../app/models/flight';
import { AirportPage } from './../airport/airport';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flight: Flight;

  constructor(public navCtrl: NavController) {
    this.flight = new Flight(); 
    this.flight = {
      from : "",
      to: "",
      selectDate: null
    };
  }

  searchAirports(searchBy) {
    this.navCtrl.push(AirportPage, {searchBy: searchBy, flight: this.flight});
  }

}
