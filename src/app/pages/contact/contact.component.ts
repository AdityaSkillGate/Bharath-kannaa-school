import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { NotificationService } from '../../shared/services/notification.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  private readonly toast = inject(NotificationService);

  readonly info = this.schoolData.schoolInfo;

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.contact') }
    ];
  }

  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitMessage(form: any) {
    if (form.valid) {
      this.toast.show(
        this.langService.t('toast.contact_success', { name: this.contactForm.name }),
        'success'
      );
      form.resetForm();
    } else {
      this.toast.show(this.langService.t('toast.contact_error'), 'error');
    }
  }
}
