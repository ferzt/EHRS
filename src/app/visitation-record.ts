export class VisitationRecord {
    constructor(
        public visitationRecordID: number,
        public patientID: string,
        public visitDate: Date,
        public status: string,
        public nurseID: number,
        public doctorID: number,
        public vitalsID: number,
        public diagnosisID: number,
        public visitReason: string,
        public symptoms: string,
        public visitSummary: string,
        public createdBy: number
    ) {}
}

