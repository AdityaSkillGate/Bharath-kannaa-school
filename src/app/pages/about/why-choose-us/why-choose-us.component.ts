import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);

  get features() {
    return this.schoolData.getWhyChooseUs();
  }

  get bannerBadge() {
    return this.langService.t('why.banner_badge');
  }

  get bannerTitle() {
    return this.langService.t('why.banner_title');
  }

  get bannerSub() {
    return this.langService.t('why.banner_sub');
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.why_choose') }
    ];
  }
}
