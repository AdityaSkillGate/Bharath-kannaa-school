import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-parents-corner',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './parents-corner.component.html',
  styleUrl: './parents-corner.component.css'
})
export class ParentsCornerComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  readonly info = this.schoolData.schoolInfo;

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.admissions'), url: '/admissions/admissions' },
      { label: this.langService.t('adm.parents_corner') }
    ];
  }

  get timings() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          { wing: 'மழலையர் பிரிவு (Pre-KG, LKG, UKG)', days: 'திங்கள் முதல் வெள்ளி வரை', hours: 'காலை 8:45 – மதியம் 12:45' },
          { wing: 'தொடக்கப்பள்ளிப் பிரிவு (1 முதல் 5-ஆம் வகுப்பு)', days: 'திங்கள் முதல் வெள்ளி வரை', hours: 'காலை 8:30 – பிற்பகல் 3:30' },
          { wing: 'நடுநிலை & உயர்நிலைப் பிரிவு (6 முதல் 10-ஆம் வகுப்பு)', days: 'திங்கள் முதல் சனி வரை', hours: 'காலை 8:30 – மாலை 4:15' },
          { wing: 'மேல்நிலைப் பிரிவு (11 & 12-ஆம் வகுப்பு)', days: 'திங்கள் முதல் சனி வரை', hours: 'காலை 8:15 – மாலை 4:45 (சிறப்புப் பயிற்சி)' }
        ]
      : [
          { wing: 'Kindergarten (Pre-KG, LKG, UKG)', days: 'Monday to Friday', hours: '8:45 AM – 12:45 PM' },
          { wing: 'Primary Wing (Grades 1 to 5)', days: 'Monday to Friday', hours: '8:30 AM – 3:30 PM' },
          { wing: 'Middle & Secondary (Grades 6 to 10)', days: 'Monday to Saturday', hours: '8:30 AM – 4:15 PM' },
          { wing: 'Senior Secondary (Grades 11 & 12)', days: 'Monday to Saturday', hours: '8:15 AM – 4:45 PM (Spl. Coaching)' }
        ];
  }

  get uniformGuidelines() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          { day: 'திங்கள், செவ்வாய், வியாழன், வெள்ளி', dress: 'வழக்கமான பள்ளிச் சீருடை, பளபளப்பான கருப்பு காலணி, நேவி ப்ளூ காலுறை மற்றும் பள்ளி டை/பெல்ட்.' },
          { day: 'புதன் & சனிக்கிழமை', dress: 'ஒதுக்கப்பட்ட இல்ல நிற டி-சர்ட் (மரகதம்/மாணிக்கம்/நீலம்/புஷ்பராகம்), வெள்ளை டிராக் பேன்ட் மற்றும் வெள்ளை கேன்வாஸ் காலணி.' },
          { day: 'குளிர்காலம்', dress: 'பள்ளி இலச்சினை பொறிக்கப்பட்ட அதிகாரப்பூர்வ நேவி ப்ளூ ஸ்வெட்டர் / பிளேசர்.' }
        ]
      : [
          { day: 'Monday, Tuesday, Thursday, Friday', dress: 'Regular School Uniform with polished black shoes, navy socks, and school tie/belt.' },
          { day: 'Wednesday & Saturday', dress: 'House T-Shirt matching assigned House Color (Emerald/Ruby/Sapphire/Topaz) with white track pants and white canvas shoes.' },
          { day: 'Winter Season', dress: 'Official navy blue school blazer / sweater with embroidered school crest.' }
        ];
  }
}
