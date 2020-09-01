import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VisaService {
  uri = "https://touronapi.herokuapp.com";
  // uri = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getVisa() {
    return this.http.get(`${this.uri}/visa`);
  }

  getVisaById(id) {
    return this.http.get(`${this.uri}/visa/edit/${id}`);
  }

  addVisa(value) {
    console.log(value);
    const visa = {
      countryName: value.countryName,
      imageUrl: value.imageUrl,
      salaryDocs: {
        salaryDocsRequired: value.salaryDocsRequired,
        salarySubmission: value.salarySubmission,
        salaryFinancials: value.salaryFinancials,
        salaryPhotography: value.salaryPhotography,
        salaryHoneymooners: value.salaryHoneymooners,
        salaryAppointment: value.salaryAppointment,
        salaryDuration: value.salaryDuration,
      },
      selfEmployedDocs: {
        selfEmployedDocsRequired: value.selfEmployedDocsRequired,
        selfEmployedSubmission: value.selfEmployedSubmission,
        selfEmployedFinancials: value.selfEmployedFinancials,
        selfEmployedPhotography: value.selfEmployedPhotography,
        selfEmployedHoneymooners: value.selfEmployedHoneymooners,
        selfEmployedAppointment: value.selfEmployedAppointment,
        selfEmployedDuration: value.selfEmployedDuration,
      },
    };

    return this.http.post(`${this.uri}/visa`, visa);
  }

  updateVisa(value, id) {
    console.log(value);
    const visa = {
      countryName: value.countryName,
      imageUrl: value.imageUrl,
      salaryDocsRequired: value.salaryDocsRequired,
      salarySubmission: value.salarySubmission,
      salaryFinancials: value.salaryFinancials,
      selfEmployedDocsRequired: value.selfEmployedDocsRequired,
      selfEmployedSubmission: value.selfEmployedSubmission,
      selfEmployedFinancials: value.selfEmployedFinancials,
      salaryPhotography: value.salaryPhotography,
      salaryHoneymooners: value.salaryHoneymooners,
      salaryAppointment: value.salaryAppointment,
      salaryDuration: value.salaryDuration,
      selfEmployedPhotography: value.selfEmployedPhotography,
      selfEmployedHoneymooners: value.selfEmployedHoneymooners,
      selfEmployedAppointment: value.selfEmployedAppointment,
      selfEmployedDuration: value.selfEmployedDuration,
    };
    console.log(visa);
    return this.http.post(`${this.uri}/visa/edit/${id}`, visa);
  }

  // getCityByCityName(name) {
  //   return this.http.get(`${this.uri}/city/cityname/${name}`);
  // }
  // getCityByCountryName(name) {
  //   return this.http.get(`${this.uri}/city/countryname/${name}`);
  // }

  deleteVisa(id) {
    return this.http.post(`${this.uri}/visa/delete/${id}`, id);
  }
}
