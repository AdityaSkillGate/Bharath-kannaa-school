import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-our-trust',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './our-trust.component.html',
  styleUrl: './our-trust.component.css'
})
export class OurTrustComponent {
  protected readonly langService = inject(LanguageService);

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.trust') }
    ];
  }

  get trustees() {
    return this.langService.isTamil()
      ? [
          { name: 'டாக்டர் ஆர். கண்ணா, M.E., Ph.D.', role: 'நிர்வாக அறங்காவலர் & தலைவர்', expertise: 'தொழிலதிபர் & கல்வி புரவலர்' },
          { name: 'திருமதி பி. மீனாட்சி, M.A., B.Ed.', role: 'அறங்காவலர் & தாளாளர்', expertise: 'கல்வி நிர்வாகம்' },
          { name: 'திரு. கே. ராஜகோபால், B.E.', role: 'அறங்காவலர் - உள்கட்டமைப்பு', expertise: 'கட்டுமான பொறியியல் & வளாகத் திட்டமிடல்' },
          { name: 'டாக்டர் வி. நடராஜன், M.S., F.R.C.S.', role: 'அறங்காவலர் - மருத்துவ நலம்', expertise: 'தலைமை அறுவை சிகிச்சை நிபுணர்' },
          { name: 'வழக்கறிஞர் எஸ். ராமநாதன், B.A., B.L.', role: 'அறங்காவலர் - சட்டம் & நிர்வாகம்', expertise: 'உயர் நீதிமன்ற மூத்த வழக்கறிஞர்' }
        ]
      : [
          { name: 'Dr. R. Kanna, M.E., Ph.D.', role: 'Managing Trustee & Chairman', expertise: 'Industrialist & Academic Philanthropist' },
          { name: 'Smt. B. Meenakshi, M.A., B.Ed.', role: 'Trustee & Correspondent', expertise: 'Educational Administration' },
          { name: 'Thiru. K. Rajagopal, B.E.', role: 'Trustee - Infrastructure', expertise: 'Civil Engineering & Campus Planning' },
          { name: 'Dr. V. Natarajan, M.S., F.R.C.S.', role: 'Trustee - Medical Care', expertise: 'Chief Surgeon & Healthcare Consultant' },
          { name: 'Adv. S. Ramanathan, B.A., B.L.', role: 'Trustee - Legal & Governance', expertise: 'High Court Senior Counsel' }
        ];
  }
}
