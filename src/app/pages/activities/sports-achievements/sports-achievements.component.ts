import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';

@Component({
  selector: 'app-sports-achievements',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './sports-achievements.component.html',
  styleUrl: './sports-achievements.component.css'
})
export class SportsAchievementsComponent {
  breadcrumbs = [
    { label: 'Activities' },
    { label: 'Sports & Achievements' }
  ];

  achievements = [
    {
      year: '2024 - 2025',
      event: 'Tamil Nadu State Matriculation Athletic Championship',
      badge: 'Gold & Silver',
      detail: 'Gold Medal in 4x100m Boys Relay, Silver in 400m Senior Individual Sprint.',
      icon: '🥇'
    },
    {
      year: '2024 - 2025',
      event: 'District Inter-School Football Trophy',
      badge: 'Champions',
      detail: 'Our Under-17 Boys Football team defeated 24 competing district schools to lift the Rolling Cup.',
      icon: '🏆'
    },
    {
      year: '2023 - 2024',
      event: 'South Zone Invitational Chess Tournament',
      badge: '1st Place',
      detail: 'Master R. Sriram of Class 9 won the championship title with an undefeated 7.0/7 score.',
      icon: '♟️'
    },
    {
      year: '2023 - 2024',
      event: 'District Inter-School Cricket League',
      badge: 'Runners Up',
      detail: 'U-14 Cricket team reached the finals with remarkable bowling figures (Best: 5/14 in semifinals).',
      icon: '🏏'
    }
  ];

  disciplines = [
    { name: 'Track & Field Athletics', coach: 'NIS Certified Coach', facility: '200m Clay Track' },
    { name: 'Cricket Coaching Nets', coach: 'Former Ranji Player Guidance', facility: 'Turf & Cement Practice Wickets' },
    { name: 'Football (Soccer)', coach: 'AIFF Licensed Coach', facility: 'Natural Grass Football Arena' },
    { name: 'Badminton & Table Tennis', coach: 'State Level Coach', facility: 'Indoor Wooden Court' },
    { name: 'Basketball & Volleyball', coach: 'Specialized Physical Directors', facility: 'Hard Court with floodlights' },
    { name: 'Yoga, Karate & Silambam', coach: 'Black Belt & Traditional Masters', facility: 'Indoor Multipurpose Hall' }
  ];
}
