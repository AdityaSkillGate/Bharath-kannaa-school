import { Routes } from '@angular/router';

export const routes: Routes = [
  // Home
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Shri Bharath Kanna Mat. Hr. Sec. School | Home'
  },

  // About Pages
  {
    path: 'about',
    redirectTo: 'about/about-us',
    pathMatch: 'full'
  },
  {
    path: 'about/about-us',
    loadComponent: () => import('./pages/about/about-us/about-us.component').then(m => m.AboutUsComponent),
    title: 'About Us | Shri Bharath Kanna School'
  },
  {
    path: 'about/why-choose-us',
    loadComponent: () => import('./pages/about/why-choose-us/why-choose-us.component').then(m => m.WhyChooseUsComponent),
    title: 'Why Choose Us | Shri Bharath Kanna School'
  },
  {
    path: 'about/vision-mission',
    loadComponent: () => import('./pages/about/vision-mission/vision-mission.component').then(m => m.VisionMissionComponent),
    title: 'Vision, Mission & Values | Shri Bharath Kanna School'
  },
  {
    path: 'about/chairman-message',
    loadComponent: () => import('./pages/about/chairman-message/chairman-message.component').then(m => m.ChairmanMessageComponent),
    title: "Chairman's Message | Shri Bharath Kanna School"
  },
  {
    path: 'about/secretary-message',
    loadComponent: () => import('./pages/about/secretary-message/secretary-message.component').then(m => m.SecretaryMessageComponent),
    title: "Secretary's Message | Shri Bharath Kanna School"
  },
  {
    path: 'about/principal-message',
    loadComponent: () => import('./pages/about/principal-message/principal-message.component').then(m => m.PrincipalMessageComponent),
    title: "Principal's Desk | Shri Bharath Kanna School"
  },
  {
    path: 'about/our-trust',
    loadComponent: () => import('./pages/about/our-trust/our-trust.component').then(m => m.OurTrustComponent),
    title: 'Our Trust | Shri Bharath Kanna School'
  },
  {
    path: 'about/leadership-team',
    loadComponent: () => import('./pages/about/leadership-team/leadership-team.component').then(m => m.LeadershipTeamComponent),
    title: 'Leadership Team | Shri Bharath Kanna School'
  },
  {
    path: 'about/careers',
    loadComponent: () => import('./pages/about/careers/careers.component').then(m => m.CareersComponent),
    title: 'Careers | Shri Bharath Kanna School'
  },

  // Academics
  {
    path: 'academics',
    loadComponent: () => import('./pages/academics/academics.component').then(m => m.AcademicsComponent),
    title: 'Academics & Curriculum | Shri Bharath Kanna School'
  },

  // Activities Pages
  {
    path: 'activities',
    redirectTo: 'activities/student-development',
    pathMatch: 'full'
  },
  {
    path: 'activities/student-development',
    loadComponent: () => import('./pages/activities/student-development/student-development.component').then(m => m.StudentDevelopmentComponent),
    title: 'Student Development & Clubs | Shri Bharath Kanna School'
  },
  {
    path: 'activities/sports-achievements',
    loadComponent: () => import('./pages/activities/sports-achievements/sports-achievements.component').then(m => m.SportsAchievementsComponent),
    title: 'Sports & Achievements | Shri Bharath Kanna School'
  },
  {
    path: 'activities/photo-gallery',
    loadComponent: () => import('./pages/activities/photo-gallery/photo-gallery.component').then(m => m.PhotoGalleryComponent),
    title: 'Photo Gallery | Shri Bharath Kanna School'
  },
  {
    path: 'activities/video-gallery',
    loadComponent: () => import('./pages/activities/video-gallery/video-gallery.component').then(m => m.VideoGalleryComponent),
    title: 'Video Gallery | Shri Bharath Kanna School'
  },

  // Admissions Pages
  {
    path: 'admissions',
    redirectTo: 'admissions/admissions',
    pathMatch: 'full'
  },
  {
    path: 'admissions/admissions',
    loadComponent: () => import('./pages/admissions/admissions/admissions.component').then(m => m.AdmissionsComponent),
    title: 'Admissions Process 2025-2026 | Shri Bharath Kanna School'
  },
  {
    path: 'admissions/parents-corner',
    loadComponent: () => import('./pages/admissions/parents-corner/parents-corner.component').then(m => m.ParentsCornerComponent),
    title: "Parents' Corner & Handbook | Shri Bharath Kanna School"
  },
  {
    path: 'admissions/rules-regulations',
    loadComponent: () => import('./pages/admissions/rules-regulations/rules-regulations.component').then(m => m.RulesRegulationsComponent),
    title: 'Rules & Regulations | Shri Bharath Kanna School'
  },

  // Facilities
  {
    path: 'facilities',
    loadComponent: () => import('./pages/facilities/facilities.component').then(m => m.FacilitiesComponent),
    title: 'Campus Facilities | Shri Bharath Kanna School'
  },

  // Contact
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Shri Bharath Kanna School'
  },

  // Mandatory Public Disclosure
  {
    path: 'mandatory-public-disclosure',
    loadComponent: () => import('./pages/mandatory-public-disclosure/mandatory-public-disclosure.component').then(m => m.MandatoryPublicDisclosureComponent),
    title: 'Mandatory Public Disclosure | Shri Bharath Kanna School'
  },

  // Wildcard redirect to Home
  {
    path: '**',
    redirectTo: ''
  }
];
