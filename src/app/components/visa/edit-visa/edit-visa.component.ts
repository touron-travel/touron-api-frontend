import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { VisaService } from "../../../service/visa.service";
@Component({
  selector: "app-edit-visa",
  templateUrl: "./edit-visa.component.html",
  styleUrls: ["./edit-visa.component.css"],
})
export class EditVisaComponent implements OnInit {
  id;
  visaData;
  constructor(
    private route: ActivatedRoute,
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
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.visaService.getVisaById(this.id).subscribe((data) => {
        this.visaData = data;
        console.log(this.visaData);

        this.visaForm.get("countryName").setValue(this.visaData.countryName);
        this.visaForm.get("imageUrl").setValue(this.visaData.imageUrl);
        this.visaForm
          .get("salaryDocsRequired")
          .setValue(this.visaData.salaryDocs.salaryDocsRequired);
        this.visaForm
          .get("salarySubmission")
          .setValue(this.visaData.salaryDocs.salarySubmission);
        this.visaForm
          .get("salaryFinancials")
          .setValue(this.visaData.salaryDocs.salaryFinancials);
        this.visaForm
          .get("salaryPhotography")
          .setValue(this.visaData.salaryDocs.salaryPhotography);
        this.visaForm
          .get("salaryAppointment")
          .setValue(this.visaData.salaryDocs.salaryAppointment);
        this.visaForm
          .get("salaryDuration")
          .setValue(this.visaData.salaryDocs.salaryDuration);
        this.visaForm
          .get("salaryHoneymooners")
          .setValue(this.visaData.salaryDocs.salaryHoneymooners);
        this.visaForm
          .get("selfEmployedDocsRequired")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedDocsRequired);
        this.visaForm
          .get("selfEmployedSubmission")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedSubmission);
        this.visaForm
          .get("selfEmployedFinancials")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedFinancials);
        this.visaForm
          .get("selfEmployedPhotography")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedPhotography);
        this.visaForm
          .get("selfEmployedAppointment")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedAppointment);
        this.visaForm
          .get("selfEmployedHoneymooners")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedHoneymooners);
        this.visaForm
          .get("selfEmployedDuration")
          .setValue(this.visaData.selfEmployedDocs.selfEmployedDuration);
      });
    });
  }

  updateVisa() {
    console.log(this.visaForm.value);
    this.visaService.updateVisa(this.visaForm.value, this.id).subscribe(() => {
      this.snackbar.open("Country updated Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listvisa"]);
    });
  }
}
