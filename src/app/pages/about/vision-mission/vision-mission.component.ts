import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.css'
})
export class VisionMissionComponent {
  protected readonly langService = inject(LanguageService);

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.about'), url: '/about/about-us' },
      { label: this.langService.t('about.vision_mission') }
    ];
  }

  get values() {
    return [
      {
        title: this.langService.t('vm.v1_title'),
        desc: this.langService.t('vm.v1_desc'),
        icon: 'shield'
      },
      {
        title: this.langService.t('vm.v2_title'),
        desc: this.langService.t('vm.v2_desc'),
        icon: 'academic'
      },
      {
        title: this.langService.t('vm.v3_title'),
        desc: this.langService.t('vm.v3_desc'),
        icon: 'heart'
      },
      {
        title: this.langService.t('vm.v4_title'),
        desc: this.langService.t('vm.v4_desc'),
        icon: 'spark'
      }
    ];
  }
}
