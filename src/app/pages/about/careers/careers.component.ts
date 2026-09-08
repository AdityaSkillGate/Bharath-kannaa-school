import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { CareerOpening } from '../../../shared/interfaces/school.interfaces';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [FormsModule, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  protected readonly schoolData = inject(SchoolDataService);
  private readonly toast = inject(NotificationService);

  readonly openings = this.schoolData.getCareerOpenings();
  readonly info = this.schoolData.schoolInfo;

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: 'Careers' }
  ];

  selectedOpening: CareerOpening | null = null;
  applicationModalOpen = false;

  applicant = {
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experienceYears: '',
    coverNote: ''
  };

  openApplication(opening: CareerOpening) {
    this.selectedOpening = opening;
    this.applicationModalOpen = true;
  }

  closeApplication() {
    this.applicationModalOpen = false;
    this.selectedOpening = null;
  }

  submitApplication(form: any) {
    if (form.valid) {
      this.toast.show(
        `Application for ${this.selectedOpening?.role} submitted successfully! Our HR team will contact you.`,
        'success'
      );
      this.closeApplication();
      form.resetForm();
    } else {
      this.toast.show('Please fill in all mandatory fields correctly.', 'error');
    }
  }
}
