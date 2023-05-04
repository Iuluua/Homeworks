import { Component } from '@angular/core';
import { PatientService } from "../services/patients.service";
import { Patient, PatientStatus } from '../models/patient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  patients: Patient[] = [];

  patientsBmi: number[] = [];

  patientsStatus: PatientStatus[] = [];

  moreDetails: boolean[] = [];

  constructor(private patientService: PatientService) {

  }

  ngOnInit() {
    this.patients = this.patientService.getAllPatients();

    this.patientsBmi = this.patientService.getAllPatientsBmi();

    this.patientsStatus = this.patientService.getAllPatientsBmiStatus();

    for (let i = 0; i < this.patients.length; i++) {
      this.moreDetails.push(false);
    }
  }


  showMoreDetails(i: number) {

    if (this.moreDetails[i] === true) {

      this.moreDetails[i] = false;

    } else {

      this.moreDetails[i] = true;
      
    }
  }

}
