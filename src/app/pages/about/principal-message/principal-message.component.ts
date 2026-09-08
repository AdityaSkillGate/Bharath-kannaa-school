import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-principal-message',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './principal-message.component.html',
  styleUrl: './principal-message.component.css'
})
export class PrincipalMessageComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly leader = this.schoolData.getLeaders()[2];

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: "Principal's Desk" }
  ];
}
