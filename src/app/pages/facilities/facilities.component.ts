import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../core/components/page-header/page-header.component';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);

  get facilities() {
    return this.schoolData.getFacilities(this.langService.currentLang());
  }

  get bannerBadge() {
    return this.langService.t('fac_page.banner_badge');
  }

  get bannerTitle() {
    return this.langService.t('fac_page.banner_title');
  }

  get bannerSub() {
    return this.langService.t('fac_page.banner_sub');
  }

  get pageBadge() {
    return this.langService.t('fac_page.badge');
  }

  get pageTitle() {
    return this.langService.t('fac_page.title');
  }

  get pageSub() {
    return this.langService.t('fac_page.sub');
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.facilities') }
    ];
  }
}
