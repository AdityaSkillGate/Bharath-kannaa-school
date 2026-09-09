import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-principal-message',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './principal-message.component.html',
  styleUrl: './principal-message.component.css'
})
export class PrincipalMessageComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);

  get leader() {
    return this.schoolData.getLeaders(this.langService.currentLang())[2];
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.principal') }
    ];
  }
}
