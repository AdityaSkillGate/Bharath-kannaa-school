import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [FormsModule, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  private readonly toast = inject(NotificationService);

  readonly info = this.schoolData.schoolInfo;

  breadcrumbs = [
    { label: 'Admissions' },
    { label: 'Admission Process' }
  ];

  enquiry = {
    parentName: '',
    studentName: '',
    gradeApplying: '',
    contactPhone: '',
    email: '',
    residenceCity: '',
    academicYear: '2025-2026',
    notes: ''
  };

  steps = [
    {
      step: '01',
      title: 'Online Enquiry & Application Form',
      desc: 'Submit the preliminary admission enquiry form online or collect the printed application kit from the school administration desk.'
    },
    {
      step: '02',
      title: 'Document Verification & Interaction',
      desc: 'Submit birth certificate, previous school transfer certificate (TC), and academic marksheets for verification along with an informal student-parent interaction.'
    },
    {
      step: '03',
      title: 'Diagnostic Readiness Assessment',
      desc: 'For Grades 1 and above, a basic conceptual assessment in English and Mathematics evaluates grade placement and learning support needs.'
    },
    {
      step: '04',
      title: 'Fee Payment & Enrollment Confirmation',
      desc: 'Upon selection, complete admission formalities, uniform measurement, bus route allocation, and collect the student welcome docket.'
    }
  ];

  eligibilityList = [
    { grade: 'Pre-KG', minAge: '2 Years 6 Months as of 31st July' },
    { grade: 'LKG', minAge: '3 Years 6 Months as of 31st July' },
    { grade: 'UKG', minAge: '4 Years 6 Months as of 31st July' },
    { grade: 'Grade 1', minAge: '5 Years 6 Months as of 31st July' },
    { grade: 'Grades 2 to 9', minAge: 'Passed qualifying examination from recognized school with Transfer Certificate' },
    { grade: 'Grade 11 (Streams)', minAge: 'Passed Grade 10 Board Examinations with requisite stream cutoff marks' }
  ];

  requiredDocuments = [
    'Original Birth Certificate along with 2 attested photocopies',
    'Transfer Certificate (TC) counter-signed by competent educational authority',
    'Previous standard final marksheet / Progress Report card',
    'Student Passport size photographs (5 copies) & Parent photographs (2 each)',
    'Community Certificate (photocopy) if applicable',
    'Aadhar Card photocopy of student and parents',
    'Blood group & Medical fitness certificate issued by registered doctor'
  ];

  submitEnquiry(form: any) {
    if (form.valid) {
      this.toast.show(
        `Admission enquiry for ${this.enquiry.studentName} for Grade ${this.enquiry.gradeApplying} submitted successfully! Our admissions coordinator will call you within 24 hours.`,
        'success'
      );
      form.resetForm({ academicYear: '2025-2026' });
    } else {
      this.toast.show('Please fill in all mandatory fields with valid information.', 'error');
    }
  }
}
