import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourService {


    uri = 'https://touronapi.herokuapp.com';
  //  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  getTour() {
    return this.http.get(`${this.uri}/tour`);
  }

  getTourById(id) {
      return this.http.get(`${this.uri}/tour/edit/${id}`);
  }

  addTour(value) {
 console.log(value);
 const tour = {
      cityName : value.cityName,
      tourName : value.tourName,
      aboutTour : value.aboutTour,
      imageUrl : value.imageUrl,
      tourCost: {
          adult: value.adult,
          children: value.children
      },
      ratings : value.ratings,
      reviews : value.reviews,
      inclusion : value.inclusion,
      itinerary : value.itinerary,
      pickUpPoint : value.pickUpPoint,
      tourDuration: value.tourDuration,
      tourType:value.tourType,
      idealType:value.idealType,
      tourCategory:value.tourCategory,
      additionalInformation:value.additionalInformation,
      tourPreferance:value.tourPreferance,
      trending:value.trending,
      referanceLink:value.referanceLink,
      countryName:value.countryName,
      pickUpAvailableOn:value.pickUpAvailableOn,
      pickUpTime:value.pickUpTime,
      dropTime:value.dropTime,
      tourVideoSrc:value.tourVideoSrc,
      videoAuthor:value.videoAuthor,
      
    
    };


 return this.http.post(`${this.uri}/tour`, tour);
  }

  updateTour(value,id) {
    console.log(value,id)
    const tour = {
      cityName : value.cityName,
      tourName : value.tourName,
      aboutTour : value.aboutTour,
      imageUrl : value.imageUrl,
          adult: value.adult,
          children: value.children,
      ratings : value.ratings,
      reviews : value.reviews,
      inclusion : value.inclusion,
      itinerary : value.itinerary,
      pickUpPoint : value.pickUpPoint,
      tourDuration: value.tourDuration,
      tourType:value.tourType,
      idealType:value.idealType,
      tourCategory:value.tourCategory,
      additionalInformation:value.additionalInformation,
      tourPreferance:value.tourPreferance,
      trending:value.trending,
      referanceLink:value.referanceLink,
      countryName:value.countryName,
      pickUpAvailableOn:value.pickUpAvailableOn,
      pickUpTime:value.pickUpTime,
      dropTime:value.dropTime,
      tourVideoSrc:value.tourVideoSrc,
      videoAuthor:value.videoAuthor,
     
    };


 return this.http.post(`${this.uri}/tour/edit/${id}`, tour);
  }

  getTourByTourName(name) {
    return this.http.get(`${this.uri}/tour/tourname/${name}`);
  }
  getTourByCityName(name) {
    return this.http.get(`${this.uri}/tour/cityname/${name}`);
  }


deleteTour(id) {
  return this.http.post(`${this.uri}/tour/delete/${id}`, id);
}

}
