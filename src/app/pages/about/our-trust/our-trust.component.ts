import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';

@Component({
  selector: 'app-our-trust',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './our-trust.component.html',
  styleUrl: './our-trust.component.css'
})
export class OurTrustComponent {
  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: 'Our Trust' }
  ];

  trustees = [
    { name: 'Dr. R. Kanna, M.E., Ph.D.', role: 'Managing Trustee & Chairman', expertise: 'Industrialist & Academic Philanthropist' },
    { name: 'Smt. B. Meenakshi, M.A., B.Ed.', role: 'Trustee & Correspondent', expertise: 'Educational Administration' },
    { name: 'Thiru. K. Rajagopal, B.E.', role: 'Trustee - Infrastructure', expertise: 'Civil Engineering & Campus Planning' },
    { name: 'Dr. V. Natarajan, M.S., F.R.C.S.', role: 'Trustee - Medical Care', expertise: 'Chief Surgeon & Healthcare Consultant' },
    { name: 'Adv. S. Ramanathan, B.A., B.L.', role: 'Trustee - Legal & Governance', expertise: 'High Court Senior Counsel' }
  ];
}
