import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);

  get wings() {
    return this.schoolData.getAcademicWings(this.langService.currentLang());
  }

  get bannerBadge() {
    return this.langService.t('acad.banner_badge');
  }

  get bannerTitle() {
    return this.langService.t('acad.banner_title');
  }

  get bannerSub() {
    return this.langService.t('acad.banner_sub');
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.academics') }
    ];
  }

  get streamsSeniorSec() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          {
            group: 'பிரிவு 1: உயிரியல் & கணிதப் பிரிவு (Bio-Maths)',
            subjects: ['இயற்பியல்', 'வேதியியல்', 'உயிரியல்', 'கணிதம்', 'ஆங்கிலம்', 'தமிழ்/பிரெஞ்சு'],
            careers: ['மருத்துவம் (MBBS/BDS)', 'பயோடெக்னாலஜி', 'உயிரி மருத்துவ பொறியியல்', 'மருத்துவ ஆராய்ச்சி']
          },
          {
            group: 'பிரிவு 2: கணினி அறிவியல் & பொறியியல் பிரிவு (CS-Maths)',
            subjects: ['இயற்பியல்', 'வேதியியல்', 'கணிதம்', 'கணினி அறிவியல் (Python/SQL)', 'ஆங்கிலம்', 'தமிழ்'],
            careers: ['மென்பொருள் பொறியியல்', 'AI & தரவு அறிவியல்', 'ரோபோடிக்ஸ்', 'கட்டிடக்கலை (B.Arch)']
          },
          {
            group: 'பிரிவு 3: தூய அறிவியல் பிரிவு (Pure Science)',
            subjects: ['இயற்பியல்', 'வேதியியல்', 'தாவரவியல்', 'விலங்கியல்', 'ஆங்கிலம்', 'தமிழ்'],
            careers: ['அறிவியல் ஆராய்ச்சி', 'வேளாண் அறிவியல்', 'மருந்தியல் (B.Pharm)', 'கால்நடை மருத்துவம்']
          },
          {
            group: 'பிரிவு 4: வணிகவியல் & மேலாண்மை பிரிவு (Commerce)',
            subjects: ['கணக்குப்பதிவியல்', 'வணிகவியல்', 'பொருளாதாரம்', 'வணிகக் கணிதம் / கணினிப் பயன்பாடு', 'ஆங்கிலம்', 'தமிழ்'],
            careers: ['பட்டயக் கணக்காளர் (CA)', 'நிறுவனச் செயலாளர் (CS)', 'வணிக மேலாண்மை (BBA)', 'வங்கி & நிதி மேலாண்மை']
          }
        ]
      : [
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
}
