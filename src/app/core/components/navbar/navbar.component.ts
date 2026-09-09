import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { SchoolDataService } from '../../../shared/services/school-data.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly router = inject(Router);
  protected readonly schoolData = inject(SchoolDataService);
  protected readonly langService = inject(LanguageService);
  protected readonly info = this.schoolData.schoolInfo;

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  openDropdown = signal<string | null>(null);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
      this.openDropdown.set(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  toggleDropdown(name: string) {
    this.openDropdown.update(current => current === name ? null : name);
  }

  closeDropdown() {
    this.openDropdown.set(null);
  }
}
