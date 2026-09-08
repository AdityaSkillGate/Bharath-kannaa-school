import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../core/components/cta-section/cta-section.component';
import { SchoolDataService } from '../../shared/services/school-data.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HeroBannerComponent, CtaSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  protected readonly schoolData = inject(SchoolDataService);
  private readonly toast = inject(NotificationService);

  readonly info = this.schoolData.schoolInfo;

  breadcrumbs = [
    { label: 'Contact Us' }
  ];

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
        `Thank you, ${this.contactForm.name}! Your message has been received. Our administrative desk will get back to you shortly.`,
        'success'
      );
      form.resetForm();
    } else {
      this.toast.show('Please fill in all mandatory fields with valid information.', 'error');
    }
  }
}
