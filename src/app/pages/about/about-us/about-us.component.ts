import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly info = this.schoolData.schoolInfo;
  protected readonly stats = this.schoolData.getStatistics();

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: 'About Us' }
  ];
}
