import { MatPaginator } from '@angular/material/paginator';
import { CountryService } from './../../../service/country.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListCountryComponent implements OnInit {
  countryData:MatTableDataSource<any>
  searchKey;
  expenseDetails:MatTableDataSource<any>
  expandedElement;
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort:MatSort
  
  constructor(private snackbar: MatSnackBar, private route:ActivatedRoute,private router: Router, private countryService: CountryService) { }
  displayedColumns: string[] = ['no','countryName', 'aboutCountry', 'idealDays', 'weather', 'onArrival', 'cost', 'currency',  'bestPlaces','timeZone', 'bestTimeToVisit', 'imageUrl','countryFlagImage', 'actions'];




  ngOnInit(): void {
    this.getCountry();
    console.log(this.route.url)
  }

  onSearchClear() {
    this.searchKey = ' ';
    this.applyFilter();
  }

  applyFilter() {
    this.countryData.filter = this.searchKey.trim().toLowerCase();
  }


  getCountry() {
    this.countryService.getCountry().subscribe((data:any) => {
      this.countryData = new MatTableDataSource(data)
      this.countryData.paginator= this.paginator
      this.countryData.sort= this.sort
      console.log(this.countryData);
    });
  }

  deleteCountry(id) {
    this.countryService.deleteCountry(id).subscribe(() => {
      this.snackbar.open('Country Deleted Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listcountry']);
      this.getCountry();
    });

  }

  editCountry(id){
    this.router.navigate([`/main/editcountry/${id}`])
  }


}
