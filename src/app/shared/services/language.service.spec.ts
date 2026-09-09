import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should be created with default English', () => {
    expect(service).toBeTruthy();
    expect(service.currentLang()).toBe('en');
    expect(service.isTamil()).toBe(false);
  });

  it('should toggle to Tamil and back to English', () => {
    service.toggleLanguage();
    expect(service.currentLang()).toBe('ta');
    expect(service.isTamil()).toBe(true);
    expect(localStorage.getItem('sbkmhss_lang')).toBe('ta');

    service.toggleLanguage();
    expect(service.currentLang()).toBe('en');
    expect(service.isTamil()).toBe(false);
  });

  it('should return correct translation for key', () => {
    service.setLanguage('en');
    expect(service.t('nav.home')).toBe('Home');

    service.setLanguage('ta');
    expect(service.t('nav.home')).toBe('முகப்பு');
  });

  it('should support parameter interpolation', () => {
    service.setLanguage('en');
    expect(service.t('toast.contact_success', { name: 'John' })).toContain('John');

    service.setLanguage('ta');
    expect(service.t('toast.contact_success', { name: 'முருகன்' })).toContain('முருகன்');
  });

  it('should restore saved language from localStorage', () => {
    localStorage.setItem('sbkmhss_lang', 'ta');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    const newService = TestBed.runInInjectionContext(() => new LanguageService());
    expect(newService.currentLang()).toBe('ta');
    expect(newService.isTamil()).toBe(true);
  });
});
