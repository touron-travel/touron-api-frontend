import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {


   uri = 'https://touronapi.herokuapp.com';
  //  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  getCity() {
    return this.http.get(`${this.uri}/city`);
  }

  getCityById(id) {
      return this.http.get(`${this.uri}/city/edit/${id}`);
  }

  addCity(value) {
 console.log(value);
 const city = {
    cityName: value.cityName,
    countryName: value.countryName,
      aboutCity: value.aboutCity,
      idealDays: value.idealDays,
      coordinates: {
        latitude: value.latitude,
        longitude: value.longitude
      },
      imageUrl: value.imageUrl,
      weather: value.weather,
      travelDuration: value.travelDuration,
      famousPlacesToVisit: value.famousPlacesToVisit,
        airportType:value.airportType,
        airportName:value.airportName
    
    };


 return this.http.post(`${this.uri}/city`, city);
  }

  updateCity(value,id) {
    console.log(value)
    const city = {
      cityName: value.cityName,
      countryName: value.countryName,
        aboutCity: value.aboutCity,
        idealDays: value.idealDays,
          latitude: value.latitude,
          longitude: value.longitude,
        imageUrl: value.imageUrl,
        weather: value.weather,
        travelDuration: value.travelDuration,
        famousPlacesToVisit: value.famousPlacesToVisit,
        airportType:value.airportType,
        airportName:value.airportName
      };
      console.log(city)
      return this.http.post(`${this.uri}/city/edit/${id}`, city);
  }

  getCityByCityName(name) {
    return this.http.get(`${this.uri}/city/cityname/${name}`);
  }
  getCityByCountryName(name) {
    return this.http.get(`${this.uri}/city/countryname/${name}`);
  }


deleteCity(id) {
  return this.http.post(`${this.uri}/city/delete/${id}`, id);
}

}