import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { NotificationService } from '../../shared/services/notification.service';
import { DisclosureItem } from '../../shared/interfaces/school.interfaces';

@Component({
  selector: 'app-mandatory-public-disclosure',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './mandatory-public-disclosure.component.html',
  styleUrl: './mandatory-public-disclosure.component.css'
})
export class MandatoryPublicDisclosureComponent {
  protected readonly schoolData = inject(SchoolDataService);
  private readonly toast = inject(NotificationService);

  readonly info = this.schoolData.schoolInfo;
  readonly documents = this.schoolData.getDisclosures();

  breadcrumbs = [
    { label: 'Mandatory Public Disclosure' }
  ];

  boardResults10 = [
    { year: '2023 - 2024', registered: 148, passed: 148, passPercentage: '100%', centums: 18, schoolTopper: '494/500' },
    { year: '2022 - 2023', registered: 142, passed: 142, passPercentage: '100%', centums: 15, schoolTopper: '492/500' },
    { year: '2021 - 2022', registered: 136, passed: 136, passPercentage: '100%', centums: 12, schoolTopper: '491/500' }
  ];

  boardResults12 = [
    { year: '2023 - 2024', registered: 132, passed: 132, passPercentage: '100%', centums: 24, schoolTopper: '592/600' },
    { year: '2022 - 2023', registered: 128, passed: 128, passPercentage: '100%', centums: 21, schoolTopper: '589/600' },
    { year: '2021 - 2022', registered: 120, passed: 120, passPercentage: '100%', centums: 19, schoolTopper: '587/600' }
  ];

  downloadDoc(doc: DisclosureItem) {
    this.toast.show(`Downloading certified public document: ${doc.title} (${doc.fileSize})`, 'info');
  }
}
