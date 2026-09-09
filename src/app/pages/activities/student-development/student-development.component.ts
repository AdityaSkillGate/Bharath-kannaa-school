import { Component, inject } from '@angular/core';
import { HeroBannerComponent } from '../../../core/components/hero-banner/hero-banner.component';
import { CtaSectionComponent } from '../../../core/components/cta-section/cta-section.component';
import { PageHeaderComponent } from '../../../core/components/page-header/page-header.component';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-student-development',
  standalone: true,
  imports: [HeroBannerComponent, CtaSectionComponent, PageHeaderComponent],
  templateUrl: './student-development.component.html',
  styleUrl: './student-development.component.css'
})
export class StudentDevelopmentComponent {
  protected readonly langService = inject(LanguageService);

  get breadcrumbs() {
    return [
      { label: this.langService.t('nav.activities') },
      { label: this.langService.t('act.student_dev') }
    ];
  }

  get clubs() {
    const isTa = this.langService.isTamil();
    return isTa
      ? [
          {
            name: 'ரோபோடிக்ஸ் & AI மன்றம்',
            desc: 'Arduino, Raspberry Pi, Python வழிமுறை நிரலாக்கம் மற்றும் தானியங்கி ரோவர் உருவாக்கம் குறித்த செய்முறை பயிற்சி.',
            icon: '🤖',
            activities: ['கோடு பின்பற்றும் ரோபோக்கள்', 'IoT வீட்டு ஆட்டோமேஷன்', 'தேசிய ரோபோடிக்ஸ் போட்டிகள்']
          },
          {
            name: 'இலக்கியம் & விவாத மன்றம்',
            desc: 'சொற்பொழிவு, மேடைப்பேச்சு, மாதிரி ஐக்கிய நாடுகள் சபை (MUN) மற்றும் கவிதை, சிறுகதை எழுத்துப் பயிற்சி.',
            icon: '📖',
            activities: ['நாடாளுமன்ற விவாதங்கள்', 'உடனடி உரைப்போட்டி', 'பள்ளி ஆண்டு மலர் ஆசிரியப் பணி']
          },
          {
            name: 'சுற்றுச்சூழல் & இயற்கை மன்றம்',
            desc: 'மரக்கன்றுகள் நடுதல், மக்கும் உரம் தயாரித்தல், சூரிய சக்தி தணிக்கை மற்றும் பல்லுயிர் பாதுகாப்பு.',
            icon: '🌱',
            activities: ['இயற்கை காய்கறி தோட்டம்', 'நெகிழி இல்லா வளாக உறுதிமொழி', 'நீர் பாதுகாப்பு விழிப்புணர்வு']
          },
          {
            name: 'நுண்கலை & பாரம்பரிய இசை மன்றம்',
            desc: 'கர்நாடக சங்கீதம், விசைப்பலகை, மிருதங்கம், எண்ணெய் ஓவியம், பாரம்பரிய தஞ்சாவூர் ஓவியம் மற்றும் சிற்பக்கலை.',
            icon: '🎨',
            activities: ['வருடாந்திர கலைக் கண்காட்சி', 'இசை நிகழ்ச்சிகள்', 'மாநில அளவிலான கலைத் திருவிழாக்கள்']
          },
          {
            name: 'சாரணர், வழிகாட்டிகள் & இளைய செஞ்சிலுவை சங்கம்',
            desc: 'ஒழுக்கம், இயற்கை முகாம் நுட்பங்கள், முதலுதவி சான்றிதழ்கள் மற்றும் சமூக சேவை முகாம்கள்.',
            icon: '⛺',
            activities: ['முகாம் தலைமைத்துவ முகாம்கள்', 'சாலை பாதுகாப்பு தன்னார்வப் பணி', 'பேரிடர் மீட்புப் பயிற்சி']
          },
          {
            name: 'கணிதம் & வேத வானியல் வட்டம்',
            desc: 'வழக்கத்திற்கு மாறான கணித புதிர்கள், வேத கணித குறுக்குவழிகள் மற்றும் தொலைநோக்கி வழி வானியல் ஆய்வு.',
            icon: '🔭',
            activities: ['இரவு நேர விண்மீன் பார்வை', 'ஒலிம்பியாட் சிறப்பு பயிற்சி', 'கணித மாதிரி கண்காட்சிகள்']
          }
        ]
      : [
          {
            name: 'Robotics & AI Club',
            desc: 'Hands-on programming with Arduino, Raspberry Pi, Python algorithms, and autonomous rover construction.',
            icon: '🤖',
            activities: ['Line follower robots', 'IoT home automation', 'National robotics championships']
          },
          {
            name: 'Literary & Debating Society',
            desc: 'Polishing rhetoric, public speaking, model United Nations (MUN), and creative fiction & poetry writing.',
            icon: '📖',
            activities: ['Parliamentary debates', 'Extempore oration', 'School annual magazine editorial']
          },
          {
            name: 'Eco-Warriors & Nature Club',
            desc: 'Plantation drives, compost recycling, solar energy audits, and biodiversity preservation.',
            icon: '🌱',
            activities: ['Organic vegetable garden', 'Zero-plastic pledge', 'Water conservation campaigns']
          },
          {
            name: 'Fine Arts & Classical Music Club',
            desc: 'Carnatic vocals, keyboard, mridangam, oil painting, traditional Tanjore art, and sculpting.',
            icon: '🎨',
            activities: ['Annual art exhibition', 'Music recitals', 'State youth cultural festivals']
          },
          {
            name: 'Scouts, Guides & Junior Red Cross',
            desc: 'Discipline, outdoor survival skills, first-aid certifications, and community service camps.',
            icon: '⛺',
            activities: ['Campfire leadership camps', 'Traffic safety volunteering', 'Disaster relief training']
          },
          {
            name: 'Math & Vedic Astronomy Circle',
            desc: 'Exploring non-routine mathematical puzzles, Vedic arithmetic shortcuts, and telescopic sky observations.',
            icon: '🔭',
            activities: ['Star gazing nights', 'Olympiad training', 'Math model exhibitions']
          }
        ];
  }
}
