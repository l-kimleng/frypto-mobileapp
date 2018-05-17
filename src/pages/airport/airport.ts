import { Flight } from './../../app/models/flight';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AirportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airport',
  templateUrl: 'airport.html',
})
export class AirportPage {
  searchBy: any;
  items: any;
  viewTitle: string;
  flight: Flight;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.searchBy = this.navParams.get('searchBy');
    this.flight = this.navParams.get('flight');
    const title = this.searchBy === 'from' ? 'departure' : 'arrival';
    this.viewTitle = `Select ${title} airport`;
    
    this.items = [
      'AAL', 'AES', 'ABA', 'ADL', 'BNK', 'PNH', 'PEK', 'BKK',
                'CEK', 'DXB', 'ADZ', 'NRT', 'JFK', 'BOS', 'FLR'
    ];
  }

  getItems($event) {
    console.log($event);
  }

  selectedAirport(item) {
    this.flight[this.searchBy] = item;
    this.navCtrl.pop();
  }
}
