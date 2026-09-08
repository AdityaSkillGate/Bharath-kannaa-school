import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { PageHeaderComponent } from '../../core/components/page-header/page-header.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent, CtaSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly schoolData = inject(SchoolDataService);

  readonly info = this.schoolData.schoolInfo;
  readonly stats = this.schoolData.getStatistics();
  readonly features = this.schoolData.getWhyChooseUs();
  readonly wings = this.schoolData.getAcademicWings().slice(0, 4);
  readonly facilities = this.schoolData.getFacilities().slice(0, 4);
  readonly gallery = this.schoolData.getGalleryItems().slice(0, 6);
  readonly testimonials = this.schoolData.getTestimonials();
  readonly news = this.schoolData.getNews();

  selectedSlide = 0;
  heroSlides = [
    {
      badge: 'Admissions Open 2025 - 2026',
      title: 'Empowering Every Mind with Knowledge & Character',
      subtitle: 'A premier Matriculation & Higher Secondary School providing state-of-the-art STEM infrastructure, experienced faculty, and values-based holistic education.',
      ctaPrimaryText: 'Enroll Now',
      ctaPrimaryLink: '/admissions/admissions',
      ctaSecondaryText: 'Explore Campus',
      ctaSecondaryLink: '/facilities',
      image: 'assets/gallery/herobannel1.jpeg'
    },
    {
      badge: 'Academic Brilliance',
      title: 'Inspiring Future Leaders, Innovators & Thinkers',
      subtitle: 'Consistent 100% Board Exam results, robotics education, competitive examination foundation (NEET / JEE), and rich sports coaching.',
      ctaPrimaryText: 'Our Academics',
      ctaPrimaryLink: '/academics',
      ctaSecondaryText: 'View Achievements',
      ctaSecondaryLink: '/activities/sports-achievements',
      image: 'assets/gallery/herobannel2.jpeg'
    }
  ];

  nextSlide() {
    this.selectedSlide = (this.selectedSlide + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.selectedSlide = (this.selectedSlide - 1 + this.heroSlides.length) % this.heroSlides.length;
  }
}
