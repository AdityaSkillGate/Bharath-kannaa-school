import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  protected readonly info = this.schoolData.schoolInfo;

  get stats() {
    return this.schoolData.getStatistics();
  }

  get bannerBadge() {
    return this.langService.t('about_us.banner_badge');
  }

  get bannerTitle() {
    return this.langService.t('about_us.banner_title');
  }

  get bannerSub() {
    return this.langService.t('about_us.banner_sub');
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.overview') }
    ];
  }
}
