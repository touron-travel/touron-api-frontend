import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../../service/country.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  id;
  countryData;
  timezone = [
    {value: 'Australia UTC +10:30', viewValue: 'Australia UTC +10:30'},
    {value: 'Asia UTC +4', viewValue: 'Asia UTC +4'},
    {value: 'Africa UTC +2', viewValue: 'Africa UTC +2'},
    {value: 'North America UTC +0', viewValue: 'North America UTC +0'},
    {value: 'Europe UTC +3', viewValue: 'Europe UTC +3'},
  ];


  days = [
    {value: '3-4 days' , viewValue: '3-4 days'},
    {value: '4-5 days' , viewValue: '4-5 days'},
    {value: '5-6 days'  , viewValue: '5-6 days'},
    {value: '6-7 days'  , viewValue: '6-7 days'},
    {value: '7-8 days' , viewValue: '7-8 days'},
    {value:  '8-10 days', viewValue: '8-10 days'}
   ];
  month = [
    {value: 'January', viewValue: 'January'},
    {value: 'Febuary', viewValue: 'Febuary'},
    {value: 'March', viewValue: 'March'},
    {value: 'April', viewValue: 'April'},
    {value: 'May', viewValue: 'May'},
    {value: 'June', viewValue: 'June'},
    {value: 'July', viewValue: 'July'},
    {value: 'August', viewValue: 'August'},
    {value: 'September', viewValue: 'September'},
    {value: 'October', viewValue: 'October'},
    {value: 'November', viewValue: 'November'},
    {value: 'December', viewValue: 'December'},

  ];
  constructor(private route:ActivatedRoute,private snackbar: MatSnackBar, private router: Router, private countryService: CountryService) { }


   

  countryForm = new FormGroup({
    countryName : new FormControl('', Validators.required),
    aboutCountry : new FormControl('', Validators.required),
    idealDays : new FormControl('', Validators.required),
    imageUrl : new FormControl('', Validators.required),
    weather : new FormControl('', Validators.required),
    onArrival : new FormControl('', Validators.required),
    cost : new FormControl('', Validators.required),
    currency : new FormControl('', Validators.required),
    timeZone : new FormControl('', Validators.required),
    bestTimeToVisit : new FormControl('', Validators.required),
    bestPlaces : new FormControl('', Validators.required),
   });

  ngOnInit(): void {
      this.route.params.subscribe((params)=>{
        this.id = params.id
        this.countryService.getCountryById(this.id).subscribe((data)=>{
          this.countryData = data
          console.log(this.countryData)

          this.countryForm.get('countryName').setValue(this.countryData.countryName)
          this.countryForm.get('aboutCountry').setValue(this.countryData.aboutCountry)
          this.countryForm.get('idealDays').setValue(this.countryData.idealDays)
          this.countryForm.get('imageUrl').setValue(this.countryData.imageUrl)
          this.countryForm.get('weather').setValue(this.countryData.weather)
          this.countryForm.get('onArrival').setValue(this.countryData.visa.onArrival)
          this.countryForm.get('cost').setValue(this.countryData.visa.cost)
          this.countryForm.get('currency').setValue(this.countryData.general.currency)
          this.countryForm.get('timeZone').setValue(this.countryData.general.timeZone)
          this.countryForm.get('bestTimeToVisit').setValue(this.countryData.general.bestTimeToVisit)
          this.countryForm.get('bestPlaces').setValue(this.countryData.bestPlaces)
        }) 
      })
  }

  
  updateCountry() {
    console.log(this.countryForm.value);
    this.countryService.updateCountry(this.countryForm.value,this.id).subscribe(() => {
      this.snackbar.open('Country updated Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listcountry']);
    });
    // this.countryService.updateCountry(this.countryForm.value)
  }
}
