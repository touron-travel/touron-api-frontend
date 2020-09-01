import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { VisaService } from "../../../service/visa.service";

@Component({
  selector: "app-create-visa",
  templateUrl: "./create-visa.component.html",
  styleUrls: ["./create-visa.component.css"],
})
export class CreateVisaComponent implements OnInit {
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private visaService: VisaService
  ) {}

  visaForm = new FormGroup({
    countryName: new FormControl("", Validators.required),
    imageUrl: new FormControl("", Validators.required),
    salaryDocsRequired: new FormControl("", Validators.required),
    selfEmployedDocsRequired: new FormControl("", Validators.required),
    salarySubmission: new FormControl("", Validators.required),
    selfEmployedSubmission: new FormControl("", Validators.required),
    salaryFinancials: new FormControl("", Validators.required),
    selfEmployedFinancials: new FormControl("", Validators.required),
    salaryPhotography: new FormControl("", Validators.required),
    salaryHoneymooners: new FormControl("", Validators.required),
    salaryAppointment: new FormControl("", Validators.required),
    salaryDuration: new FormControl("", Validators.required),
    selfEmployedPhotography: new FormControl("", Validators.required),
    selfEmployedHoneymooners: new FormControl("", Validators.required),
    selfEmployedAppointment: new FormControl("", Validators.required),
    selfEmployedDuration: new FormControl("", Validators.required),
  });

  ngOnInit(): void {}

  addVisa() {
    console.log(this.visaForm.value);
    this.visaService.addVisa(this.visaForm.value).subscribe(() => {
      this.snackbar.open("Added Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listvisa"]);
    });
  }
}
