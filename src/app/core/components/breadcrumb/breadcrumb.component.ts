import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../shared/services/language.service';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  protected readonly langService = inject(LanguageService);
  @Input() items: BreadcrumbItem[] = [];
}
