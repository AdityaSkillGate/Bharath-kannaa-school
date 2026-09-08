import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../shared/services/school-data.service';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent {
  protected readonly schoolData = inject(SchoolDataService);
  readonly facilities = this.schoolData.getFacilities();

  breadcrumbs = [
    { label: 'Facilities' }
  ];
}
