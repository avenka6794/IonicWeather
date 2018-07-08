import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city: String;
    country: String;
  }


  // http://www.spriteland.com/sprites/?c=Backgrounds for background pictures

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.location = {
      city: "London",
      country: "uk"
    }

    this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe((result) => {
        //this.weather = result.weather[0].description;
       this.weather = result
    })
  }

}
