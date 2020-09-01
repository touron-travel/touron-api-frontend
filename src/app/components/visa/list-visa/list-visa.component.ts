import { MatPaginator } from "@angular/material/paginator";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { VisaService } from "../../../service/visa.service";

@Component({
  selector: "app-list-visa",
  templateUrl: "./list-visa.component.html",
  styleUrls: ["./list-visa.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class ListVisaComponent implements OnInit {
  visaData: MatTableDataSource<any>;
  searchKey;
  expenseDetails: MatTableDataSource<any>;
  expandedElement;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private visaService: VisaService
  ) {}

  displayedColumns: string[] = [
    "no",
    "countryName",
    "imageUrl",
    "salarySubmission",
    "salaryFinancials",
    "salaryDocsRequired",
    "salaryPhotography",
    "salaryAppointment",
    "salaryHoneymooners",
    "salaryDuration",
    "selfEmployedSubmission",
    "selfEmployedFinancials",
    "selfEmployedDocsRequired",
    "selfEmployedPhotography",
    "selfEmployedAppointment",
    "selfEmployedHoneymooners",
    "selfEmployedDuration",
    "actions",
  ];
  ngOnInit(): void {
    this.getVisa();
    console.log(this.route.url);
  }

  onSearchClear() {
    this.searchKey = " ";
    this.applyFilter();
  }

  applyFilter() {
    this.visaData.filter = this.searchKey.trim().toLowerCase();
  }

  getVisa() {
    this.visaService.getVisa().subscribe((data: any) => {
      console.log(data, "LPLP");
      this.visaData = new MatTableDataSource(data);
      this.visaData.paginator = this.paginator;
      this.visaData.sort = this.sort;
      console.log(this.visaData, "LLL");
    });
  }

  deleteVisa(id) {
    this.visaService.deleteVisa(id).subscribe(() => {
      this.snackbar.open("Country Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listvisa"]);
      this.getVisa();
    });
  }

  editVisa(id) {
    this.router.navigate([`/main/editvisa/${id}`]);
  }
}
