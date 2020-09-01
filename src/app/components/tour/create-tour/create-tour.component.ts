import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/service/city.service';
import { CountryService } from 'src/app/service/country.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TourService } from 'src/app/service/tour.service';


@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent implements OnInit {
  cityData;
  countryData;

  hours = [
    {value: '1-2 hours' , viewValue: '1-2 hours'},
    {value: '2-3 hours' , viewValue: '2-3 hours'},
    {value: '3-4 hours' , viewValue: '3-4 hours'},
    {value: '4-5 hours' , viewValue: '4-5 hours'},
    {value: '5-6 hours'  , viewValue: '5-6 hours'},
    {value: '6-7 hours'  , viewValue: '6-7 hours'},
    {value: '7-8 hours' , viewValue: '7-8 hours'},
    {value: '8-10 hours', viewValue: '8-10 hours'},
    {value: '10-12 hours', viewValue: '10-12 hours'}
   ];
  constructor(
    private snackbar: MatSnackBar, private router: Router,
     private cityService: CityService, private countryService: CountryService, private tourService: TourService) { }

  tourForm = new FormGroup({


  cityName : new FormControl('', Validators.required),
  tourName : new FormControl('', Validators.required),
  aboutTour: new FormControl('', Validators.required),
  imageUrl : new FormControl('', Validators.required),
      adult: new FormControl('', Validators.required),
      children: new FormControl('', Validators.required),
  ratings : new FormControl('', Validators.required),
  reviews : new FormControl('', Validators.required),
  inclusion : new FormControl('', Validators.required),
  itinerary : new FormControl('', Validators.required),
  pickUpPoint: new FormControl('', Validators.required),
  tourType: new FormControl('', Validators.required),
  tourDuration: new FormControl('', Validators.required),
  tourCategory: new FormControl('', Validators.required),
  idealType: new FormControl('', Validators.required),
  tourPreferance: new FormControl('', Validators.required),
  trending: new FormControl('', Validators.required),
  referanceLink: new FormControl('', Validators.required),
  additionalInformation: new FormControl('', Validators.required),
  countryName: new FormControl('', Validators.required),
  pickUpAvailableOn: new FormControl('', Validators.required),
  pickUpTime: new FormControl('', Validators.required),
  dropTime: new FormControl('', Validators.required),


});


days = [
  {value: '3-4 days' , viewValue: '3-4 days'},
  {value: '4-5 days' , viewValue: '4-5 days'},
  {value: '5-6 days'  , viewValue: '5-6 days'},
  {value: '6-7 days'  , viewValue: '6-7 days'},
  {value: '7-8 days' , viewValue: '7-8 days'},
  {value:  '8-10 days', viewValue: '8-10 days'}
 ];

  ngOnInit(): void {
    this.getCityList();
    this.getCountryList();
  }

  addTour() {
    console.log(this.tourForm.value);
    this.tourService.addTour(this.tourForm.value).subscribe(() => {
      this.snackbar.open('Tour Added Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listtour']);
    });
  }
  getCityList() {
    this.cityService.getCity().subscribe((data) => {
      console.log(data);
      this.cityData = data;
      // console.log(this.cityData);
    });
  }

  getCountryList(){
this.countryService.getCountry().subscribe((data)=>{
  this.countryData = data;
  console.log(this.countryData)
})
    
  }
}
