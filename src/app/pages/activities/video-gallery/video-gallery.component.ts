import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';
import { VideoItem } from '../../../shared/interfaces/school.interfaces';

@Component({
  selector: 'app-video-gallery',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent],
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.css'
})
export class VideoGalleryComponent {
  private readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  private readonly sanitizer = inject(DomSanitizer);

  get videos() {
    return this.schoolData.getVideoItems(this.langService.currentLang());
  }

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.activities') },
      { label: this.langService.t('act.video_gallery') }
    ];
  }

  activeVideo: VideoItem | null = null;
  safeVideoUrl: SafeResourceUrl | null = null;

  playVideo(video: VideoItem) {
    this.activeVideo = video;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.videoUrl);
  }

  closeVideoPlayer() {
    this.activeVideo = null;
    this.safeVideoUrl = null;
  }
}
