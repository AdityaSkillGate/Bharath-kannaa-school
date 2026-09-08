import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchoolDataService } from '../../../shared/services/school-data.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly info = this.schoolData.schoolInfo;
}
