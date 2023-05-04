import { Injectable } from "@angular/core";
import { Patient, PatientStatus, BmiStatusInfo } from "../models/patient.model";

@Injectable()
export class PatientService {

    public getAllPatients(): Patient[] {
        return [
            {
                name: "Andrei",
                gender: "M",
                height: 1.75,
                weight: 120
            },
            {
                name: "Maria",
                gender: "F",
                height: 1.6,
                weight: 60
            },
            {
                name: "Sorin",
                gender: "M",
                height: 1.78,
                weight: 150
            },
            {
                name: "Ionela",
                gender: "F",
                height: 1.7,
                weight: 40
            },
            {
                name: "Ion",
                gender: "M",
                height: 1.65,
                weight: 70
            },
            {
                name: "Ioana",
                gender: "F",
                height: 1.60,
                weight: 55
            }
        ]
    }

    public getAllPatientsBmi(): number[] {
        const patientsList = this.getAllPatients();

        let bmiList: number[] = [];

        for (let i = 0; i < patientsList.length; i++) {
            const currentPatientBmi = patientsList[i].weight / (patientsList[i].height * patientsList[i].height);

            bmiList.push(Number(currentPatientBmi.toFixed(2)));
        }

        return bmiList;
    }

    public getAllPatientsBmiStatus(): PatientStatus[] {
        const patientsBmiList = this.getAllPatientsBmi();

        let bmiStatusList: PatientStatus[] = [];

        for (let i = 0; i < patientsBmiList.length; i++) {
            if (patientsBmiList[i] < 18.5) {

                bmiStatusList.push({
                    status: "Underweight",
                    statusColor: "rgb(0, 136, 255)",
                    statusDescription: BmiStatusInfo.Underweight
                });

            } else if (patientsBmiList[i] < 25) {

                bmiStatusList.push({
                    status: "Normal Weight",
                    statusColor: "rgb(15, 194, 15)",
                    statusDescription: BmiStatusInfo.Normal
                });

            } else if (patientsBmiList[i] < 30) {

                bmiStatusList.push({
                    status: "Overweight",
                    statusColor: "rgb(248, 173, 33)",
                    statusDescription: BmiStatusInfo.Overweight
                });

            } else {
                
                bmiStatusList.push({
                    status: "Obese",
                    statusColor: "rgb(191, 34, 34)",
                    statusDescription: BmiStatusInfo.Obese
                });
            }
        }

        return bmiStatusList;
    }
}