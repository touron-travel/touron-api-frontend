import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // url = this.route.url
  // cityData;
  // countryData;
  // tourData
  ngOnInit(): void {
   
  }


  // getCount(){
  //   this.cityService.getCity().subscribe((data)=>{
  //     this.cityData = data
  //     this.cityData = this.cityData.length
  //     console.log(this.cityData)
      
  //   })
  //   this.countryService.getCountry().subscribe((data)=>{
  //     this.countryData = data
  //     this.countryData = this.countryData.length
  //     console.log(this.countryData)
      
  //   })
  //   this.tourService.getTour().subscribe((data)=>{
  //     this.tourData = data
  //     this.tourData = this.tourData.length
  //     console.log(this.tourData)
      
  //   })
  // }

}
