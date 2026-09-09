import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css'
})
export class CtaSectionComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  protected readonly info = this.schoolData.schoolInfo;
}
