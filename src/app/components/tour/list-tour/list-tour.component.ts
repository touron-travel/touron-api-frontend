import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TourService } from 'src/app/service/tour.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListTourComponent implements OnInit {
  tourData:MatTableDataSource<any>
  searchKey;
  expenseDetails:MatTableDataSource<any>
  expandedElement;
  tours;
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort:MatSort



  constructor(private tourService: TourService, private router: Router, private snackbar: MatSnackBar) { }
  // displayedColumns: string[] = ['no','cityName', 'tourName', 'aboutTour', 'idealType', 'adult', 'children', 'ratings', 'reviews', 'inclusion', 'itinerary','additionalInformation', 'pickUpPoint','tourType','tourPreferance','tourDuration','tourCategory','trending','referanceLink','imageUrl', 'actions'];
  displayedColumns: string[] = ['no','countryName','cityName', 'tourName', 'aboutTour', 'idealType', 'adult', 'children', 'ratings', 'reviews', 'inclusion', 'itinerary','additionalInformation', 'pickUpPoint','pickUpAvailableOn','pickUpTime','dropTime','tourType','tourPreferance','tourDuration','tourCategory','trending','referanceLink', 'imageUrl', 'actions'];

  ngOnInit(): void {
    this.getTour();
  }
  getTour() {
    this.tourService.getTour().subscribe((data:any) => {
      this.tourData  = new MatTableDataSource(data);
      this.tourData.paginator=this.paginator
      this.tours= data
      this.tourData.sort = this.sort
      console.log(this.tourData);
    });
  }

  deleteTour(id) {
    this.tourService.deleteTour(id).subscribe(() => {
      this.snackbar.open('Tour Deleted Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listtour']);
      this.getTour();
    });
  }


  editTour(id){
    this.router.navigate([`/main/edittour/${id}`])
  }


  
  onSearchClear() {
    this.searchKey = ' ';
    this.applyFilter();
  }

  applyFilter() {
    this.tourData.filter = this.searchKey.trim().toLowerCase();
  }

}
