import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-secretary-message',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './secretary-message.component.html',
  styleUrl: './secretary-message.component.css'
})
export class SecretaryMessageComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly leader = this.schoolData.getLeaders()[1];

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: "Secretary's Message" }
  ];
}
