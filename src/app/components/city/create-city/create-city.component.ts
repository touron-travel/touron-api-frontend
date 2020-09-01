import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/service/city.service';
import { CountryService } from 'src/app/service/country.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {
  days = [
    {value: '3-4 days' , viewValue: '3-4 days'},
    {value: '4-5 days' , viewValue: '4-5 days'},
    {value: '5-6 days'  , viewValue: '5-6 days'},
    {value: '6-7 days'  , viewValue: '6-7 days'},
    {value: '7-8 days' , viewValue: '7-8 days'},
    {value:  '8-10 days', viewValue: '8-10 days'}
   ];

   travelHours=[
    {value: '2-4 hours' , viewValue: '2-4 hours'},
    {value: '4-6 hours' , viewValue: '4-6 hours'},
    {value: '6-8 hours' , viewValue: '6-8 hours'},
    {value: '8-10 hours' , viewValue: '8-10 hours'},
    {value: '10-12 hours' , viewValue: '10-12hours'},
    {value: '12-14 hours', viewValue: '12-14 hours'},
    {value: '14-16 hours', viewValue: '14-16 hours'}
   ]

  countryData;
  constructor(private snackbar: MatSnackBar, private router: Router, private cityService: CityService, private countryService: CountryService) {
   }

   cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required),
    countryName: new FormControl('', Validators.required),
      aboutCity: new FormControl('', Validators.required),
      idealDays: new FormControl('', Validators.required),
        latitude: new FormControl('', Validators.required),
        longitude: new FormControl('', Validators.required),
      imageUrl : new FormControl('', Validators.required),
      weather : new FormControl('', Validators.required),
       travelDuration : new FormControl('', Validators.required),
       famousPlacesToVisit : new FormControl('', Validators.required),
       airportType : new FormControl('', Validators.required),
       airportName : new FormControl('', Validators.required),
   });

  ngOnInit(): void {
    this.getCountryList();
  }

  addCity() {
    // console.log(this.cityForm.value);
    this.cityService.addCity(this.cityForm.value).subscribe(() => {
      this.snackbar.open('Added Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listcity']);
    });
  }
  getCountryList() {
    this.countryService.getCountry().subscribe((data) => {
    this.countryData = data;
    // console.log(this.countryData);
    });
  }
}
