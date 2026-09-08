import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.css'
})
export class VisionMissionComponent {
  breadcrumbs = [
    { label: 'About', url: '/about/about-us' },
    { label: 'Vision & Mission' }
  ];

  values = [
    {
      title: 'Integrity & Ethics',
      desc: 'Living with honesty, moral steadfastness, and transparency in all actions and relations.',
      icon: 'shield'
    },
    {
      title: 'Scholastic Excellence',
      desc: 'Striving for continuous intellectual curiosity, mastery of knowledge, and academic brilliance.',
      icon: 'academic'
    },
    {
      title: 'Empathy & Inclusivity',
      desc: 'Respecting diversity, practicing kindness, and actively serving the wider community.',
      icon: 'heart'
    },
    {
      title: 'Resilience & Courage',
      desc: 'Overcoming challenges with an undaunted spirit, disciplined grit, and optimistic resolve.',
      icon: 'spark'
    }
  ];
}
