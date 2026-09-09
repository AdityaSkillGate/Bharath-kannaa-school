import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-rules-regulations',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './rules-regulations.component.html',
  styleUrl: './rules-regulations.component.css'
})
export class RulesRegulationsComponent {
  protected readonly langService = inject(LanguageService);

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.admissions'), url: '/admissions/admissions' },
      { label: this.langService.t('adm.rules') }
    ];
  }

  get ruleCategories() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          {
            title: 'வருகைப் பதிவு & விடுமுறைக் கொள்கை',
            icon: '📅',
            points: [
              'ஆண்டு இறுதித் தேர்வு மற்றும் அரசுப் பொதுத்தேர்வெழுத குறைந்தபட்சம் 85% வருகைப் பதிவு கட்டாயமாகும்.',
              'விடுமுறை விண்ணப்பங்கள் பள்ளி கையேட்டில் பெற்றோர்/பாதுகாவலரின் கையொப்பத்துடன் எழுத்துப்பூர்வமாக சமர்ப்பிக்கப்பட வேண்டும்.',
              'தொடர்ந்து 3 நாட்களுக்கு மேல் மருத்துவ விடுப்பு எடுத்தால் தகுதியான மருத்துவரிடம் பெற்ற உடல்நலச் சான்றிதழ் சமர்ப்பிக்க வேண்டும்.',
              'முன்னறிவிப்பின்றி தொடர்ந்து 10 நாட்கள் பள்ளிக்கு வராவிட்டால் மாணவர் சேர்க்கை ரத்து செய்யப்படலாம்.'
            ]
          },
          {
            title: 'வளாக ஒழுக்கம் & நெறிமுறைகள்',
            icon: '⚖️',
            points: [
              'ஆசிரியர்கள், சக மாணவர்கள் மற்றும் பணியாளர்களிடம் மரியாதையான சொல் மற்றும் பண்பான நடத்தை மிகவும் அவசியமாகும்.',
              'கேலி செய்தல், வம்பு இழுத்தல், தகாத வார்த்தைகள் அல்லது எந்தவிதமான அச்சுறுத்தலுக்கும் பள்ளியில் முற்றிலும் இடமில்லை (Zero Tolerance).',
              'பள்ளிச் சொத்துக்களைப் பாதுகாத்தல்: மேசை, ஆய்வகக் கருவிகள் அல்லது சுவர்களைச் சேதப்படுத்தினால் ஒழுங்கு நடவடிக்கை எடுக்கப்படும்.',
              'பள்ளி நேரங்களில் செல்போன்கள், ஸ்மார்ட் வாட்ச்கள் போன்ற மின்னணு சாதனங்களை மாணவர்கள் எடுத்து வரக் கூடாது.'
            ]
          },
          {
            title: 'தேர்வு & கல்வி ஒழுங்குமுறைகள்',
            icon: '✍️',
            points: [
              'தேர்வு தொடங்குவதற்கு 15 நிமிடங்களுக்கு முன்னதாகவே உரிய நுழைவுச் சீட்டு மற்றும் எழுதுபொருட்களுடன் தேர்வு அறைக்கு வர வேண்டும்.',
              'தேர்வு அறையில் முறைகேடு செய்ய முயன்றாலோ, அனுமதியற்ற தாள்களை வைத்திருந்தாலோ தேர்வு உடனடியாக ரத்து செய்யப்படும்.',
              'மருத்துவ காரணங்களுக்காக மட்டுமே முதல்வரின் ஒப்புதலுடன் மறுதேர்வு அனுமதிக்கப்படும்.'
            ]
          },
          {
            title: 'பள்ளிப் பேருந்து & வளாகப் பாதுகாப்பு விதிகள்',
            icon: '🚌',
            points: [
              'பள்ளிப் பேருந்து இயங்கும் போது மாணவர்கள் எழுந்து நிற்காமல் அமர்ந்திருக்க வேண்டும் மற்றும் உதவியாளரின் வழிகாட்டலை பின்பற்ற வேண்டும்.',
              'முதல்வரின் அனுமதி வாயில் சீட்டு (Gate Pass) இன்றி பள்ளி நேரத்தில் வளாகத்தை விட்டு வெளியேற அனுமதி இல்லை.',
              'சொந்த வாகனத்தில் குழந்தைகளை அழைத்துச் செல்லும் பெற்றோர்கள் பாதுகாப்பு நுழைவாயிலில் பெற்றோர் அடையாள அட்டையைக் காண்பிக்க வேண்டும்.'
            ]
          }
        ]
      : [
          {
            title: 'Attendance & Leave Policy',
            icon: '📅',
            points: [
              'A minimum of 85% attendance across terms is mandatory for eligibility to sit for annual & board exams.',
              'Leave applications must be submitted in writing signed by parent/guardian in the official student handbook.',
              'Medical leaves extending beyond 3 consecutive days necessitate a fitness certificate from a qualified medical doctor.',
              'Unexcused absence without prior intimation for more than 10 consecutive days may result in formal name strike-off.'
            ]
          },
          {
            title: 'Code of Campus Conduct & Ethics',
            icon: '⚖️',
            points: [
              'Respectful, courteous speech and conduct toward teachers, peers, and non-teaching staff is non-negotiable.',
              'Strict zero-tolerance policy against bullying, ragging, teasing, foul language, or any form of harassment.',
              'Care of school property: Defacing furniture, laboratory glassware, or campus walls invites disciplinary action and replacement costs.',
              'Personal electronic gadgets, mobile phones, and smart watches are strictly banned on school premises during academic hours.'
            ]
          },
          {
            title: 'Examination & Scholastic Discipline',
            icon: '✍️',
            points: [
              'Students must report 15 minutes before scheduled exam bell with prescribed hall tickets and standard stationery.',
              'Any malpractice or possession of unauthorized papers in the exam hall results in immediate paper cancellation.',
              'Re-tests for term assessments are granted solely for certified medical reasons subject to Principal approval.'
            ]
          },
          {
            title: 'Transport & Campus Safety Rules',
            icon: '🚌',
            points: [
              'Students must remain seated inside the school bus while in motion and listen to the attendant at all times.',
              'Students may not exit campus during school hours without a gate pass signed by the Principal.',
              'Parents picking up children by personal vehicle must produce parent ID card at the security gate.'
            ]
          }
        ];
  }
}
