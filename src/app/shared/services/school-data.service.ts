import { Injectable, inject } from '@angular/core';
import {
  StatItem,
  FeatureItem,
  TestimonialItem,
  GalleryItem,
  VideoItem,
  NewsItem,
  LeaderItem,
  DisclosureItem,
  CareerOpening,
  FacilityItem,
  AcademicWing
} from '../interfaces/school.interfaces';
import { SCHOOL_INFO } from '../models/school.models';
import { LanguageService, LanguageCode } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {
  private readonly langService = inject(LanguageService);
  readonly schoolInfo = SCHOOL_INFO;

  getStatistics(lang: LanguageCode = this.langService.currentLang()): StatItem[] {
    if (lang === 'ta') {
      return [
        {
          number: '2,500',
          suffix: '+',
          label: 'சேர்க்கை பெற்ற மாணவர்கள்',
          description: 'மழலையர் முதல் 12-ஆம் வகுப்பு வரை கற்கும் மாணவர்கள்',
          icon: 'students'
        },
        {
          number: '120',
          suffix: '+',
          label: 'அர்ப்பணிப்புள்ள ஆசிரியர்கள்',
          description: 'பயிற்சி பெற்ற, திறமையான ஆசிரியப் பெருமக்கள்',
          icon: 'teachers'
        },
        {
          number: '25',
          suffix: '+',
          label: '25+ ஆண்டு கல்விப் பாரம்பரியம்',
          description: '1998 முதல் சாதனையாளர்களை உருவாக்கி வருகிறது',
          icon: 'years'
        },
        {
          number: '100',
          suffix: '%',
          label: 'அரசு பொதுத்தேர்வு தேர்ச்சி',
          description: 'மாநில அளவில் முதல் மதிப்பெண்கள் மற்றும் செண்டம் சாதனை',
          icon: 'results'
        }
      ];
    }

    return [
      {
        number: '2,500',
        suffix: '+',
        label: 'Enrolled Students',
        description: 'Thriving learners across Pre-KG to Grade 12',
        icon: 'students'
      },
      {
        number: '120',
        suffix: '+',
        label: 'Dedicated Educators',
        description: 'Trained, caring, and highly qualified teachers',
        icon: 'teachers'
      },
      {
        number: '25',
        suffix: '+',
        label: 'Years of Excellence',
        description: 'Nurturing generations of achievers since 1998',
        icon: 'years'
      },
      {
        number: '100',
        suffix: '%',
        label: 'Board Examination Results',
        description: 'Consistent top state ranks and centum scores',
        icon: 'results'
      }
    ];
  }

  getWhyChooseUs(lang: LanguageCode = this.langService.currentLang()): FeatureItem[] {
    if (lang === 'ta') {
      return [
        {
          id: 'academic-excellence',
          title: 'சிறந்த கல்வித் தரம்',
          description: 'அடிப்படை பாடக்கருத்துகளில் ஆழமான புரிதல், ஆய்வு அடிப்படையிலான கற்றல் மற்றும் தனிப்பயன் மாணவர் கவனிப்பு.',
          icon: 'academic',
          tag: 'முதலிடம்'
        },
        {
          id: 'experienced-faculty',
          title: 'அனுபவமிக்க ஆசிரியர்கள்',
          description: 'தொடர் கற்பித்தல் பயிற்சி பெற்ற, ஒவ்வொரு குழந்தைக்கும் அர்ப்பணிப்புடன் வழிகாட்டும் பேராசிரியர்கள்.',
          icon: 'faculty',
          tag: 'வழிகாட்டிகள்'
        },
        {
          id: 'smart-classrooms',
          title: 'நவீன ஸ்மார்ட் வகுப்பறைகள்',
          description: 'இன்டராக்டிவ் ஸ்மார்ட் போர்டுகள், 4K தொடுதிரைகள், ஒலி-ஒளி கல்வி தொழில்நுட்பம் மற்றும் AI கற்றல் முறை.',
          icon: 'smart-tech',
          tag: 'நவீன வசதி'
        },
        {
          id: 'safe-campus',
          title: 'பாதுகாப்பான பசுமை வளாகம்',
          description: '24/7 CCTV கண்காணிப்பு, பயோமெட்ரிக் பாதுகாப்பு, சுத்திகரிக்கப்பட்ட RO குடிநீர் மற்றும் பசுமையான சூழல்.',
          icon: 'safe-campus',
          tag: 'தூய்மை & பாதுகாப்பு'
        },
        {
          id: 'holistic-sports',
          title: 'உடற்கல்வி & விளையாட்டு அரங்கம்',
          description: 'நிலையான தடகள பாதை, கால்பந்து மைதானம், இறகுப்பந்து அரங்கம், தற்காப்புக் கலை மற்றும் யோகா பயிற்சி.',
          icon: 'sports',
          tag: 'உடற்திறன்'
        },
        {
          id: 'value-based',
          title: 'ஒழுக்கம் & நற்பண்புக் கல்வி',
          description: 'சிறந்த பண்பாட்டு விழுமியங்கள், சமூகப் பொறுப்பு, பரோபகாரம் மற்றும் நேர்மையை இளமை முதலே விதைக்கிறோம்.',
          icon: 'values',
          tag: 'ஒழுக்கமே முதன்மை'
        }
      ];
    }

    return [
      {
        id: 'academic-excellence',
        title: 'Academic Excellence',
        description: 'Rigorous academic curriculum balanced with experiential, project-based learning and individual student tracking.',
        icon: 'academic',
        tag: 'Top Ranked'
      },
      {
        id: 'experienced-faculty',
        title: 'Experienced Faculty',
        description: 'Passionate educators with continuous pedagogical training providing personalized attention to every single child.',
        icon: 'faculty',
        tag: 'Expert Mentors'
      },
      {
        id: 'smart-classrooms',
        title: 'Smart Classrooms',
        description: 'Interactive smart boards, digital audio-visual modules, and AI-enabled hybrid learning systems in every room.',
        icon: 'smart-tech',
        tag: 'Modern Infra'
      },
      {
        id: 'safe-campus',
        title: 'Safe & Green Campus',
        description: '24/7 CCTV surveillance, biometric security, eco-friendly green environment, clean purified water, and safe transport.',
        icon: 'safe-campus',
        tag: 'Secure & Clean'
      },
      {
        id: 'holistic-sports',
        title: 'Sports & Fitness Arena',
        description: 'Olympic-standard athletic tracks, football grounds, indoor badminton courts, martial arts, and yoga training.',
        icon: 'sports',
        tag: 'Physical Fitness'
      },
      {
        id: 'value-based',
        title: 'Value-Based Moral Education',
        description: 'Instilling ethical values, civic responsibility, emotional empathy, and cultural respect from early childhood.',
        icon: 'values',
        tag: 'Character First'
      }
    ];
  }

  getAcademicWings(lang: LanguageCode = this.langService.currentLang()): AcademicWing[] {
    if (lang === 'ta') {
      return [
        {
          title: 'மழலையர் பள்ளி & ஆரம்பக் கல்வி',
          grades: 'Pre-KG, LKG, UKG',
          ageGroup: '3 முதல் 5 வயது வரை',
          description: 'மாண்டிசோரி முறை சார்ந்த, விளையாட்டு வழிக் கற்றல், மொழிப் பயிற்சி மற்றும் கற்பனைத் திறன் வளர்ப்பு.',
          highlights: ['செயல்வழிக் கற்றல்', 'ஃபோனிக்ஸ் & கதைசொல்லல்', 'மோட்டார் திறன் மேம்பாடு', 'அன்பான தாய்-ஆசிரியர்கள்'],
          focus: 'மகிழ்ச்சியான கற்றல் & அடிப்படை கட்டமைப்பு'
        },
        {
          title: 'தொடக்கப் பள்ளி பிரிவு',
          grades: 'வகுப்புகள் 1 முதல் 5',
          ageGroup: '6 முதல் 10 வயது வரை',
          description: 'கணிதம், அறிவியல், மொழிகள் மற்றும் பொது அறிவில் வலுவான அடிப்படைக் கருத்துகளை உருவாக்குதல்.',
          highlights: ['கருத்துசார் புரிதல்', 'இருமொழி ஆளுமை', 'அறிவியல் பரிசோதனை கருவிகள்', 'கலை & கைவினை'],
          focus: 'ஆராய்ச்சி வழிக் கற்றல் & அடிப்படைக் கல்வி'
        },
        {
          title: 'நடுநிலைப் பள்ளி பிரிவு',
          grades: 'வகுப்புகள் 6 முதல் 8',
          ageGroup: '11 முதல் 13 வயது வரை',
          description: 'அறிவியல் பகுப்பாய்வு, சிக்கல் தீர்க்கும் திறன், கணினி தொழில்நுட்பம் மற்றும் சுய சிந்தனை வளர்ச்சி.',
          highlights: ['ஆய்வகப் பயிற்சிகள்', 'கோடிங் & ரோபோடிக்ஸ் தொடக்கம்', 'விவாதங்கள் & பேச்சுப் பயிற்சி', 'சமூக அறிவியல் திட்டங்கள்'],
          focus: 'பகுப்பாய்வுச் சிந்தனை & செய்முறை அறிவு'
        },
        {
          title: 'உயர்நிலைப் பள்ளி பிரிவு',
          grades: 'வகுப்புகள் 9 & 10',
          ageGroup: '14 முதல் 15 வயது வரை',
          description: 'அரசு பொதுத்தேர்வுகளுக்கான சிறந்த பயிற்சி, தொடர் மாதிரித் தேர்வுகள் மற்றும் உயர் மதிப்பெண் உத்திகள்.',
          highlights: ['மாதிரித் தேர்வுகள்', 'சிறப்பு வழிகாட்டல் வகுப்புகள்', 'தொழில் வழிகாட்டல் கருத்தரங்குகள்', 'செய்முறை ஆய்வகப் பயிற்சி'],
          focus: 'பொதுத்தேர்வு தேர்ச்சி & திறன் மேம்பாடு'
        },
        {
          title: 'மேல்நிலைப் பள்ளி பிரிவு',
          grades: 'வகுப்புகள் 11 & 12',
          ageGroup: '16 முதல் 17 வயது வரை',
          description: 'Bio-Maths, Computer Science, Commerce, Arts பிரிவுகளுடன் NEET/JEE/CA போட்டித் தேர்வுக்கான சிறப்புப் பயிற்சி.',
          highlights: ['தனித்தனி நவீன ஆய்வகங்கள்', 'NEET / JEE ஒருங்கிணைந்த பயிற்சி', 'வணிகவியல் & கணக்கியல் பயிற்சி', 'உயர் கல்வி வழிகாட்டல்'],
          focus: 'தொழில்முறை கல்வி & போட்டித்தேர்வு வெற்றி'
        }
      ];
    }

    return [
      {
        title: 'Kindergarten & Early Years',
        grades: 'Pre-KG, LKG, UKG',
        ageGroup: '3 to 5 Years',
        description: 'Montessori-inspired, play-based sensory learning that sparks curiosity, language fluency, and creative exploration.',
        highlights: ['Activity-based learning', 'Phonics & storytelling', 'Fine motor development', 'Caring mother-teachers'],
        focus: 'Joyful discovery & foundation building'
      },
      {
        title: 'Primary Wing',
        grades: 'Grades 1 to 5',
        ageGroup: '6 to 10 Years',
        description: 'Building solid fundamental concepts in Mathematics, Science, Languages, and General Knowledge with interactive discovery.',
        highlights: ['Conceptual understanding', 'Bilingual language mastery', 'Science discovery kits', 'Art & craft integration'],
        focus: 'Inquiry-driven core literacy & numeracy'
      },
      {
        title: 'Middle School',
        grades: 'Grades 6 to 8',
        ageGroup: '11 to 13 Years',
        description: 'Transitioning into deeper scientific reasoning, analytical problem solving, digital technology, and critical thinking.',
        highlights: ['Applied lab sessions', 'Coding & robotics initiation', 'Debates & public speaking', 'Social science projects'],
        focus: 'Analytical thinking & practical application'
      },
      {
        title: 'Secondary School',
        grades: 'Grades 9 & 10',
        ageGroup: '14 to 15 Years',
        description: 'Thorough preparation for Board Examinations with specialized coaching, regular assessments, and conceptual clarity.',
        highlights: ['Structured mock tests', 'Remedial coaching sessions', 'Career orientation talks', 'Laboratory practical rigor'],
        focus: 'Board exam mastery & holistic aptitude'
      },
      {
        title: 'Senior Secondary Wing',
        grades: 'Grades 11 & 12',
        ageGroup: '16 to 17 Years',
        description: 'Comprehensive stream specializations: Bio-Maths, Computer Science, Commerce, and Arts with competitive exam support (NEET/JEE/CA Foundation).',
        highlights: ['Dedicated stream labs', 'NEET / JEE / CUET integration', 'Commerce & Accountancy workshops', 'Counseling for higher studies'],
        focus: 'Career launchpad & competitive triumph'
      }
    ];
  }

  getFacilities(lang: LanguageCode = this.langService.currentLang()): FacilityItem[] {
    if (lang === 'ta') {
      return [
        {
          id: 'smart-classrooms',
          title: '4K ஸ்மார்ட் டிஜிட்டல் வகுப்பறைகள்',
          shortDesc: 'இன்டராக்டிவ் 4K தொடுதிரைகள் மற்றும் குளிர்ச்சியூட்டப்பட்ட நவீன வகுப்பறைகள்.',
          fullDesc: 'தொடுதிரை டிஜிட்டல் கல்வி சாதனங்கள், 3D கல்வி வீடியோக்கள் மற்றும் AI கற்றல் நுட்பங்களுடன் கூடிய வகுப்பறைகள்.',
          features: ['4K இன்டராக்டிவ் ஸ்மார்ட் போர்டு', 'வசதியான இரட்டை மேசைகள்', 'இயற்கையான காற்றோட்ட வசதி', 'டிஜிட்டல் பாடப் பதிவுகள்'],
          imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
          icon: 'monitor'
        },
        {
          id: 'science-labs',
          title: 'நவீன அறிவியல் ஆய்வகங்கள்',
          shortDesc: 'இயற்பியல், வேதியியல் மற்றும் உயிரியலுக்கான தனித்தனி அதிநவீன ஆய்வகங்கள்.',
          fullDesc: 'மாணவர்கள் தனித்தனியாக அறிவியல் பரிசோதனைகள் செய்ய உதவும் நவீன கருவிகள் மற்றும் முழுமையான பாதுகாப்பு வசதிகள்.',
          features: ['தனிநபர் சோதனை மேடைகள்', 'பாதுகாப்பு சாதனங்கள்', 'டிஜிட்டல் நுண்ணோக்கிகள்', 'பாதுகாப்பு நெறிமுறைகள்'],
          imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
          icon: 'flask'
        },
        {
          id: 'computer-lab',
          title: 'அதிநவீன கணினி & AI ஆய்வகம்',
          shortDesc: '120+ நவீன Core i7 கணினிகள் மற்றும் அதிவேக ஃபைபர் இணைய வசதி.',
          fullDesc: 'Python, Scratch கோடிங் மற்றும் செயற்கை நுண்ணறிவு (AI) தொழில்நுட்பங்களை கற்பிக்கும் அதிநவீன கணினி கூடம்.',
          features: ['அதிவேக லீஸ் லைன் இணையம்', 'Python, Java & AI மென்பொருட்கள்', 'ரோபோடிக்ஸ் கருவிகள்', 'முழுமையான UPS மின்வசதி'],
          imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
          icon: 'cpu'
        },
        {
          id: 'library',
          title: 'அறிவுசார் நூலகம் & மின்-நூலகம்',
          shortDesc: '15,000+ புத்தகங்கள், கல்வி ஆய்விதழ்கள் மற்றும் டிஜிட்டல் மின்-நூல்கள்.',
          fullDesc: 'பாடப்புத்தகங்கள், போட்டித் தேர்வு கையேடுகள், இலக்கிய நூல்கள் மற்றும் டிஜிட்டல் வாசகர் பகுதி கொண்ட அமைதியான சூழல்.',
          features: ['15,000+ தேர்ந்தெடுக்கப்பட்ட நூல்கள்', 'அமைதியான தனிநபர் வாசிப்பு கூடம்', 'மின்-நூலக வசதி', 'வாராந்திர புத்தக மன்றம்'],
          imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
          icon: 'book'
        },
        {
          id: 'sports-arena',
          title: 'விளையாட்டு வளாகம் & தடகள மைதானம்',
          shortDesc: 'கால்பந்து, கிரிக்கெட், கைப்பந்து மற்றும் உள்ளரங்கு விளையாட்டு வசதிகள்.',
          fullDesc: 'அரசு தகுதிபெற்ற உடற்கல்வி ஆசிரியர்கள் மூலம் தொழில்முறை விளையாட்டுப் பயிற்சி மற்றும் யோகா.',
          features: ['200 மீ தடகள ஓடுதளம்', 'கிரிக்கெட் பயிற்சி வலைகள்', 'கூடைப்பந்து மைதானம்', 'இறகுப்பந்து & டேபிள் டென்னிஸ் அரங்கம்'],
          imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
          icon: 'trophy'
        },
        {
          id: 'transport',
          title: 'பாதுகாப்பான பள்ளி பேருந்து சேவை',
          shortDesc: 'GPS மற்றும் வேகக் கட்டுப்பாட்டு வசதியுடன் கூடிய 25+ பேருந்துகள் (35 கி.மீ சுற்றளவு).',
          fullDesc: 'மாணவர்களின் பாதுகாப்பான பயணத்திற்கு பெண் நடத்துனர்கள், அவசர உதவி பொத்தான் மற்றும் CCTV வசதிகள்.',
          features: ['நிகழ்நேர GPS கண்காணிப்பு', 'பெண் நடத்துனர் வசதி', 'வேகக் கட்டுப்பாடு & CCTV', 'முதலுதவி பெட்டி & தீயணைப்பான்'],
          imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
          icon: 'bus'
        },
        {
          id: 'safety-security',
          title: '24/7 வளாக பாதுகாப்பு & CCTV',
          shortDesc: 'பாதுகாப்புப் பணியாளர்கள், 150+ HD CCTV கேமராக்கள் மற்றும் பயோமெட்ரிக் அமைப்புகள்.',
          fullDesc: 'மாணவர் பாதுகாப்பே முதன்மை நோக்கம். முழுமையான CCTV கண்காணிப்பு மற்றும் பார்வையாளர் அனுமதி அட்டை நெறிமுறை.',
          features: ['150+ HD CCTV கேமராக்கள்', 'பார்வையாளர் பாஸ் முறை', 'தானியங்கி SMS வருகை பதிவு', 'தீ தடுப்பு பாதுகாப்பு சான்றிதழ்'],
          imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
          icon: 'shield'
        },
        {
          id: 'medical-support',
          title: 'பள்ளி முதலுதவி & மருத்துவ மையம்',
          shortDesc: 'அனுபவமிக்க செவிலியர் மற்றும் குழந்தைகள் நல மருத்துவர் வருகை வசதி.',
          fullDesc: 'அவசர சிகிச்சை படுக்கைகள், ஆக்ஸிஜன் வசதி, முதலுதவி மருந்துகள் மற்றும் வருடாந்திர மருத்துவ பரிசோதனை.',
          features: ['பயிற்சி பெற்ற மருத்துவ செவிலியர்', 'அருகிலுள்ள மருத்துவமனை இணைப்பு', 'வருடாந்திர மருத்துவ பரிசோதனை', 'அவசர சிகிச்சை வசதிகள்'],
          imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
          icon: 'heart'
        }
      ];
    }

    return [
      {
        id: 'smart-classrooms',
        title: 'Smart Digital Classrooms',
        shortDesc: 'Acoustically treated, air-cooled classrooms equipped with interactive 4K touch panels.',
        fullDesc: 'Every classroom is engineered to maximize student engagement through interactive digital display systems, synchronized with 3D educational multimedia that brings complex concepts to life.',
        features: ['Interactive 4K smart boards', 'Ergonomic dual desks', 'Optimal natural ventilation', 'Digital lesson recordings'],
        imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
        icon: 'monitor'
      },
      {
        id: 'science-labs',
        title: 'Advanced Science Labs',
        shortDesc: 'State-of-the-art separate laboratories for Physics, Chemistry, and Biology.',
        fullDesc: 'Fully equipped modern workstations complying with highest safety norms, allowing students to conduct individual experiments, scientific research, and board practicals under specialized faculty supervision.',
        features: ['Individual experiment stations', 'Fume hoods & emergency showers', 'Digital microscopes & sensor equipment', 'Strict chemical safety protocols'],
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
        icon: 'flask'
      },
      {
        id: 'computer-lab',
        title: 'High-Tech Computer & AI Lab',
        shortDesc: '120+ modern desktop units with high-speed fiber internet and AI tools.',
        fullDesc: 'Empowering future technologists with computer science labs equipped with latest core i7 processors, cloud storage, Python/Scratch programming environments, and safe web access.',
        features: ['High-speed dedicated leased line', 'Python, Java & AI toolkits', 'Robotics & STEM kits', 'Full UPS backup power'],
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
        icon: 'cpu'
      },
      {
        id: 'library',
        title: 'Knowledge Resource Center (Library)',
        shortDesc: '15,000+ volumes, academic journals, national dailies, and digital e-book kiosks.',
        fullDesc: 'A tranquil reading sanctuary housing classical literature, reference encyclopedias, competitive exam guides, and digital cataloging allowing students to foster an enduring love for reading.',
        features: ['15,000+ curated volumes', 'Quiet individual study carrels', 'Digital Kindle / e-library access', 'Weekly book club sessions'],
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
        icon: 'book'
      },
      {
        id: 'sports-arena',
        title: 'Sports Complex & Athletic Grounds',
        shortDesc: 'Multi-acre grounds for football, cricket, volleyball, running track, and indoor courts.',
        fullDesc: 'Dedicated sports infrastructure fostering teamwork, agility, and sportsmanship. Coached by state-certified Physical Education Directors.',
        features: ['200m standard athletic track', 'Turf cricket practice nets', 'Standard basketball court', 'Indoor badminton & table tennis hall'],
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
        icon: 'trophy'
      },
      {
        id: 'transport',
        title: 'Safe Fleet Transport',
        shortDesc: 'GPS-tracked fleet of 25+ buses covering a 35km radius with speed governors.',
        fullDesc: 'Safe, punctual, and comfortable daily commute for students across urban and rural catchments with dedicated lady attendants and emergency SOS alerts.',
        features: ['Real-time GPS tracking', 'Lady attendants on all routes', 'Speed governors & CCTV inside', 'First-aid kit & fire extinguishers'],
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
        icon: 'bus'
      },
      {
        id: 'safety-security',
        title: 'Campus Safety & Surveillance',
        shortDesc: '24/7 security personnel, perimeter monitoring, and comprehensive CCTV network.',
        fullDesc: 'Child safety is our foremost priority. Complete campus surveillance with 150+ high-definition cameras, visitor management software, and rigorous background verification for all staff.',
        features: ['150+ HD CCTV cameras', 'Visitor badge pass protocol', 'Automated SMS entry/exit notification', 'Earthquake & fire safety compliant'],
        imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
        icon: 'shield'
      },
      {
        id: 'medical-support',
        title: 'Health Clinic & Infirmary',
        shortDesc: 'On-campus medical infirmary with qualified nursing staff and visiting pediatrician.',
        fullDesc: 'Fully equipped medical room with emergency beds, oxygen support, essential medicines, and routine annual health/dental checkups for all students.',
        features: ['Resident certified staff nurse', 'Tie-up with multi-specialty hospital nearby', 'Routine dental & vision checkups', 'Comprehensive emergency response plan'],
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
        icon: 'heart'
      }
    ];
  }

  getGalleryItems(lang: LanguageCode = this.langService.currentLang()): GalleryItem[] {
    if (lang === 'ta') {
      return [
        {
          id: 'g1',
          title: 'வருடாந்திர விளையாட்டுப் போட்டி - தடகள வெற்றியாளர்கள்',
          category: 'sports',
          imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
          caption: 'வருடாந்திர விளையாட்டு விழாவில் பதக்கங்களை வென்ற மேல்நிலைப் பள்ளி மாணவர்கள்.',
          date: 'பிப்ரவரி 2025'
        },
        {
          id: 'g2',
          title: 'அறிவியல் & ரோபோடிக்ஸ் கண்காட்சி',
          category: 'science',
          imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
          caption: 'IoT மற்றும் ரோபோடிக்ஸ் தானியங்கி மாதிரிகளை செய்து காட்டிய நடுநிலைப் பள்ளி மாணவர்கள்.',
          date: 'ஜனவரி 2025'
        },
        {
          id: 'g3',
          title: 'பசுமையான நவீன பள்ளி வளாகம்',
          category: 'campus',
          imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
          caption: 'ஸ்ரீ பாரத் கண்ணா பள்ளியின் பரந்த பசுமை வளாகக் காட்சி.',
          date: '2025'
        },
        {
          id: 'g4',
          title: 'வெள்ளி விழா ஆண்டு விழா கொண்டாட்டங்கள்',
          category: 'events',
          imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
          caption: 'பள்ளி மேடையில் மாணவர்களின் பாரம்பரிய கலை மற்றும் நடன நிகழ்ச்சி.',
          date: 'டிசம்பர் 2024'
        },
        {
          id: 'g5',
          title: 'நவீன வேதியியல் ஆய்வகப் பயிற்சி',
          category: 'academics',
          imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
          caption: '12-ஆம் வகுப்பு அறிவியல் பிரிவு மாணவர்கள் ஆய்வகத்தில் சோதனைகள் மேற்கொள்ளும் காட்சி.',
          date: 'நவம்பர் 2024'
        },
        {
          id: 'g6',
          title: 'மாவட்ட அளவிலான கால்பந்து சாம்பியன்ஷிப் கோப்பை',
          category: 'sports',
          imageUrl: 'assets/gallery/football.jpg',
          caption: 'பள்ளிகளுக்கு இடையிலான கால்பந்து போட்டியில் சுழற்கோப்பையை வென்ற நமது பள்ளி அணி.',
          date: 'அக்டோபர் 2024'
        },
        {
          id: 'g7',
          title: 'மழலையர் பள்ளி பட்டமளிப்பு விழா',
          category: 'events',
          imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
          caption: 'மழலையர் பள்ளி முடித்து தொடக்கப் பள்ளிக்கு செல்லும் சுட்டிகளின் மகிழ்ச்சியான தருணம்.',
          date: 'மார்ச் 2025'
        },
        {
          id: 'g8',
          title: 'கணித ஆய்வக செயல்முறை கற்றல்',
          category: 'academics',
          imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
          caption: 'செய்முறை வடிவியல் மாதிரிகள் மூலம் கணிதத்தை எளிமையாக கற்கும் மாணவர்கள்.',
          date: 'ஆகஸ்ட் 2024'
        }
      ];
    }

    return [
      {
        id: 'g1',
        title: 'Annual Sports Meet - Track Champions',
        category: 'sports',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
        caption: 'Senior secondary students celebrating victory at the Annual Sports Meet.',
        date: 'February 2025'
      },
      {
        id: 'g2',
        title: 'STEM & Robotics Exhibition',
        category: 'science',
        imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
        caption: 'Middle school students demonstrating IoT automation models.',
        date: 'January 2025'
      },
      {
        id: 'g3',
        title: 'Sprawling Green School Campus',
        category: 'campus',
        imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
        caption: 'Panoramic view of Shri Bharath Kanna School main academic block.',
        date: '2025'
      },
      {
        id: 'g4',
        title: 'Silver Jubilee Annual Day Celebrations',
        category: 'events',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        caption: 'Classical fusion dance performance by high school students on stage.',
        date: 'December 2024'
      },
      {
        id: 'g5',
        title: 'Advanced Chemistry Laboratory Session',
        category: 'academics',
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
        caption: 'Grade 12 science stream students conducting chemical titrations.',
        date: 'November 2024'
      },
      {
        id: 'g6',
        title: 'District Championship Football Trophy',
        category: 'sports',
        imageUrl: 'assets/gallery/football.jpg',
        caption: 'School football team lifting the Inter-School Rolling Trophy.',
        date: 'October 2024'
      },
      {
        id: 'g7',
        title: 'Kindergarten Graduation Day',
        category: 'events',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        caption: 'Little stars receiving their graduation scrolls with bright smiles.',
        date: 'March 2025'
      },
      {
        id: 'g8',
        title: 'Interactive Smart Math Lab',
        category: 'academics',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
        caption: 'Visualizing geometry and algebra through tangible manipulative models.',
        date: 'August 2024'
      }
    ];
  }

  getVideoItems(lang: LanguageCode = this.langService.currentLang()): VideoItem[] {
    if (lang === 'ta') {
      return [
        {
          id: 'v1',
          title: 'வளாக நடைபயணம் & பள்ளிப் பார்வை 2025',
          category: 'வளாகப் பார்வை',
          thumbnailUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '04:35'
        },
        {
          id: 'v2',
          title: 'வெள்ளி விழா ஆண்டு விழா கொண்டாட்டங்களின் சிறப்பம்சங்கள்',
          category: 'நிகழ்வுகள்',
          thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '06:12'
        },
        {
          id: 'v3',
          title: 'தேசிய அறிவியல் தின கண்டுபிடிப்புகள் & ரோபோடிக்ஸ் கண்காட்சி',
          category: 'அறிவியல்',
          thumbnailUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '03:45'
        }
      ];
    }

    return [
      {
        id: 'v1',
        title: 'Virtual Campus Walkthrough & Tour 2025',
        category: 'Campus Tour',
        thumbnailUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '04:35'
      },
      {
        id: 'v2',
        title: 'Silver Jubilee Annual Day Grand Finale',
        category: 'Events',
        thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '06:12'
      },
      {
        id: 'v3',
        title: 'National Science Day Innovations & Robotics Expo',
        category: 'Science',
        thumbnailUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        duration: '03:45'
      }
    ];
  }

  getLeaders(lang: LanguageCode = this.langService.currentLang()): LeaderItem[] {
    if (lang === 'ta') {
      return [
        {
          name: 'Dr. R. கண்ணா, M.E., Ph.D.',
          role: 'தலைவர் & நிர்வாக அறங்காவலர்',
          qualification: 'கல்வி முன்னோடி & சமூக சேவகர்',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
          bio: 'கல்வி மற்றும் தொழில்துறைத் தலைமைத்துவத்தில் 35 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட Dr. R. கண்ணா அவர்கள், நமது பகுதி குழந்தைகளுக்கு பாரம்பரிய விழுமியங்களுடன் கூடிய உலகத்தரம் வாய்ந்த மலிவான கல்வியை வழங்கும் கனவுடன் இந்த நிறுவனத்தைத் தொடங்கினார்.',
          quote: 'உண்மையான கல்வி என்பது தகவல்களைச் சேகரிப்பது மட்டுமல்ல, சிந்திப்பதற்கும், சக மனிதர்களை நேசிப்பதற்கும், மனிதகுலத்திற்கு சேவை செய்வதற்கும் மனதை பயிற்றுவிப்பதே ஆகும்.'
        },
        {
          name: 'திருமதி. B. மீனாட்சி, M.A., B.Ed.',
          role: 'செயலாளர் & தாளாளர்',
          qualification: 'M.A. ஆங்கில இலக்கியம், B.Ed.',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
          bio: 'நவீன உட்கட்டமைப்பு, தொடர் ஆசிரியர் திறன் மேம்பாட்டுத் திட்டங்கள் மற்றும் மாணவர் பாதுகாப்பு மற்றும் நல்வாழ்விற்கான அர்ப்பணிப்புடன் கூடிய நிர்வாகப் பணிகளை ஆற்றி வருகிறார்.',
          quote: 'ஒவ்வொரு குழந்தையிடமும் ஒரு தனித்துவமான தீப்பொறி உள்ளது. ஆசிரியர்களாகிய நமது கடமை அந்த தீப்பொறியை அழியாத தன்னம்பிக்கை சுடராக மாற்றுவதே ஆகும்.'
        },
        {
          name: 'Dr. K. சௌந்தரராஜன், M.Sc., M.Phil., Ph.D., B.Ed.',
          role: 'முதல்வர்',
          qualification: 'மூத்த கல்வியாளர் & தேசிய தகுதி விருதாளர்',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
          bio: 'முன்னணி கல்வி நிறுவனங்களில் 28 ஆண்டுகள் கல்வித் தலைமை அனுபவம் கொண்டவர். செயல்முறை STEM கற்றல், இருமொழி தொடர்பு திறன் மற்றும் ஒழுக்கமான கல்வித் தரத்தை முன்னெடுத்துச் செல்பவர்.',
          quote: 'நாங்கள் எங்கள் மாணவர்களைத் தேர்வுகளில் தேர்ச்சி பெற வைப்பது மட்டுமல்லாமல், வாழ்க்கையின் சவால்களை நேர்மையோடும் துணிவோடும் எதிர்கொள்ளத் தயார்படுத்துகிறோம்.'
        }
      ];
    }

    return [
      {
        name: 'Dr. R. Kanna, M.E., Ph.D.',
        role: 'Chairman & Managing Trustee',
        qualification: 'Educational Visionary & Philanthropist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        bio: 'With over 35 years in education and industrial leadership, Dr. R. Kanna established the institution with a dream to provide world-class, affordable education rooted in traditional values to the children of our region.',
        quote: 'True education is not merely the accumulation of facts, but the training of the mind to think, empathize, and serve humanity.'
      },
      {
        name: 'Smt. B. Meenakshi, M.A., B.Ed.',
        role: 'Secretary & Correspondent',
        qualification: 'M.A. English Literature, B.Ed.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        bio: 'A passionate administrator dedicated to modern infrastructure, holistic teacher enrichment programs, and continuous pastoral care for student safety and wellness.',
        quote: 'Every child possesses a unique spark. Our duty as educators is to fan that spark into an everlasting flame of confidence.'
      },
      {
        name: 'Dr. K. Soundararajan, M.Sc., M.Phil., Ph.D., B.Ed.',
        role: 'Principal',
        qualification: 'Senior Educator & National Merit Awardee',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        bio: 'Bringing 28 years of academic leadership in premier institutions. Champion of experiential STEM learning, bilingual communication skills, and disciplined academic rigor.',
        quote: 'We prepare our students not just to clear examinations, but to courageously face the complexities of life with integrity.'
      }
    ];
  }

  getTestimonials(lang: LanguageCode = this.langService.currentLang()): TestimonialItem[] {
    if (lang === 'ta') {
      return [
        {
          id: 't1',
          name: 'Dr. V. முருகானந்தம்',
          role: 'பெற்றோர் (வகுப்பு 10 மாணவர்)',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
          quote: 'ஸ்ரீ பாரத் கண்ணா பள்ளியில் என் மகன் சேர்ந்த பிறகு அவனது கல்வி மற்றும் ஒழுக்கத்தில் பெரும் மாற்றத்தைக் காண்கிறேன். ஆசிரியர்களின் தனிப்பயன் வழிகாட்டல் அற்புதமானது.',
          rating: 5
        },
        {
          id: 't2',
          name: 'திருமதி. S. ராதிகா ராஜேஷ்',
          role: 'பெற்றோர் (வகுப்பு 4 & 7 மாணவர்கள்)',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
          quote: 'வேலைக்குச் செல்லும் தாயாக, பள்ளி பேருந்துகளின் பாதுகாப்பான பயணம் மற்றும் மொபைல் ஆப் வழியான தினசரி தகவல் பரிமாற்றம் எனக்கு மிகுந்த மன அமைதியைத் தருகிறது.',
          rating: 5
        },
        {
          id: 't3',
          name: 'Er. அஸ்வின் கண்ணா',
          role: 'முன்னாள் மாணவர் (2018 பேட்ச்), மென்பொருள் வல்லுநர்',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
          quote: 'இங்கு எனக்குக் கிடைத்த கணித அடிப்படை அறிவு, கணினி கோடிங் மற்றும் ஆங்கில பேச்சுத் திறன் தான் சர்வதேச தொழில்நுட்ப நிறுவனத்தில் உயர எனக்குப் பெருமளவு உதவியது.',
          rating: 5
        }
      ];
    }

    return [
      {
        id: 't1',
        name: 'Dr. V. Muruganandham',
        role: 'Parent of Class 10 Student',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
        quote: 'The transformation in my son has been incredible. The teachers give individual care and do not just push for marks; they nurture confidence, discipline, and scientific temperament.',
        rating: 5
      },
      {
        id: 't2',
        name: 'Mrs. S. Radhika Rajesh',
        role: 'Parent of Class 4 & Class 7 Students',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        quote: 'As a working mother, the safe transport system and active communication through mobile portal give me total peace of mind. Truly the finest school in our district.',
        rating: 5
      },
      {
        id: 't3',
        name: 'Er. Ashwin Kanna',
        role: 'Alumnus (Batch of 2018), Software Architect',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
        quote: 'The strong foundation in mathematics, computer programming, and public speaking I received at Shri Bharath Kanna School shaped my international career in technology.',
        rating: 5
      }
    ];
  }

  getDisclosures(lang: LanguageCode = this.langService.currentLang()): DisclosureItem[] {
    if (lang === 'ta') {
      return [
        {
          docNo: 'MPD-01',
          title: 'பள்ளி அங்கீகாரம் & மாநில அரசு ஏற்புச் சான்றிதழ்',
          category: 'சட்டம் & ஏற்புரிமை',
          issueDate: '15-06-2024',
          fileSize: '1.8 MB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-02',
          title: 'சங்கம் / அறக்கட்டளை பதிவு பத்திரம் & புதுப்பித்தல்',
          category: 'நிர்வாகம்',
          issueDate: '02-04-2023',
          fileSize: '2.4 MB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-03',
          title: 'மாநில அரசிடமிருந்து தடையின்மைச் சான்றிதழ் (NOC)',
          category: 'சட்டப்பூர்வ இணக்கம்',
          issueDate: '10-08-2022',
          fileSize: '1.2 MB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-04',
          title: 'கட்டட கட்டமைப்பு பாதுகாப்புச் சான்றிதழ் (PWD)',
          category: 'வளாகப் பாதுகாப்பு',
          issueDate: '12-01-2025',
          fileSize: '950 KB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-05',
          title: 'தீயணைப்பு மற்றும் மீட்பு பணிகள் பாதுகாப்புச் சான்றிதழ்',
          category: 'வளாகப் பாதுகாப்பு',
          issueDate: '18-02-2025',
          fileSize: '820 KB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-06',
          title: 'குடிநீர் தூய்மை மற்றும் சுகாதாரச் சான்றிதழ்',
          category: 'சுகாதாரம் & நலம்',
          issueDate: '05-01-2025',
          fileSize: '740 KB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-07',
          title: 'கட்டண நிர்ணயக் குழு அங்கீகரித்த வருடாந்திர கட்டண விபரம்',
          category: 'நிதி வெளிப்படைத்தன்மை',
          issueDate: '01-03-2025',
          fileSize: '1.1 MB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-08',
          title: 'பள்ளி மேலாண்மைக் குழு (SMC) உறுப்பினர் பட்டியல்',
          category: 'நிர்வாகம்',
          issueDate: '10-06-2024',
          fileSize: '650 KB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-09',
          title: 'பெற்றோர் ஆசிரியர் சங்கம் (PTA) அமைப்பு விதிமுறைகள்',
          category: 'சமூகம்',
          issueDate: '20-07-2024',
          fileSize: '780 KB',
          fileType: 'PDF'
        },
        {
          docNo: 'MPD-10',
          title: 'கடந்த 3 ஆண்டுகளின் அரசு பொதுத்தேர்வு முடிவுகள் ஆய்வு',
          category: 'கல்விப் பதிவுகள்',
          issueDate: '15-05-2024',
          fileSize: '1.5 MB',
          fileType: 'PDF'
        }
      ];
    }

    return [
      {
        docNo: 'MPD-01',
        title: 'Affiliation & State Recognition Certificate',
        category: 'Legal & Accreditation',
        issueDate: '15-06-2024',
        fileSize: '1.8 MB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-02',
        title: 'Society / Trust Registration Deed & Renewal',
        category: 'Governance',
        issueDate: '02-04-2023',
        fileSize: '2.4 MB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-03',
        title: 'No Objection Certificate (NOC) from State Govt',
        category: 'Statutory Compliances',
        issueDate: '10-08-2022',
        fileSize: '1.2 MB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-04',
        title: 'Structural Building Safety Certificate (PWD)',
        category: 'Campus Safety',
        issueDate: '12-01-2025',
        fileSize: '950 KB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-05',
        title: 'Fire & Rescue Safety Certificate',
        category: 'Campus Safety',
        issueDate: '18-02-2025',
        fileSize: '820 KB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-06',
        title: 'Drinking Water Purity & Sanitation Certificate',
        category: 'Health & Hygiene',
        issueDate: '05-01-2025',
        fileSize: '740 KB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-07',
        title: 'Annual Fee Structure Approved by Committee',
        category: 'Financial Disclosures',
        issueDate: '01-03-2025',
        fileSize: '1.1 MB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-08',
        title: 'School Management Committee (SMC) Member List',
        category: 'Governance',
        issueDate: '10-06-2024',
        fileSize: '650 KB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-09',
        title: 'Parent-Teacher Association (PTA) Constitution',
        category: 'Community',
        issueDate: '20-07-2024',
        fileSize: '780 KB',
        fileType: 'PDF'
      },
      {
        docNo: 'MPD-10',
        title: 'Last 3-Year Board Examination Result Analysis',
        category: 'Academic Records',
        issueDate: '15-05-2024',
        fileSize: '1.5 MB',
        fileType: 'PDF'
      }
    ];
  }

  getCareerOpenings(lang: LanguageCode = this.langService.currentLang()): CareerOpening[] {
    if (lang === 'ta') {
      return [
        {
          id: 'c1',
          role: 'முதுகலை ஆசிரியர் (PGT) - இயற்பியல்',
          department: 'மேல்நிலைப் பள்ளி அறிவியல் பிரிவு',
          experience: '3 - 5 ஆண்டுகள் CBSE / மெட்ரிக் பள்ளியில் அனுபவம்',
          qualification: 'M.Sc. Physics with B.Ed. (ஆங்கிலப் புலமை அவசியம்)',
          vacancies: 2,
          type: 'முழு நேரம்'
        },
        {
          id: 'c2',
          role: 'பட்டதாரி ஆசிரியர் (TGT) - கணிதம்',
          department: 'உயர்நிலைப் பள்ளி பிரிவு',
          experience: '2 - 4 ஆண்டுகள் கற்பித்தல் அனுபவம்',
          qualification: 'B.Sc./M.Sc. Mathematics with B.Ed.',
          vacancies: 2,
          type: 'முழு நேரம்'
        },
        {
          id: 'c3',
          role: 'தொடக்கப் பள்ளி ஆசிரியர் (PRT) - ஆங்கிலம் & சமூக அறிவியல்',
          department: 'தொடக்கப் பள்ளி பிரிவு',
          experience: '1 - 3 ஆண்டுகள் அனுபவம்',
          qualification: 'B.A. English / History with B.Ed. or D.T.Ed.',
          vacancies: 3,
          type: 'முழு நேரம்'
        },
        {
          id: 'c4',
          role: 'மழலையர் பள்ளி ஒருங்கிணைப்பாளர் & தாய்-ஆசிரியர்',
          department: 'ஆரம்பக் கல்வி பிரிவு',
          experience: '2+ ஆண்டுகள் மாண்டிசோரி / மழலையர் பள்ளியில்',
          qualification: 'ஏதேனும் ஒரு பட்டம் மற்றும் NTT / ஆரம்பக் கல்வி சான்றிதழ்',
          vacancies: 2,
          type: 'முழு நேரம்'
        },
        {
          id: 'c5',
          role: 'ரோபோடிக்ஸ் & STEM ஆய்வக பயிற்றுநர்',
          department: 'தொழில்நுட்ப மையம்',
          experience: '1 - 2 ஆண்டுகள் Arduino/Python கற்பித்தல்',
          qualification: 'B.E./B.Tech (CSE/ECE/IT) or MCA',
          vacancies: 1,
          type: 'முழு நேரம்'
        }
      ];
    }

    return [
      {
        id: 'c1',
        role: 'Post Graduate Teacher (PGT) - Physics',
        department: 'Senior Secondary Science',
        experience: '3 - 5 Years in reputed CBSE/Matric School',
        qualification: 'M.Sc. Physics with B.Ed. (Fluency in English mandatory)',
        vacancies: 2,
        type: 'Full Time'
      },
      {
        id: 'c2',
        role: 'Trained Graduate Teacher (TGT) - Mathematics',
        department: 'Secondary Wing',
        experience: '2 - 4 Years teaching experience',
        qualification: 'B.Sc./M.Sc. Mathematics with B.Ed.',
        vacancies: 2,
        type: 'Full Time'
      },
      {
        id: 'c3',
        role: 'Primary Teacher (PRT) - English & Social Studies',
        department: 'Primary Wing',
        experience: '1 - 3 Years',
        qualification: 'B.A. English / History with B.Ed. or D.T.Ed.',
        vacancies: 3,
        type: 'Full Time'
      },
      {
        id: 'c4',
        role: 'Kindergarten Coordinator & Mother Teacher',
        department: 'Early Childhood Wing',
        experience: '2+ Years in Montessori / Kindergarten',
        qualification: 'Any Degree with NTT / Early Childhood Certification',
        vacancies: 2,
        type: 'Full Time'
      },
      {
        id: 'c5',
        role: 'Robotics & STEM Lab Instructor',
        department: 'Technology Center',
        experience: '1 - 2 Years teaching Arduino/Python/Robotics',
        qualification: 'B.E./B.Tech (CSE/ECE/IT) or MCA',
        vacancies: 1,
        type: 'Full Time'
      }
    ];
  }

  getNews(lang: LanguageCode = this.langService.currentLang()): NewsItem[] {
    if (lang === 'ta') {
      return [
        {
          id: 'n1',
          title: '2025 - 2026 கல்வி ஆண்டுக்கான Pre-KG முதல் 11-ஆம் வகுப்பு வரை மாணவர் சேர்க்கை தொடங்கப்பட்டுள்ளது.',
          date: 'மார்ச் 01, 2025',
          category: 'சேர்க்கை',
          summary: 'இணையதளம் வழியே மற்றும் பள்ளி நிர்வாக அலுவலகத்தில் சேர்க்கை விண்ணப்பப் படிவங்கள் வழங்கப்படுகின்றன.',
          isImportant: true
        },
        {
          id: 'n2',
          title: 'மாநில அளவிலான அறிவியல் மற்றும் திறனாய்வுத் தேர்வில் நமது பள்ளி மாணவர்கள் தங்கம் வென்று சாதனை.',
          date: 'பிப்ரவரி 24, 2025',
          category: 'சாதனைகள்',
          summary: 'மாநில அளவில் முதல் 50 இடங்களுக்குள் நமது பள்ளியைச் சேர்ந்த 14 மாணவர்கள் இடம்பிடித்து 3 தங்கப் பதக்கங்களை வென்றுள்ளனர்.',
          isImportant: false
        },
        {
          id: 'n3',
          title: 'வருடாந்திர விளையாட்டு விழா & தடகளப் போட்டிகள் கோலாகலமாக நிறைவடைந்தது.',
          date: 'பிப்ரவரி 10, 2025',
          category: 'விளையாட்டு',
          summary: '800-க்கும் மேற்பட்ட மாணவர் விளையாட்டு வீரர்கள் 45 தடகளப் போட்டிகளில் பங்கேற்றனர். புளூ ஹவுஸ் அணி சாம்பியன்ஷிப் கோப்பையை வென்றது.',
          isImportant: false
        }
      ];
    }

    return [
      {
        id: 'n1',
        title: 'Admissions Open for Academic Year 2025 - 2026 for Pre-KG to Grade 11',
        date: 'March 01, 2025',
        category: 'Admissions',
        summary: 'Registration forms are available online and at the school administrative desk. Entrance assessment schedules announced.',
        isImportant: true
      },
      {
        id: 'n2',
        title: 'Outstanding Performance in State Level Science Talent Search Examination',
        date: 'February 24, 2025',
        category: 'Achievements',
        summary: '14 students from our school secured top 50 state ranks with 3 gold medals in the junior division.',
        isImportant: false
      },
      {
        id: 'n3',
        title: 'Annual Sports Day & Athletic Meet 2025 Concluded with Flying Colors',
        date: 'February 10, 2025',
        category: 'Sports',
        summary: 'Over 800 student athletes participated across 45 track and field events. Blue House lifted the Overall Championship Shield.',
        isImportant: false
      }
    ];
  }
}
