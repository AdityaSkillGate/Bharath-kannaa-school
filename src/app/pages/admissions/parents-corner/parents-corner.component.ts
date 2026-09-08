import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-parents-corner',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './parents-corner.component.html',
  styleUrl: './parents-corner.component.css'
})
export class ParentsCornerComponent {
  protected readonly schoolData = inject(SchoolDataService);
  readonly info = this.schoolData.schoolInfo;

  breadcrumbs = [
    { label: 'Admissions', url: '/admissions/admissions' },
    { label: "Parents' Corner" }
  ];

  timings = [
    { wing: 'Kindergarten (Pre-KG, LKG, UKG)', days: 'Monday to Friday', hours: '8:45 AM – 12:45 PM' },
    { wing: 'Primary Wing (Grades 1 to 5)', days: 'Monday to Friday', hours: '8:30 AM – 3:30 PM' },
    { wing: 'Middle & Secondary (Grades 6 to 10)', days: 'Monday to Saturday', hours: '8:30 AM – 4:15 PM' },
    { wing: 'Senior Secondary (Grades 11 & 12)', days: 'Monday to Saturday', hours: '8:15 AM – 4:45 PM (Spl. Coaching)' }
  ];

  uniformGuidelines = [
    { day: 'Monday, Tuesday, Thursday, Friday', dress: 'Regular School Uniform with polished black shoes, navy socks, and school tie/belt.' },
    { day: 'Wednesday & Saturday', dress: 'House T-Shirt matching assigned House Color (Emerald/Ruby/Sapphire/Topaz) with white track pants and white canvas shoes.' },
    { day: 'Winter Season', dress: 'Official navy blue school blazer / sweater with embroidered school crest.' }
  ];
}
