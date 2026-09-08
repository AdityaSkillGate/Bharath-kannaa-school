import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-leadership-team',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './leadership-team.component.html',
  styleUrl: './leadership-team.component.css'
})
export class LeadershipTeamComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly leaders = this.schoolData.getLeaders();

  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: 'Leadership Team' }
  ];

  coordinators = [
    { name: 'Mrs. S. Jayasri, M.Sc., B.Ed.', role: 'Senior Secondary Coordinator (Science)', experience: '18 Years' },
    { name: 'Mr. R. Karthikeyan, M.Com., M.Phil., B.Ed.', role: 'Senior Secondary Coordinator (Commerce)', experience: '15 Years' },
    { name: 'Mrs. P. Lakshmi, M.A., B.Ed.', role: 'Secondary Wing Academic Head', experience: '16 Years' },
    { name: 'Mrs. K. Vasanthi, M.Sc., B.Ed.', role: 'Middle School Coordinator', experience: '14 Years' },
    { name: 'Mrs. N. Geetha, B.Sc., D.T.Ed., NTT', role: 'Primary & Kindergarten Incharge', experience: '12 Years' },
    { name: 'Mr. M. Senthil Kumar, M.P.Ed., M.Phil.', role: 'Physical Education Director', experience: '20 Years' }
  ];
}
