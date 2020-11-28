import { Component, OnInit } from "@angular/core";
import { CountryService } from "./../../../service/country.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-create-country",
  templateUrl: "./create-country.component.html",
  styleUrls: ["./create-country.component.css"],
})
export class CreateCountryComponent implements OnInit {
  days = [
    { value: "3-4 days", viewValue: "3-4 days" },
    { value: "4-5 days", viewValue: "4-5 days" },
    { value: "5-6 days", viewValue: "5-6 days" },
    { value: "6-7 days", viewValue: "6-7 days" },
    { value: "7-8 days", viewValue: "7-8 days" },
    { value: "8-10 days", viewValue: "8-10 days" },
  ];
  config: any = {
    allowedContent: true,
    toolbar: [
      [
        "Bold",
        "Italic",
        "Underline",
        "-",
        "NumberedList",
        "BulletedList",
        "Link",
        "-",
        "CreatePlaceholder",
      ],
    ],
    removePlugins: "elementspath",
    resize_enabled: false,
    extraPlugins: "font,divarea,placeholder",
    contentsCss: [
      "body {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}",
    ],
    autoParagraph: false,
    enterMode: 2,
  };

  month = [
    { value: "January", viewValue: "January" },
    { value: "Febuary", viewValue: "Febuary" },
    { value: "March", viewValue: "March" },
    { value: "April", viewValue: "April" },
    { value: "May", viewValue: "May" },
    { value: "June", viewValue: "June" },
    { value: "July", viewValue: "July" },
    { value: "August", viewValue: "August" },
    { value: "September", viewValue: "September" },
    { value: "October", viewValue: "October" },
    { value: "November", viewValue: "November" },
    { value: "December", viewValue: "December" },
  ];
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private countryService: CountryService
  ) {}

  countryForm = new FormGroup({
    countryName: new FormControl("", Validators.required),
    aboutCountry: new FormControl("", Validators.required),
    idealDays: new FormControl("", Validators.required),
    imageUrl: new FormControl("", Validators.required),
    weather: new FormControl("", Validators.required),
    onArrival: new FormControl("", Validators.required),
    cost: new FormControl("", Validators.required),
    currency: new FormControl("", Validators.required),
    timeZone: new FormControl("", Validators.required),
    bestTimeToVisit: new FormControl("", Validators.required),
    bestPlaces: new FormControl("", Validators.required),
    countryFlagImage: new FormControl("", Validators.required),
    
  });

  ngOnInit(): void {}

  addCountry() {
    console.log(this.countryForm.value);
    this.countryService.addCountry(this.countryForm.value).subscribe(() => {
      this.snackbar.open("Added Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listcountry"]);
    });
  }
}
