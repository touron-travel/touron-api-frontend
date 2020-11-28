import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  uri = "https://touronapi.herokuapp.com";
  // uri = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getCountry() {
    return this.http.get(`${this.uri}/country`);
  }

  getCountryById(id) {
    return this.http.get(`${this.uri}/country/edit/${id}`);
  }

  addCountry(value) {
    console.log(value, value.weather);
    const country = {
      countryName: value.countryName,
      aboutCountry: value.aboutCountry,
      idealDays: value.idealDays,
      imageUrl: value.imageUrl,
      weather: value.weather,
      visa: {
        onArrival: value.onArrival,
        cost: value.cost,
      },
      general: {
        currency: value.currency,
        timeZone: value.timeZone,
        bestTimeToVisit: value.bestTimeToVisit,
      },
      bestPlaces: value.bestPlaces,
      countryFlagImage: value.countryFlagImage,
    };

    return this.http.post(`${this.uri}/country`, country);
  }

  updateCountry(value, id) {
    console.log(value, id);
    const country = {
      countryName: value.countryName,
      aboutCountry: value.aboutCountry,
      idealDays: value.idealDays,
      imageUrl: value.imageUrl,
      weather: value.weather,
      onArrival: value.onArrival,
      cost: value.cost,
      currency: value.currency,
      timeZone: value.timeZone,
      bestTimeToVisit: value.bestTimeToVisit,
      bestPlaces: value.bestPlaces,
      countryFlagImage: value.countryFlagImage,

    };

    return this.http.post(`${this.uri}/country/edit/${id}`, country);
  }

  getCountryByCountryName(name) {
    return this.http.get(`${this.uri}/country/${name}`);
  }

  deleteCountry(id) {
    console.log(id);
    return this.http.post(`${this.uri}/country/delete/${id}`, id);
  }
}
