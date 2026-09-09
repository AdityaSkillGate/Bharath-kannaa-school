import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [FormsModule, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  private readonly toast = inject(NotificationService);

  readonly info = this.schoolData.schoolInfo;

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.admissions') },
      { label: this.langService.t('adm.process') }
    ];
  }

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

  get steps() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          {
            step: '01',
            title: 'இணையவழி சேர்க்கை விண்ணப்பம்',
            desc: 'இணையதளத்தில் சேர்க்கை படிவத்தை பூர்த்தி செய்யவும் அல்லது பள்ளி நிர்வாக அலுவலகத்தில் விண்ணப்பப் படிவத்தைப் பெற்றுக் கொள்ளவும்.'
          },
          {
            step: '02',
            title: 'சான்றிதழ் சரிபார்ப்பு & கலந்தாய்வு',
            desc: 'பிறப்புச் சான்றிதழ், முந்தைய பள்ளியின் மாற்றுச் சான்றிதழ் (TC) மற்றும் மதிப்பெண் சான்றிதழ்களை சரிபார்த்தல் மற்றும் நட்புரீதியான பெற்றோர்-மாணவர் கலந்தாய்வு.'
          },
          {
            step: '03',
            title: 'கற்றல் திறன் மதிப்பீடு',
            desc: '1-ஆம் வகுப்பு முதல் ஆங்கிலம் மற்றும் கணிதப் பாடங்களில் அடிப்படை கற்றல் திறனை அறிய எளிய மதிப்பீட்டுத் தேர்வு.'
          },
          {
            step: '04',
            title: 'கட்டணம் செலுத்துதல் & சேர்க்கை உறுதி',
            desc: 'தேர்வானதும் சேர்க்கை நடைமுறைகளை முடித்து, பள்ளி சீருடை அளவு, பள்ளிப் பேருந்து வழித்தடம் மற்றும் வரவேற்புக் கையேட்டைப் பெறுதல்.'
          }
        ]
      : [
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
  }

  get eligibilityList() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          { grade: 'Pre-KG (மழலையர்)', minAge: 'ஜூலை 31-ஆம் தேதியின்படி 2 ஆண்டுகள் 6 மாதங்கள்' },
          { grade: 'LKG (இளம் மழலையர்)', minAge: 'ஜூலை 31-ஆம் தேதியின்படி 3 ஆண்டுகள் 6 மாதங்கள்' },
          { grade: 'UKG (முதுநிலை மழலையர்)', minAge: 'ஜூலை 31-ஆம் தேதியின்படி 4 ஆண்டுகள் 6 மாதங்கள்' },
          { grade: '1-ஆம் வகுப்பு', minAge: 'ஜூலை 31-ஆம் தேதியின்படி 5 ஆண்டுகள் 6 மாதங்கள்' },
          { grade: '2 முதல் 9-ஆம் வகுப்பு வரை', minAge: 'அங்கீகரிக்கப்பட்ட பள்ளியில் தேர்ச்சி பெற்றதற்கான மாற்றுச் சான்றிதழ் (TC)' },
          { grade: '11-ஆம் வகுப்பு (பாடப்பிரிவுகள்)', minAge: '10-ஆம் வகுப்பு அரசு பொதுத்தேர்வில் உரிய தகுதி மதிப்பெண்களுடன் தேர்ச்சி' }
        ]
      : [
          { grade: 'Pre-KG', minAge: '2 Years 6 Months as of 31st July' },
          { grade: 'LKG', minAge: '3 Years 6 Months as of 31st July' },
          { grade: 'UKG', minAge: '4 Years 6 Months as of 31st July' },
          { grade: 'Grade 1', minAge: '5 Years 6 Months as of 31st July' },
          { grade: 'Grades 2 to 9', minAge: 'Passed qualifying examination from recognized school with Transfer Certificate' },
          { grade: 'Grade 11 (Streams)', minAge: 'Passed Grade 10 Board Examinations with requisite stream cutoff marks' }
        ];
  }

  get requiredDocuments() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          'அசல் பிறப்புச் சான்றிதழ் மற்றும் 2 சான்றொப்ப நகல்கள்',
          'கல்வி அதிகாரியால் மேலொப்பமிடப்பட்ட மாற்றுச் சான்றிதழ் (TC)',
          'முந்தைய வகுப்பின் இறுதி மதிப்பெண் அட்டை / முன்னேற்ற அறிக்கை',
          'மாணவரின் பாஸ்போர்ட் அளவு புகைப்படங்கள் (5) & பெற்றோரின் புகைப்படங்கள் (தலா 2)',
          'சாதிச் சான்றிதழ் நகல் (பொருந்தினால்)',
          'மாணவர் மற்றும் பெற்றோரின் ஆதார் அட்டை நகல்கள்',
          'மருத்துவரால் வழங்கப்பட்ட இரத்த வகை & மருத்துவத் தகுதிச் சான்றிதழ்'
        ]
      : [
          'Original Birth Certificate along with 2 attested photocopies',
          'Transfer Certificate (TC) counter-signed by competent educational authority',
          'Previous standard final marksheet / Progress Report card',
          'Student Passport size photographs (5 copies) & Parent photographs (2 each)',
          'Community Certificate (photocopy) if applicable',
          'Aadhar Card photocopy of student and parents',
          'Blood group & Medical fitness certificate issued by registered doctor'
        ];
  }

  submitEnquiry(form: any) {
    if (form.valid) {
      this.toast.show(
        this.langService.t('toast.adm_success', {
          studentName: this.enquiry.studentName,
          grade: this.enquiry.gradeApplying
        }),
        'success'
      );
      form.resetForm({ academicYear: '2025-2026' });
    } else {
      this.toast.show(this.langService.t('toast.adm_error'), 'error');
    }
  }
}
