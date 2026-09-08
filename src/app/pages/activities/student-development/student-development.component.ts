import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';

@Component({
  selector: 'app-student-development',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './student-development.component.html',
  styleUrl: './student-development.component.css'
})
export class StudentDevelopmentComponent {
  breadcrumbs = [
    { label: 'Activities' },
    { label: 'Student Development' }
  ];

  clubs = [
    {
      name: 'Robotics & AI Club',
      desc: 'Hands-on programming with Arduino, Raspberry Pi, Python algorithms, and autonomous rover construction.',
      icon: '🤖',
      activities: ['Line follower robots', 'IoT home automation', 'National robotics championships']
    },
    {
      name: 'Literary & Debating Society',
      desc: 'Polishing rhetoric, public speaking, model United Nations (MUN), and creative fiction & poetry writing.',
      icon: '📖',
      activities: ['Parliamentary debates', 'Extempore oration', 'School annual magazine editorial']
    },
    {
      name: 'Eco-Warriors & Nature Club',
      desc: 'Plantation drives, compost recycling, solar energy audits, and biodiversity preservation.',
      icon: '🌱',
      activities: ['Organic vegetable garden', 'Zero-plastic pledge', 'Water conservation campaigns']
    },
    {
      name: 'Fine Arts & Classical Music Club',
      desc: 'Carnatic vocals, keyboard, mridangam, oil painting, traditional Tanjore art, and sculpting.',
      icon: '🎨',
      activities: ['Annual art exhibition', 'Music recitals', 'State youth cultural festivals']
    },
    {
      name: 'Scouts, Guides & Junior Red Cross',
      desc: 'Discipline, outdoor survival skills, first-aid certifications, and community service camps.',
      icon: '⛺',
      activities: ['Campfire leadership camps', 'Traffic safety volunteering', 'Disaster relief training']
    },
    {
      name: 'Math & Vedic Astronomy Circle',
      desc: 'Exploring non-routine mathematical puzzles, Vedic arithmetic shortcuts, and telescopic sky observations.',
      icon: '🔭',
      activities: ['Star gazing nights', 'Olympiad training', 'Math model exhibitions']
    }
  ];
}
