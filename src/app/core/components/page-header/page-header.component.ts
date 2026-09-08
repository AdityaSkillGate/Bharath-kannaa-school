import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  @Input() badge?: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() align: 'left' | 'center' = 'center';
  @Input() theme: 'light' | 'dark' = 'light';
}
