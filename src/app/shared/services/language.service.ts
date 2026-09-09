import { Injectable, signal, computed, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import enTranslations from '../../../assets/i18n/en.json';
import taTranslations from '../../../assets/i18n/ta.json';

export type LanguageCode = 'en' | 'ta';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translate = inject(TranslateService, { optional: true });

  readonly currentLang = signal<LanguageCode>('en');
  readonly isTamil = computed(() => this.currentLang() === 'ta');

  private readonly translations: Record<LanguageCode, Record<string, string>> = {
    en: enTranslations as Record<string, string>,
    ta: taTranslations as Record<string, string>
  };

  constructor() {
    if (this.translate) {
      this.translate.setTranslation('en', this.translations.en, true);
      this.translate.setTranslation('ta', this.translations.ta, true);
      this.translate.setFallbackLang('en');
    }
    this.loadLanguage();
  }

  setLanguage(lang: LanguageCode): void {
    this.currentLang.set(lang);
    if (this.translate) {
      this.translate.use(lang);
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('sbkmhss_lang', lang);
      } catch {}
    }
  }

  toggleLanguage(): void {
    const next = this.currentLang() === 'en' ? 'ta' : 'en';
    this.setLanguage(next);
  }

  t(key: string, params?: Record<string, any>): string {
    const lang = this.currentLang();
    let text = this.translations[lang]?.[key] || this.translations['en']?.[key] || key;
    if (params) {
      Object.keys(params).forEach(param => {
        text = text.replace(new RegExp(`{{\\s*${param}\\s*}}`, 'g'), String(params[param]));
      });
    }
    return text;
  }

  private loadLanguage(): void {
    let initialLang: LanguageCode = 'en';
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = localStorage.getItem('sbkmhss_lang') as LanguageCode;
        if (saved === 'en' || saved === 'ta') {
          initialLang = saved;
        }
      } catch {}
    }
    this.setLanguage(initialLang);
  }
}

