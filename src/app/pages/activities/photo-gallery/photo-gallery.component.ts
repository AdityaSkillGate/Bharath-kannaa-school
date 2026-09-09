import { Component, inject, signal } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';
import { GalleryItem } from '../../../shared/interfaces/school.interfaces';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  private readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);

  get allPhotos() {
    return this.schoolData.getGalleryItems(this.langService.currentLang());
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.activities') },
      { label: this.langService.t('act.photo_gallery') }
    ];
  }

  activeCategory = signal<string>('all');
  selectedPhoto = signal<GalleryItem | null>(null);

  get categories() {
    return [
      { label: this.langService.t('gallery.cat_all'), value: 'all' },
      { label: this.langService.t('gallery.cat_campus'), value: 'campus' },
      { label: this.langService.t('gallery.cat_sports'), value: 'sports' },
      { label: this.langService.t('gallery.cat_science'), value: 'science' },
      { label: this.langService.t('gallery.cat_events'), value: 'events' },
      { label: this.langService.t('gallery.cat_academics'), value: 'academics' }
    ];
  }

  get filteredPhotos() {
    const cat = this.activeCategory();
    const photos = this.allPhotos;
    if (cat === 'all') {
      return photos;
    }
    return photos.filter(item => item.category === cat);
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }

  openLightbox(photo: GalleryItem) {
    this.selectedPhoto.set(photo);
  }

  closeLightbox() {
    this.selectedPhoto.set(null);
  }
}
