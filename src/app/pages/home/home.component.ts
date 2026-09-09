import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { LanguageService } from '../../shared/services/language.service';
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
  protected readonly langService = inject(LanguageService);

  readonly info = this.schoolData.schoolInfo;

  get stats() {
    return this.schoolData.getStatistics(this.langService.currentLang());
  }

  get features() {
    return this.schoolData.getWhyChooseUs(this.langService.currentLang());
  }

  get wings() {
    return this.schoolData.getAcademicWings(this.langService.currentLang()).slice(0, 4);
  }

  get facilities() {
    return this.schoolData.getFacilities(this.langService.currentLang()).slice(0, 4);
  }

  get gallery() {
    return this.schoolData.getGalleryItems(this.langService.currentLang()).slice(0, 6);
  }

  get testimonials() {
    return this.schoolData.getTestimonials(this.langService.currentLang());
  }

  get news() {
    return this.schoolData.getNews(this.langService.currentLang());
  }

  selectedSlide = 0;

  get heroSlides() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          {
            badge: '2025 - 2026 மாணவர் சேர்க்கை நடைபெறுகிறது',
            title: 'அறிவு மற்றும் ஒழுக்கத்துடன் ஒவ்வொரு மாணவரையும் மேம்படுத்துகிறோம்',
            subtitle: 'நவீன STEM உட்கட்டமைப்பு, அனுபவமிக்க ஆசிரியர்கள் மற்றும் விழுமியங்கள் சார்ந்த முழுமையான கல்வியை வழங்கும் முன்னணி மெட்ரிகுலேஷன் மேல்நிலைப் பள்ளி.',
            ctaPrimaryText: 'உடனடி சேர்க்கை',
            ctaPrimaryLink: '/admissions/admissions',
            ctaSecondaryText: 'வளாகப் பார்வை',
            ctaSecondaryLink: '/facilities',
            image: 'assets/gallery/herobannel1.jpeg'
          },
          {
            badge: 'கல்வி சிறப்பு & சாதனைகள்',
            title: 'நாளைய தலைவர்கள், கண்டுபிடிப்பாளர்கள் மற்றும் சிந்தனையாளர்களை உருவாக்குகிறோம்',
            subtitle: '100% அரசு பொதுத்தேர்வு தேர்ச்சி, ரோபோடிக்ஸ் கல்வி, NEET / JEE போட்டித் தேர்வுக்கான சிறப்புப் பயிற்சி மற்றும் தலைசிறந்த விளையாட்டுப் பயிற்சி.',
            ctaPrimaryText: 'எங்கள் கல்வி',
            ctaPrimaryLink: '/academics',
            ctaSecondaryText: 'சாதனைகள் காண்க',
            ctaSecondaryLink: '/activities/sports-achievements',
            image: 'assets/gallery/herobannel2.jpeg'
          }
        ]
      : [
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
  }

  nextSlide() {
    this.selectedSlide = (this.selectedSlide + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.selectedSlide = (this.selectedSlide - 1 + this.heroSlides.length) % this.heroSlides.length;
  }
}
