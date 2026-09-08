import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly features = this.schoolData.getWhyChooseUs();

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: 'Why Choose Us' }
  ];
}
