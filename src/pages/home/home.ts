import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage: Storage) {

  }

  ionViewWillEnter(){

    this.storage.get('location').then((val)  => {
      if(val != null){
        this.location = JSON.parse(val);
      }else{

        this.location = {
          city: "London",
          country: "uk"
        }

      }

      this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe((result) => {
       this.weather = result;
       this.weather.main.temp = Math.round(this.weather.main.temp * 9/5 - 459.67);
    })


    })

    

 
  }

}
