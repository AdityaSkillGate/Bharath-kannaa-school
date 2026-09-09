import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-leadership-team',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './leadership-team.component.html',
  styleUrl: './leadership-team.component.css'
})
export class LeadershipTeamComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);

  get leaders() {
    return this.schoolData.getLeaders(this.langService.currentLang());
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.leadership') }
    ];
  }

  get coordinators() {
    return this.langService.isTamil()
      ? [
          { name: 'திருமதி எஸ். ஜெயஸ்ரீ, M.Sc., B.Ed.', role: 'மேல்நிலைப் பள்ளி ஒருங்கிணைப்பாளர் (அறிவியல்)', experience: '18 ஆண்டுகள்' },
          { name: 'திரு. ஆர். கார்த்திகேயன், M.Com., M.Phil., B.Ed.', role: 'மேல்நிலைப் பள்ளி ஒருங்கிணைப்பாளர் (வணிகவியல்)', experience: '15 ஆண்டுகள்' },
          { name: 'திருமதி பி. லட்சுமி, M.A., B.Ed.', role: 'உயர்நிலைப் பள்ளி கல்வித் தலைவர்', experience: '16 ஆண்டுகள்' },
          { name: 'திருமதி கே. வாசந்தி, M.Sc., B.Ed.', role: 'நடுநிலைப் பள்ளி ஒருங்கிணைப்பாளர்', experience: '14 ஆண்டுகள்' },
          { name: 'திருமதி என். கீதா, B.Sc., D.T.Ed., NTT', role: 'தொடக்கப்பள்ளி & மழலையர் பிரிவு பொறுப்பாளர்', experience: '12 ஆண்டுகள்' },
          { name: 'திரு. எம். செந்தில்குமார், M.P.Ed., M.Phil.', role: 'உடற்கல்வி இயக்குநர்', experience: '20 ஆண்டுகள்' }
        ]
      : [
          { name: 'Mrs. S. Jayasri, M.Sc., B.Ed.', role: 'Senior Secondary Coordinator (Science)', experience: '18 Years' },
          { name: 'Mr. R. Karthikeyan, M.Com., M.Phil., B.Ed.', role: 'Senior Secondary Coordinator (Commerce)', experience: '15 Years' },
          { name: 'Mrs. P. Lakshmi, M.A., B.Ed.', role: 'Secondary Wing Academic Head', experience: '16 Years' },
          { name: 'Mrs. K. Vasanthi, M.Sc., B.Ed.', role: 'Middle School Coordinator', experience: '14 Years' },
          { name: 'Mrs. N. Geetha, B.Sc., D.T.Ed., NTT', role: 'Primary & Kindergarten Incharge', experience: '12 Years' },
          { name: 'Mr. M. Senthil Kumar, M.P.Ed., M.Phil.', role: 'Physical Education Director', experience: '20 Years' }
        ];
  }
}
