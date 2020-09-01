import { Component, OnInit,ViewChild ,Output,EventEmitter} from '@angular/core';
import { CityService } from 'src/app/service/city.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListCityComponent implements OnInit {
cityData:MatTableDataSource<any>
searchKey;
expenseDetails:MatTableDataSource<any>
expandedElement;
@ViewChild(MatPaginator) paginator:MatPaginator
@ViewChild(MatSort) sort:MatSort
coords;
@Output() coordsEvent= new EventEmitter<any>()

  constructor(private cityService: CityService, private router: Router, private snackbar: MatSnackBar) { }
  displayedColumns: string[] = ['no','countryName', 'cityName', 'aboutCity', 'idealDays', 'weather', 'travelDuration', 'airportType','airportName','famousPlacesToVisit','latitude', 'longitude', 'imageUrl', 'actions'];
  ngOnInit(): void {
    this.getCity();
  }


  getCity() {
    this.cityService.getCity().subscribe((data:any) => {
      this.cityData = new MatTableDataSource(data)
      console.log(data)
      this.cityData.paginator =this.paginator
      this.cityData.sort = this.sort 
      console.log(this.cityData);
    });
  }

  deleteCity(id) {
    this.cityService.deleteCity(id).subscribe(() => {
      this.snackbar.open('City Deleted Successfully', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/main/listcity']);
      this.getCity();
    });

  }

  editCity(id){
    this.router.navigate([`/main/editcity/${id}`])
  }

  
  onSearchClear() {
    this.searchKey = ' ';
    this.applyFilter();
  }

  applyFilter() {
    this.cityData.filter = this.searchKey.trim().toLowerCase();
  }

  // sendCoords(id){
  //   this.cityService.getCityById(id).subscribe((data)=>{
  //       this.coords = data
  //       console.log(this.coords.coordinates)
  //       this.coordsEvent.emit(this.coords.coordinates)
  //   })
  // }






}
