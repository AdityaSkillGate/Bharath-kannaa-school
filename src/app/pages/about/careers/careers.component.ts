import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { LanguageService } from '../../../shared/services/language.service';
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
  protected readonly langService = inject(LanguageService);
  private readonly toast = inject(NotificationService);

  get openings() {
    return this.schoolData.getCareerOpenings(this.langService.currentLang());
  }

  readonly info = this.schoolData.schoolInfo;

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.careers') }
    ];
  }

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
        this.langService.t('toast.career_success', { role: this.selectedOpening?.role || '' }),
        'success'
      );
      this.closeApplication();
      form.resetForm();
    } else {
      this.toast.show(this.langService.t('toast.career_error'), 'error');
    }
  }
}
