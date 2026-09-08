import { Component, Input } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() badge?: string;
  @Input() breadcrumbs: BreadcrumbItem[] = [];
  @Input() bgImage?: string;
}
