import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { CityService } from 'src/app/service/city.service';
import { CountryService } from 'src/app/service/country.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TourService } from 'src/app/service/tour.service';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {


   
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
  cityData;
  tourData;
  countryData;
  id;

  
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
    additionalInformation: new FormControl('', Validators.required),
    trending: new FormControl('', Validators.required),
    referanceLink: new FormControl('', Validators.required),
    countryName: new FormControl('', Validators.required),
    pickUpAvailableOn: new FormControl('', Validators.required),
    pickUpTime: new FormControl('', Validators.required),
    dropTime: new FormControl('', Validators.required),
    tourVideoSrc: new FormControl('', Validators.required),
    videoAuthor: new FormControl('', Validators.required),

  });
  
  constructor(private route:ActivatedRoute,private snackbar: MatSnackBar, private router: Router, private cityService: CityService, private countryService: CountryService, private tourService: TourService) { }

  ngOnInit(): void {

    this.getCityList()
    this.getCountryList()
    this.route.params.subscribe((params)=>{
      this.id = params.id
      this.tourService.getTourById(this.id).subscribe((data)=>{
        this.tourData = data
        // console.log(this.tourData)

        this.tourForm.get('tourName').setValue(this.tourData.tourName)
        this.tourForm.get('cityName').setValue(this.tourData.cityName)
        this.tourForm.get('aboutTour').setValue(this.tourData.aboutTour)
        this.tourForm.get('idealType').setValue(this.tourData.idealType)
        this.tourForm.get('imageUrl').setValue(this.tourData.imageUrl)
        this.tourForm.get('adult').setValue(this.tourData.tourCost.adult)
        this.tourForm.get('children').setValue(this.tourData.tourCost.children)
        this.tourForm.get('ratings').setValue(this.tourData.ratings)
        this.tourForm.get('reviews').setValue(this.tourData.reviews)
        this.tourForm.get('inclusion').setValue(this.tourData.inclusion)
        this.tourForm.get('itinerary').setValue(this.tourData.itinerary)
        this.tourForm.get('pickUpPoint').setValue(this.tourData.pickUpPoint)
        this.tourForm.get('tourType').setValue(this.tourData.tourType)
        this.tourForm.get('tourDuration').setValue(this.tourData.tourDuration)
        this.tourForm.get('tourCategory').setValue(this.tourData.tourCategory)
        this.tourForm.get('trending').setValue(this.tourData.trending)
        this.tourForm.get('referanceLink').setValue(this.tourData.referanceLink)
        this.tourForm.get('countryName').setValue(this.tourData.countryName)
        this.tourForm.get('pickUpAvailableOn').setValue(this.tourData.pickUpAvailableOn)
        this.tourForm.get('pickUpTime').setValue(this.tourData.pickUpTime)
        this.tourForm.get('dropTime').setValue(this.tourData.dropTime)
        this.tourForm.get('tourVideoSrc').setValue(this.tourData.tourVideoSrc)
        this.tourForm.get('videoAuthor').setValue(this.tourData.videoAuthor)
    
        this.tourForm.get('tourPreferance').setValue(this.tourData.tourPreferance)
        this.tourForm.get('additionalInformation').setValue(this.tourData.additionalInformation)

      
      }) 
    })
  }


  
  updateTour() {
    // console.log(this.tourForm.value);
    this.tourService.updateTour(this.tourForm.value,this.id).subscribe(() => {
      this.snackbar.open('Tour updated Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listtour']);
    });
  }
  getCityList() {
    this.cityService.getCity().subscribe((data) => {
      // console.log(data);
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







// <tr mat-header-row *matHeaderRowDef="displayedColumns1"></tr>
// <tr mat-row *matRowDef="let income; columns: displayedColumns1;"
//     class="example-element-row"
//     [class.example-expanded-row]="expandedElement === income"
//     (click)="expandedElement = expandedElement === income ? null : income">
// </tr>
// <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
// </table>