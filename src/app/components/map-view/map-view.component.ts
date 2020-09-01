import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CountryService } from 'src/app/service/country.service';
import { CityService } from 'src/app/service/city.service';
import { TourService } from 'src/app/service/tour.service';


@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  constructor(private route:Router,private cityService:CityService,private tourService:TourService,private countryService:CountryService) { }

  url = this.route.url
  cityData;
  countryData;
  tourData
  ngOnInit(): void {
      console.log(this.route.url)
      this.getCount()
      
  }


  getCount(){
    this.cityService.getCity().subscribe((data)=>{
      this.cityData = data
      this.cityData = this.cityData.length
      console.log(this.cityData)
      
    })
    this.countryService.getCountry().subscribe((data)=>{
      this.countryData = data
      this.countryData = this.countryData.length
      console.log(this.countryData)
      
    })
    this.tourService.getTour().subscribe((data)=>{
      this.tourData = data
      this.tourData = this.tourData.length
      console.log(this.tourData)
      
    })
  }
}
