import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';

@Component({
  selector: 'app-rules-regulations',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './rules-regulations.component.html',
  styleUrl: './rules-regulations.component.css'
})
export class RulesRegulationsComponent {
  breadcrumbs = [
    { label: 'Admissions', url: '/admissions/admissions' },
    { label: 'Rules & Regulations' }
  ];

  ruleCategories = [
    {
      title: 'Attendance & Leave Policy',
      icon: '📅',
      points: [
        'A minimum of 85% attendance across terms is mandatory for eligibility to sit for annual & board exams.',
        'Leave applications must be submitted in writing signed by parent/guardian in the official student handbook.',
        'Medical leaves extending beyond 3 consecutive days necessitate a fitness certificate from a qualified medical doctor.',
        'Unexcused absence without prior intimation for more than 10 consecutive days may result in formal name strike-off.'
      ]
    },
    {
      title: 'Code of Campus Conduct & Ethics',
      icon: '⚖️',
      points: [
        'Respectful, courteous speech and conduct toward teachers, peers, and non-teaching staff is non-negotiable.',
        'Strict zero-tolerance policy against bullying, ragging, teasing, foul language, or any form of harassment.',
        'Care of school property: Defacing furniture, laboratory glassware, or campus walls invites disciplinary action and replacement costs.',
        'Personal electronic gadgets, mobile phones, and smart watches are strictly banned on school premises during academic hours.'
      ]
    },
    {
      title: 'Examination & Scholastic Discipline',
      icon: '✍️',
      points: [
        'Students must report 15 minutes before scheduled exam bell with prescribed hall tickets and standard stationery.',
        'Any malpractice or possession of unauthorized papers in the exam hall results in immediate paper cancellation.',
        'Re-tests for term assessments are granted solely for certified medical reasons subject to Principal approval.'
      ]
    },
    {
      title: 'Transport & Campus Safety Rules',
      icon: '🚌',
      points: [
        'Students must remain seated inside the school bus while in motion and listen to the attendant at all times.',
        'Students may not exit campus during school hours without a gate pass signed by the Principal.',
        'Parents picking up children by personal vehicle must produce parent ID card at the security gate.'
      ]
    }
  ];
}
