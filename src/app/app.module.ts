import { HttpClient } from "@angular/common/http";
import { CountryService } from "./service/country.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CKEditorModule } from "ng2-ckeditor";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { PlaceService } from "./service/place.service";
import { CityService } from "./service/city.service";
import { TourService } from "./service/tour.service";
import { VisaService } from "./service/visa.service";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { CreateCityComponent } from "./components/city/create-city/create-city.component";
import { ListCityComponent } from "./components/city/list-city/list-city.component";
import { ListPlaceComponent } from "./components/place/list-place/list-place.component";
import { CreatePlaceComponent } from "./components/place/create-place/create-place.component";
import { CreateTourComponent } from "./components/tour/create-tour/create-tour.component";
import { ListTourComponent } from "./components/tour/list-tour/list-tour.component";
import { HomeComponent } from "./components/home/home.component";
import { ListCountryComponent } from "./components/country/list-country/list-country.component";
import { CreateCountryComponent } from "./components/country/create-country/create-country.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatSortModule } from "@angular/material/sort";
import { BlogService } from "./service/blog.service";
import { MapViewComponent } from "./components/map-view/map-view.component";
import { EditCityComponent } from "./components/city/edit-city/edit-city.component";
import { EditCountryComponent } from "./components/country/edit-country/edit-country.component";
import { EditTourComponent } from "./components/tour/edit-tour/edit-tour.component";
import { CreateVisaComponent } from "./components/visa/create-visa/create-visa.component";
import { EditVisaComponent } from "./components/visa/edit-visa/edit-visa.component";
import { ListVisaComponent } from "./components/visa/list-visa/list-visa.component";
import { ListBlogComponent } from "./components/blog/list-blog/list-blog.component";
import { EditBlogComponent } from "./components/blog/edit-blog/edit-blog.component";
import { CreateBlogComponent } from "./components/blog/create-blog/create-blog.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "main",
    component: NavbarComponent,

    children: [
      { path: "createcity", component: CreateCityComponent },
      { path: "listcity", component: ListCityComponent },
      { path: "editcity/:id", component: EditCityComponent },
      { path: "createplace", component: CreatePlaceComponent },
      { path: "listplace", component: ListPlaceComponent },
      { path: "createtour", component: CreateTourComponent },
      { path: "listtour", component: ListTourComponent },
      { path: "edittour/:id", component: EditTourComponent },
      { path: "createcountry", component: CreateCountryComponent },
      { path: "listcountry", component: ListCountryComponent },
      { path: "editcountry/:id", component: EditCountryComponent },
      { path: "createvisa", component: CreateVisaComponent },
      { path: "listvisa", component: ListVisaComponent },
      { path: "editvisa/:id", component: EditVisaComponent },
      { path: "createblog", component: CreateBlogComponent },
      { path: "listblog", component: ListBlogComponent },
      { path: "editblog/:id", component: EditBlogComponent },
      { path: "map", component: MapViewComponent },
      { path: "dash", component: MapViewComponent },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    CreateCityComponent,
    ListCityComponent,
    ListPlaceComponent,
    CreatePlaceComponent,
    CreateTourComponent,
    ListTourComponent,
    HomeComponent,
    ListCountryComponent,
    CreateCountryComponent,
    NavbarComponent,
    MapViewComponent,
    EditCityComponent,
    EditCountryComponent,
    EditTourComponent,
    CreateVisaComponent,
    EditVisaComponent,
    ListVisaComponent,
    CreateBlogComponent,
    ListBlogComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    MatListModule,
    MatSortModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    CountryService,
    CityService,
    TourService,
    VisaService,
    PlaceService,
    BlogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
