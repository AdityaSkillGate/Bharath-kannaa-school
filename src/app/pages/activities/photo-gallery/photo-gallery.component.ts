import { Component, inject, signal, computed } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
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
  readonly allPhotos = this.schoolData.getGalleryItems();

  breadcrumbs = [
    { label: 'Activities' },
    { label: 'Photo Gallery' }
  ];

  activeCategory = signal<string>('all');
  selectedPhoto = signal<GalleryItem | null>(null);

  categories = [
    { label: 'All Moments', value: 'all' },
    { label: 'Campus & Architecture', value: 'campus' },
    { label: 'Sports & Athletics', value: 'sports' },
    { label: 'Science & Robotics', value: 'science' },
    { label: 'Events & Celebrations', value: 'events' },
    { label: 'Academic Rigor', value: 'academics' }
  ];

  filteredPhotos = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') {
      return this.allPhotos;
    }
    return this.allPhotos.filter(item => item.category === cat);
  });

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
