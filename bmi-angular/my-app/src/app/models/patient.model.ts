export interface Patient {
    name: string,
    gender: string,
    height: number,
    weight: number,
}

export interface PatientStatus {
    status: string,
    statusColor: string,
    statusDescription: BmiStatusInfo
}

export enum BmiStatusInfo {
    Underweight = "If you are underweight, it is important to eat a variety of foods that give you the nutrition you need. You should make sure you eat enough energy to gain weight, protein to repair your body and build your muscles, and vitamins and minerals to make you healthy.",
    Normal = "Your Body Mass Index falls within a weight range that is not associated with an increased risk for weight-related diseases and health issues.",
    Overweight = "Reaching and staying at a healthy weight may be a long-term challenge if you are overweight. Maintaining a healthy weight or at least not gaining more weight if you are already overweight can help lower your chance of developing certain health problems.",
    Obese = "Obesity is a complex disease involving an excessive amount of body fat. Obesity isn't just a cosmetic concern."
}