export interface Visit{
    patientid: string;
    visit_date?: string;
    status: string;
    nurse_id?: string;
    doctor_id?: string;
    visit_reason: string;
    symptoms?: string;
    visit_summary?: string;
    created_by?: string;
}
