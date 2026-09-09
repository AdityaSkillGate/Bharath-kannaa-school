import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-sports-achievements',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './sports-achievements.component.html',
  styleUrl: './sports-achievements.component.css'
})
export class SportsAchievementsComponent {
  protected readonly langService = inject(LanguageService);

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.activities') },
      { label: this.langService.t('act.sports') }
    ];
  }

  get achievements() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          {
            year: '2024 - 2025',
            event: 'தமிழ்நாடு மாநில மெட்ரிகுலேஷன் தடகள சாம்பியன்ஷிப்',
            badge: 'தங்கம் & வெள்ளி',
            detail: 'மாணவர் 4x100 மீ தொடர் ஓட்டத்தில் தங்கப் பதக்கம், 400 மீ சீனியர் ஓட்டத்தில் வெள்ளிப் பதக்கம்.',
            icon: '🥇'
          },
          {
            year: '2024 - 2025',
            event: 'மாவட்ட பள்ளிகளுக்கிடையேயான கால்பந்து கோப்பை',
            badge: 'சாம்பியன் பட்டம்',
            detail: '17 வயதுக்குட்பட்ட எங்கள் பள்ளி கால்பந்து அணி 24 பள்ளிகளை வீழ்த்தி சுழற்கோப்பையை வென்றது.',
            icon: '🏆'
          },
          {
            year: '2023 - 2024',
            event: 'தென்மண்டல அழைப்பு சதுரங்கப் போட்டி',
            badge: 'முதலிடம்',
            detail: '9-ஆம் வகுப்பு மாணவர் ஆர். ஸ்ரீராம் தோல்வியே இன்றி 7.0/7 புள்ளிகள் பெற்று சாம்பியன் பட்டம் வென்றார்.',
            icon: '♟️'
          },
          {
            year: '2023 - 2024',
            event: 'மாவட்ட பள்ளிகளுக்கிடையேயான கிரிக்கெட் லீக்',
            badge: 'இரண்டாமிடம்',
            detail: '14 வயதுக்குட்பட்ட கிரிக்கெட் அணி இறுதிப்போட்டி வரை முன்னேறி அசத்தியது (அரை இறுதியில் 5/14 விக்கெட்டுகள்).',
            icon: '🏏'
          }
        ]
      : [
          {
            year: '2024 - 2025',
            event: 'Tamil Nadu State Matriculation Athletic Championship',
            badge: 'Gold & Silver',
            detail: 'Gold Medal in 4x100m Boys Relay, Silver in 400m Senior Individual Sprint.',
            icon: '🥇'
          },
          {
            year: '2024 - 2025',
            event: 'District Inter-School Football Trophy',
            badge: 'Champions',
            detail: 'Our Under-17 Boys Football team defeated 24 competing district schools to lift the Rolling Cup.',
            icon: '🏆'
          },
          {
            year: '2023 - 2024',
            event: 'South Zone Invitational Chess Tournament',
            badge: '1st Place',
            detail: 'Master R. Sriram of Class 9 won the championship title with an undefeated 7.0/7 score.',
            icon: '♟️'
          },
          {
            year: '2023 - 2024',
            event: 'District Inter-School Cricket League',
            badge: 'Runners Up',
            detail: 'U-14 Cricket team reached the finals with remarkable bowling figures (Best: 5/14 in semifinals).',
            icon: '🏏'
          }
        ];
  }

  get disciplines() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          { name: 'தடகள ஓட்டப்பந்தயம் & களப்போட்டிகள்', coach: 'NIS சான்றிதழ் பெற்ற பயிற்சியாளர்', facility: '200 மீ களிமண் ஓடுதளம்' },
          { name: 'கிரிக்கெட் பயிற்சி வலைகள்', coach: 'முன்னாள் ரஞ்சி வீரரின் வழிகாட்டுதல்', facility: 'புல்வெளி & சிமெண்ட் பயிற்சி ஆடுகளங்கள்' },
          { name: 'கால்பந்து (சாக்கர்)', coach: 'AIFF உரிமம் பெற்ற பயிற்சியாளர்', facility: 'இயற்கை புல்வெளி கால்பந்து மைதானம்' },
          { name: 'பூப்பந்து & மேஜை டென்னிஸ்', coach: 'மாநில அளவிலான பயிற்சியாளர்', facility: 'உராய்வற்ற மரத்தரை உள்விளையாட்டரங்கம்' },
          { name: 'கூடைப்பந்து & கைப்பந்து', coach: 'சிறப்பு உடற்கல்வி இயக்குநர்கள்', facility: 'மின்காந்த விளக்குகளுடன் கூடிய நவீன தரைத்தளம்' },
          { name: 'யோகா, கராத்தே & சிலம்பம்', coach: 'பிளாக் பெல்ட் & பாரம்பரிய ஆசான்கள்', facility: 'பன்னோக்கு உள்விளையாட்டு அரங்கம்' }
        ]
      : [
          { name: 'Track & Field Athletics', coach: 'NIS Certified Coach', facility: '200m Clay Track' },
          { name: 'Cricket Coaching Nets', coach: 'Former Ranji Player Guidance', facility: 'Turf & Cement Practice Wickets' },
          { name: 'Football (Soccer)', coach: 'AIFF Licensed Coach', facility: 'Natural Grass Football Arena' },
          { name: 'Badminton & Table Tennis', coach: 'State Level Coach', facility: 'Indoor Wooden Court' },
          { name: 'Basketball & Volleyball', coach: 'Specialized Physical Directors', facility: 'Hard Court with floodlights' },
          { name: 'Yoga, Karate & Silambam', coach: 'Black Belt & Traditional Masters', facility: 'Indoor Multipurpose Hall' }
        ];
  }
}
