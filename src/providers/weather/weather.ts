import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  apikey = "e7a8457ef7b29354a5ec1f4c039adcc2";
  url;

  constructor(public http: HttpClient) {
    this.url = "http://api.openweathermap.org/data/2.5/weather?APPID=" + this.apikey + "&q=";
  }

  getWeather(city, country){
    return this.http.get(this.url+city+","+country);
  }

}
