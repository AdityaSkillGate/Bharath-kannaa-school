import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../shared/services/school-data.service';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  readonly wings = this.schoolData.getAcademicWings();

  breadcrumbs = [
    { label: 'Academics' }
  ];

  streamsSeniorSec = [
    {
      group: 'Group 1: Bio-Mathematics Stream',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Tamil/Hindi/French'],
      careers: ['Medicine (MBBS/BDS)', 'Biotechnology', 'Allied Health', 'Biomedical Engineering']
    },
    {
      group: 'Group 2: Computer Science & Engineering Stream',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science (Python/SQL)', 'English', 'Tamil/French'],
      careers: ['Software Engineering', 'Data Science & AI', 'Architecture', 'Robotics & Mechatronics']
    },
    {
      group: 'Group 3: Pure Science Stream',
      subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology', 'English', 'Language'],
      careers: ['Pure Sciences Research', 'Agricultural Sciences', 'Pharmacy (B.Pharm)', 'Veterinary Medicine']
    },
    {
      group: 'Group 4: Commerce & Management Stream',
      subjects: ['Accountancy', 'Commerce', 'Economics', 'Business Mathematics / Computer Applications', 'English', 'Language'],
      careers: ['Chartered Accountancy (CA)', 'Company Secretary (CS)', 'Business Administration (BBA)', 'Fintech & Economics']
    }
  ];
}
