import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-chairman-message',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './chairman-message.component.html',
  styleUrl: './chairman-message.component.css'
})
export class ChairmanMessageComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly leader = this.schoolData.getLeaders()[0];

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: "Chairman's Message" }
  ];
}
