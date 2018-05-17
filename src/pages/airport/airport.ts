import { AirportService } from './airport.service';
import { Flight } from './../../app/models/flight';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  search: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public airportService: AirportService) {
  }

  ionViewDidLoad() {
    this.searchBy = this.navParams.get('searchBy');
    this.flight = this.navParams.get('flight');
    const title = this.searchBy === 'from' ? 'departure' : 'arrival';
    this.viewTitle = `Select ${title} airport`;    
    this.items = [];
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Frypto - Search Airport',
      message: 'Search not found',
      buttons: ['Ok']
    });

    alert.present();
  }

  getItems($event) {
    if(this.search.length >= 3)
      this.airportService.getAirportBy(this.search)
        .subscribe(data => {
          this.items = data.map(d => d.Code);
        }, error => {
          this.doAlert();
        });
  }

  selectedAirport(item) {
    this.flight[this.searchBy] = item;
    this.navCtrl.pop();
  }
}
