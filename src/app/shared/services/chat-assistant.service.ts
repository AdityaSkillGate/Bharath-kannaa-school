import { Injectable, inject, signal } from '@angular/core';
import { ChatKnowledgeItem, LeadCaptureData } from '../models/chat.models';
import { NotificationService } from './notification.service';
import { LanguageService, LanguageCode } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ChatAssistantService {
  private readonly notificationService = inject(NotificationService);
  private readonly langService = inject(LanguageService);

  readonly isSpeaking = signal<boolean>(false);
  private voices: SpeechSynthesisVoice[] = [];
  private currentAudio: HTMLAudioElement | null = null;

  constructor() {
    this.initVoices();
  }

  private initVoices(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const populate = () => {
        try {
          this.voices = window.speechSynthesis.getVoices();
        } catch {}
      };
      populate();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = populate;
      }
    }
  }

  getChatbotName(lang: LanguageCode = this.langService.currentLang()): string {
    return lang === 'ta' ? 'ஸ்ரீ பாரத் கண்ணா AI உதவியாளர்' : 'Shree Bharath Kanna AI Assistant';
  }

  getWelcomeMessage(lang: LanguageCode = this.langService.currentLang()): string {
    return lang === 'ta'
      ? '👋 ஸ்ரீ பாரத் கண்ணா பள்ளிக்கு தங்களை அன்புடன் வரவேற்கிறோம்.\nஇன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?'
      : '👋 Welcome to Shree Bharath Kanna School.\nHow can I help you today?';
  }

  getFallbackMessage(lang: LanguageCode = this.langService.currentLang()): string {
    return lang === 'ta'
      ? 'மன்னிக்கவும், அந்த தகவலை என்னால் கண்டுபிடிக்க முடியவில்லை.\nதயவுசெய்து எங்கள் அலுவலகத்தை நேரடியாகத் தொடர்புவும் அல்லது சேர்க்கை படிவத்தை சமர்ப்பிக்கவும்.'
      : `I couldn't find that information.\nPlease contact our office or submit an enquiry.`;
  }

  getQuickActions(lang: LanguageCode = this.langService.currentLang()): string[] {
    return lang === 'ta'
      ? [
          'சேர்க்கை தகவல்',
          'கட்டண விவரம்',
          'பள்ளி வசதிகள்',
          'பேருந்து & போக்குவரத்து',
          'பள்ளி தொடர்பு',
          'கல்வி & பாடத்திட்டம்',
          'பள்ளி நேரங்கள்',
          'தேவையான ஆவணங்கள்',
          'பள்ளி வருகை முன்பதிவு',
          'பெற்றோர் உதவி'
        ]
      : [
          'Admission Enquiry',
          'Fee Structure',
          'School Facilities',
          'Transport Details',
          'Contact School',
          'Academic Information',
          'School Timings',
          'Required Documents',
          'Campus Visit Booking',
          'Parent Support'
        ];
  }

  private readonly knowledgeBase: ChatKnowledgeItem[] = [
    // 1. School Overview
    {
      id: 'kb-overview',
      category: 'School Overview',
      categoryTa: 'பள்ளி பற்றிய விவரம்',
      title: 'About Shree Bharath Kanna School',
      titleTa: 'ஸ்ரீ பாரத் கண்ணா பள்ளி வரலாறு',
      keywords: ['about', 'history', 'founder', 'founded', 'overview', 'who are you', 'kanna school', 'sbkmhss', 'vision', 'motto'],
      keywordsTa: ['பற்றி', 'வரலாறு', 'தொடக்கம்', 'யார்', 'கண்ணா பள்ளி', 'தலைவர்', 'எப்போது'],
      patterns: [/about (school|bharath kanna|sbkmhss)/i, /who founded/i, /when was.*(founded|started|established)/i, /school overview/i, /history/i, /பள்ளி.*பற்றி/i, /வரலாறு/i],
      answer: `🏛️ **Shri Bharath Kanna Matriculation Higher Secondary School** was established in **1998** under the visionary leadership of our Chairman **Dr. R. Kanna**.

For over 25+ years, we have been delivering holistic education that blends academic distinction with deep ethical values. Our sprawling lush-green campus accommodates 2,800+ students from Kindergarten to Higher Secondary (Std 12) with a 100% board examination record.`,
      answerTa: `🏛️ **ஸ்ரீ பாரத் கண்ணா மெட்ரிகுலேஷன் மேல்நிலைப் பள்ளி** 1998-ஆம் ஆண்டு நமது தலைவர் **Dr. R. கண்ணா** அவர்களால் நிறுவப்பட்டது.

கடந்த 25+ ஆண்டுகளுக்கும் மேலாக சிறந்த ஒழுக்கம், நவீன அறிவியல் கல்வி மற்றும் பண்பாட்டு விழுமியங்களை வழங்கி வருகிறோம். மழலையர் பள்ளி முதல் 12-ஆம் வகுப்பு வரை 2,800-க்கும் மேற்பட்ட மாணவ-மாணவிகள் இங்கு கல்வி பயின்று 100% அரசு பொதுத்தேர்வு தேர்ச்சி பெற்று வருகின்றனர்.`,
      suggestedFollowUps: ['Academic Information', 'School Facilities', 'Admission Enquiry'],
      suggestedFollowUpsTa: ['கல்வி & பாடத்திட்டம்', 'பள்ளி வசதிகள்', 'சேர்க்கை தகவல்'],
      actionLink: '/about/about-us',
      actionText: 'Read Complete History',
      actionTextTa: 'முழு வரலாறு படிக்க'
    },

    // 2. Admissions
    {
      id: 'kb-admissions',
      category: 'Admissions',
      categoryTa: 'சேர்க்கை தகவல்',
      title: 'Admission Process & Guidelines',
      titleTa: 'மாணவர் சேர்க்கை நடைமுறைகள்',
      keywords: ['admission', 'admissions', 'apply', 'enroll', 'enrolment', 'join', 'seat', 'procedure', 'how to apply', 'registration'],
      keywordsTa: ['சேர்க்கை', 'விண்ணப்பம்', 'இணைதல்', 'சீட்', 'அட்மிஷன்', 'வகுப்பு', 'விண்ணப்பிக்க'],
      patterns: [/how to (apply|join|enroll|get admission)/i, /admission (process|procedure|dates|open)/i, /admissions open/i, /application form/i, /சேர்க்கை/i, /அட்மிஷன்/i],
      answer: `📋 **Admissions Open for Academic Year 2025 - 2026** (Pre-KG to Std 11)!

**4-Step Simple Admission Process:**
1. **Enquiry & Registration**: Submit online enquiry or visit campus.
2. **Campus Tour & Interaction**: Informal student-parent interaction.
3. **Document Verification**: Verify birth certificate, transfer certificate & marksheet.
4. **Fee Payment & Confirmation**: Receive official admission pack & uniform kit.

Would you like to fill our quick admission lead form now?`,
      answerTa: `📋 **2025 - 2026 கல்வி ஆண்டிற்கான மாணவர் சேர்க்கை நடைபெறுகிறது** (Pre-KG முதல் 11-ஆம் வகுப்பு வரை)!

**4 எளிய சேர்க்கை படிகள்:**
1. **விண்ணப்பப் பதிவு**: இணையதளம் வழியே அல்லது பள்ளி அலுவலகத்தில் பதிவு செய்தல்.
2. **பள்ளி வளாகப் பார்வை**: பெற்றோர் & மாணவருடன் எளிய கலந்துரையாடல்.
3. **சான்றிதழ் சரிபார்ப்பு**: பிறப்புச் சான்றிதழ், மாற்றுச் சான்றிதழ் (TC) சரிபார்த்தல்.
4. **கட்டணம் செலுத்தி உறுதி செய்தல்**: பள்ளி சீருடை மற்றும் புத்தகப் தொகுப்பு பெறுதல்.

உடனடி சேர்க்கைக்கு எங்கள் படிவத்தை பூர்த்தி செய்ய விரும்புகிறீர்களா?`,
      suggestedFollowUps: ['Required Documents', 'Fee Structure', 'Eligibility Criteria'],
      suggestedFollowUpsTa: ['தேவையான ஆவணங்கள்', 'கட்டண விவரம்', 'வயது வரம்பு'],
      actionLink: '/admissions/admissions',
      actionText: 'Open Admissions Page',
      actionTextTa: 'சேர்க்கை பக்கம் பார்க்க'
    },

    // 3. Eligibility Criteria
    {
      id: 'kb-eligibility',
      category: 'Eligibility Criteria',
      categoryTa: 'வயது வரம்பு & தகுதி',
      title: 'Age Eligibility Criteria',
      titleTa: 'சேர்க்கைக்கான வயது வரம்பு',
      keywords: ['eligibility', 'age', 'cutoff', 'cut-off', 'minimum age', 'criteria', 'which class', 'age limit'],
      keywordsTa: ['வயது', 'தகுதி', 'வரம்பு', 'எந்த வயது', 'எத்தனை வயது'],
      patterns: [/age (limit|criteria|requirement|cutoff)/i, /how old/i, /eligibility criteria/i, /which age for/i, /வயது வரம்பு/i, /வயது/i],
      answer: `🎂 **Age Eligibility Criteria (as of 31st July of admission year):**
• **Pre-KG**: 2.5 to 3 years
• **LKG**: 3+ years
• **UKG**: 4+ years
• **Class 1**: 5+ years
• **Classes 2 to 9**: Based on valid Transfer Certificate (TC) & previous academic clearance.
• **Class 11**: Based on 10th Board Marks (SSLC / CBSE / ICSE) across Bio-Maths, CS-Maths, Pure Science & Commerce streams.`,
      answerTa: `🎂 **சேர்க்கைக்கான வயது வரம்பு (ஜூலை 31-ஆம் தேதியின்படி):**
• **Pre-KG**: 2.5 முதல் 3 வயது வரை
• **LKG**: 3+ வயது
• **UKG**: 4+ வயது
• **1-ஆம் வகுப்பு**: 5+ வயது
• **2 முதல் 9-ஆம் வகுப்பு**: முந்தைய பள்ளியின் மாற்றுச் சான்றிதழ் (TC) மற்றும் மதிப்பெண் அடிப்படையில்.
• **11-ஆம் வகுப்பு**: 10-ஆம் வகுப்பு பொதுத்தேர்வு மதிப்பெண் அடிப்படையில் (Bio-Maths, CS-Maths, Pure Science, Commerce பிரிவுகள்).`,
      suggestedFollowUps: ['Required Documents', 'Admission Enquiry', 'Academic Information'],
      suggestedFollowUpsTa: ['தேவையான ஆவணங்கள்', 'சேர்க்கை தகவல்', 'கல்வி விவரம்'],
      actionLink: '/admissions/admissions',
      actionText: 'Check Eligibility Table',
      actionTextTa: 'தகுதி விவர அட்டவணை'
    },

    // 4. Required Documents
    {
      id: 'kb-documents',
      category: 'Required Documents',
      categoryTa: 'தேவையான ஆவணங்கள்',
      title: 'Required Documents Checklist',
      titleTa: 'சேர்க்கைக்கு சமர்ப்பிக்க வேண்டிய ஆவணங்கள்',
      keywords: ['documents', 'certificate', 'tc', 'birth certificate', 'aadhar', 'emis', 'proof', 'checklist', 'what papers'],
      keywordsTa: ['ஆவணம்', 'சான்றிதழ்', 'டிசி', 'பிறப்பு சான்றிதழ்', 'ஆதார்', 'புகைப்படம்', 'எமிஸ்'],
      patterns: [/what documents/i, /required documents/i, /certificates needed/i, /document checklist/i, /bring for admission/i, /தேவையான ஆவணங்கள்/i, /சான்றிதழ்/i],
      answer: `📑 **Required Documents for Admission Checklist:**
1. Original Birth Certificate (with 2 photocopies).
2. Transfer Certificate (TC) countersigned by proper educational authorities (for Std 2 & above).
3. Student & Parent Aadhar Card copies.
4. Community Certificate copy (where applicable).
5. EMIS Number from previous recognized school.
6. 4 recent passport-size student color photographs.
7. Previous year Term / Annual progress report card.`,
      answerTa: `📑 **சேர்க்கைக்கு தேவையான ஆவணங்கள் பட்டியல்:**
1. அசல் பிறப்புச் சான்றிதழ் (மற்றும் 2 நகல்கள்).
2. கல்வித் துறையால் அங்கீகரிக்கப்பட்ட மாற்றுச் சான்றிதழ் (TC) (2-ஆம் வகுப்பு மற்றும் அதற்கு மேல்).
3. மாணவர் மற்றும் பெற்றோரின் ஆதார் அட்டை நகல்கள்.
4. சாதிச் சான்றிதழ் நகல் (பொருந்தினால்).
5. முந்தைய பள்ளியின் EMIS எண்.
6. மாணவரின் 4 சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படங்கள்.
7. முந்தைய ஆண்டின் மதிப்பெண் பட்டியல் / அறிக்கை அட்டை.`,
      suggestedFollowUps: ['Admission Enquiry', 'Fee Structure', 'School Timings'],
      suggestedFollowUpsTa: ['சேர்க்கை தகவல்', 'கட்டண விவரம்', 'பள்ளி நேரங்கள்'],
      actionLink: '/admissions/admissions',
      actionText: 'View Document Checklist',
      actionTextTa: 'ஆவணப் பட்டியல் பார்க்க'
    },

    // 5. Fee Structure
    {
      id: 'kb-fees',
      category: 'Fee Structure',
      categoryTa: 'கட்டண விவரம்',
      title: 'Fee Structure & Payment Schedule',
      titleTa: 'பள்ளிக் கட்டணம் & தவணை விவரங்கள்',
      keywords: ['fee', 'fees', 'cost', 'tuition', 'payment', 'installment', 'scholarship', 'how much', 'expense'],
      keywordsTa: ['கட்டணம்', 'பீஸ்', 'பணம்', 'தவணை', 'உதவித்தொகை', 'எவ்வளவு கட்டணம்'],
      patterns: [/(\bfees?\b|how much.*fee|fee structure|tuition fees|payment installment|scholarship|cost of study)/i, /கட்டணம்/i, /பீஸ்/i],
      answer: `💳 **Transparent & Affordable Fee Structure:**
• We strictly adhere to Tamil Nadu State Fee Determination Committee guidelines.
• Tuition fees are payable in **3 flexible term installments** (June, October, January).
• **Zero hidden charges**: Comprehensive breakdown including tuition, digital labs, sports, and library.
• **Merit Scholarships**: Special fee concessions available for top academic performers, state sports medalists, and deserving underprivileged students.

For exact grade-wise fee schedule, please visit our accounts desk or submit an enquiry.`,
      answerTa: `💳 **வெளிப்படையான மற்றும் மலிவான கட்டணக் கட்டமைப்பு:**
• தமிழ்நாடு அரசு கட்டண நிர்ணயக் குழுவின் வழிகாட்டுதல்களை முழுமையாகப் பின்பற்றுகிறோம்.
• பள்ளிக் கட்டணத்தை **3 எளிய தவணைகளில்** (ஜூன், அக்டோபர், ஜனவரி) செலுத்தலாம்.
• மறைமுக கட்டணங்கள் ஏதுமில்லை (கல்வி, கணினி ஆய்வகம், விளையாட்டு மற்றும் நூலகம் உள்ளடக்கியது).
• **கல்வி உதவித்தொகை**: பொதுத்தேர்வில் அதிக மதிப்பெண் பெறும் மாணவர்கள், விளையாட்டு சாம்பியன்கள் மற்றும் பொருளாதாரத்தில் பின்தங்கிய தகுதியான மாணவர்களுக்கு கட்டணச் சலுகை உண்டு.`,
      suggestedFollowUps: ['Admission Enquiry', 'Transport Details', 'Contact School'],
      suggestedFollowUpsTa: ['சேர்க்கை தகவல்', 'பேருந்து & போக்குவரத்து', 'பள்ளி தொடர்பு'],
      actionLink: '/admissions/admissions',
      actionText: 'Enquire About Fees',
      actionTextTa: 'கட்டண விவரம் அறிய'
    },

    // 6. Academic Curriculum & CBSE Information
    {
      id: 'kb-curriculum',
      category: 'Academic Curriculum',
      categoryTa: 'கல்வி & பாடத்திட்டம்',
      title: 'Curriculum & CBSE/State Board Foundation',
      titleTa: 'பாடத்திட்டம் & போட்டித் தேர்வுப் பயிற்சி',
      keywords: ['curriculum', 'cbse', 'syllabus', 'state board', 'samacheer', 'neet', 'jee', 'subjects', 'stream', 'matriculation'],
      keywordsTa: ['பாடத்திட்டம்', 'கல்வி', 'நீட்', 'ஜேஇஇ', 'சமச்சீர் கல்வி', 'சிபிஎஸ்இ', 'பாடங்கள்'],
      patterns: [/curriculum/i, /cbse/i, /state board/i, /samacheer kalvi/i, /syllabus/i, /neet.*jee/i, /பாடத்திட்டம்/i, /நீட்/i],
      answer: `📚 **Academic Framework & Syllabi:**
• We follow the **Tamil Nadu Matriculation & State Board (Samacheer Kalvi)** curriculum, enriched with **CBSE/NCERT foundational modules** in Mathematics, Science, and English.
• **Higher Secondary Streams (Std 11 & 12)**:
  1. *Group 1*: Physics, Chemistry, Biology, Mathematics
  2. *Group 2*: Physics, Chemistry, Computer Science, Mathematics
  3. *Group 3*: Physics, Chemistry, Biology, Computer Science
  4. *Group 4*: Commerce, Accountancy, Economics, Business Maths / Computer App
• **NEET / JEE / CA-Foundation**: Specialized integrated weekend coaching with top subject trainers.`,
      answerTa: `📚 **கல்வி முறை & பாடத்திட்டம்:**
• **தமிழ்நாடு மெட்ரிகுலேஷன் & சமச்சீர் கல்வி** பாடத்திட்டத்துடன் **CBSE/NCERT** கணித மற்றும் அறிவியல் அடிப்படைப் பயிற்சிகள் இணைக்கப்பட்டுள்ளன.
• **மேல்நிலைப் பிரிவு பாடப்பிரிவுகள் (11 & 12-ஆம் வகுப்பு)**:
  1. இயற்பியல், வேதியியல், உயிரியல், கணிதம் (Bio-Maths)
  2. இயற்பியல், வேதியியல், கணினி அறிவியல், கணிதம் (CS-Maths)
  3. இயற்பியல், வேதியியல், உயிரியல், கணினி அறிவியல் (Pure Science)
  4. வணிகவியல், கணக்குப்பதிவியல், பொருளியல், வணிகக் கணிதம் (Commerce)
• **NEET / JEE / CA-Foundation**: அனுபவமிக்க வல்லுநர்களால் ஒருங்கிணைந்த வார இறுதி சிறப்புப் பயிற்சி அளிக்கப்படுகிறது.`,
      suggestedFollowUps: ['Academic Information', 'School Facilities', 'School Timings'],
      suggestedFollowUpsTa: ['கல்வி & பாடத்திட்டம்', 'பள்ளி வசதிகள்', 'பள்ளி நேரங்கள்'],
      actionLink: '/academics',
      actionText: 'Explore Complete Curriculum',
      actionTextTa: 'முழு பாடத்திட்டம் பார்க்க'
    },

    // 7. Facilities & Smart Classrooms
    {
      id: 'kb-facilities',
      category: 'School Facilities',
      categoryTa: 'பள்ளி வசதிகள்',
      title: 'Campus Infrastructure & Smart Classrooms',
      titleTa: 'நவீன பள்ளி வளாகம் & டிஜிட்டல் வகுப்பறைகள்',
      keywords: ['facilities', 'smart classroom', 'smart board', 'classrooms', 'infrastructure', 'campus', 'amenities'],
      keywordsTa: ['வசதிகள்', 'வகுப்பறை', 'ஸ்மார்ட் கிளாஸ்', 'கட்டிடம்', 'வளாகம்', 'டிஜிட்டல் பலகை'],
      patterns: [/facilities/i, /smart classroom/i, /interactive board/i, /campus facilities/i, /amenities/i, /வசதிகள்/i, /வகுப்பறை/i],
      answer: `🏫 **World-Class Campus Infrastructure:**
• **Smart 4K Interactive Classrooms**: Acoustically engineered and air-cooled with interactive digital whiteboards.
• **High-Tech Laboratories**: Dedicated Physics, Chemistry, and Biology research workstations.
• **AI & Computer Labs**: 120+ Core i7 computers with fiber-optic internet.
• **Knowledge Resource Library**: 15,000+ volumes, educational journals, and digital kiosks.
• **Safe & Eco-Friendly**: RO purified drinking water stations, full solar power backup, and landscaped open gardens.`,
      answerTa: `🏫 **உலகத்தரம் வாய்ந்த பள்ளி உட்கட்டமைப்பு வசதிகள்:**
• **4K ஸ்மார்ட் டிஜிட்டல் வகுப்பறைகள்**: இன்டராக்டிவ் தொடுதிரைகளுடன் கூடிய ஒலி-ஒளி நவீன வகுப்பறைகள்.
• **அறிவியல் ஆய்வகங்கள்**: இயற்பியல், வேதியியல் மற்றும் உயிரியலுக்கான தனித்தனி நவீன ஆய்வகங்கள்.
• **AI & கணினி ஆய்வகம்**: அதிவேக இணைய வசதியுடன் 120+ Core i7 கணினிகள்.
• **நூலகம்**: 15,000+ நூல்கள் மற்றும் டிஜிட்டல் மின்-நூலக வசதி.
• **பாதுகாப்பான வளாகம்**: சுத்திகரிக்கப்பட்ட RO குடிநீர், சோலார் மின்சாரம், 24/7 CCTV கண்காணிப்பு.`,
      suggestedFollowUps: ['Laboratories', 'Library', 'Sports Facilities'],
      suggestedFollowUpsTa: ['ஆய்வகங்கள்', 'நூலகம்', 'விளையாட்டு வசதிகள்'],
      actionLink: '/facilities',
      actionText: 'View All Campus Facilities',
      actionTextTa: 'அனைத்து வசதிகளையும் காண்க'
    },

    // 8. Transport Routes
    {
      id: 'kb-transport',
      category: 'Transport Details',
      categoryTa: 'பேருந்து & போக்குவரத்து',
      title: 'School Bus Fleet & Routes',
      titleTa: 'பள்ளிப் பேருந்து வசதி & வழித்தடங்கள்',
      keywords: ['transport', 'bus', 'van', 'route', 'routes', 'pickup', 'drop', 'gps', 'driver', 'commute', 'coverage'],
      keywordsTa: ['பேருந்து', 'வேன்', 'போக்குவரத்து', 'பஸ்', 'வழித்தடம்', 'ஜிபிஎஸ்', 'பிக்கப்'],
      patterns: [/transport/i, /bus(es)?/i, /bus routes/i, /pickup.*drop/i, /பேருந்து/i, /போக்குவரத்து/i],
      answer: `🚌 **Safe & Reliable School Transport Fleet:**
• Fleet of **25+ yellow school buses** serving a **35 km radius** across urban, suburban, and rural areas.
• **Advanced Safety**:
  - Live satellite GPS location tracking.
  - Dedicated lady attendants on every single route.
  - Government certified speed governors (max 40 km/h).
  - In-bus CCTV cameras, emergency SOS alarms, and first-aid kits.
• Mobile SMS notification alerts sent to parents when bus approaches student pickup point.`,
      answerTa: `🚌 **பாதுகாப்பான பள்ளிப் பேருந்து போக்குவரத்து வசதி:**
• **35 கி.மீ சுற்றளவில்** கிராமப்புற மற்றும் நகர்ப்புற பகுதிகளை இணைக்கும் **25+ பள்ளிப் பேருந்துகள்**.
• **முழுப் பாதுகாப்பு அம்சங்கள்**:
  - நேரலை GPS செயற்கைக்கோள் கண்காணிப்பு வசதி.
  - ஒவ்வொரு பேருந்திலும் பொறுப்பான பெண் உதவியாளர்கள்.
  - அரசு அங்கீகரித்த வேகக் கட்டுப்பாட்டு கருவிகள் (அதிகபட்சம் 40 கி.மீ/மணி).
  - பேருந்துக்குள் CCTV கேமரா மற்றும் முதலுதவிப் பெட்டிகள்.
• பேருந்து தங்கள் நிறுத்தத்தை நெருங்கும்போது பெற்றோருக்கு தானியங்கி SMS தகவல் வரும்.`,
      suggestedFollowUps: ['School Timings', 'Contact School', 'Admission Enquiry'],
      suggestedFollowUpsTa: ['பள்ளி நேரங்கள்', 'பள்ளி தொடர்பு', 'சேர்க்கை தகவல்'],
      actionLink: '/facilities',
      actionText: 'View Transport Details',
      actionTextTa: 'போக்குவரத்து விவரம்'
    },

    // 9. School Timings
    {
      id: 'kb-timings',
      category: 'School Timings',
      categoryTa: 'பள்ளி நேரங்கள்',
      title: 'Daily Bell Schedule & Working Timings',
      titleTa: 'தினசரி பள்ளி வேலை நேரங்கள்',
      keywords: ['timing', 'timings', 'time', 'hours', 'bell', 'schedule', 'opening', 'closing', 'start time', 'end time'],
      keywordsTa: ['நேரம்', 'நேரங்கள்', 'மணி', 'எத்தனை மணிக்கு', 'தொடக்க நேரம்', 'முடியும் நேரம்'],
      patterns: [/timing/i, /timings/i, /bell schedule/i, /what time/i, /school hours/i, /நேரம்/i, /பள்ளி நேரம்/i],
      answer: `⏰ **Standard Daily Bell Timings (Monday to Friday):**
• **Kindergarten (Pre-KG, LKG, UKG)**: 8:45 AM – 12:30 PM
• **Primary Wing (Classes 1 to 5)**: 8:45 AM – 3:45 PM
• **Middle & High School (Classes 6 to 10)**: 8:30 AM – 4:00 PM
• **Higher Secondary (Classes 11 & 12)**: 8:30 AM – 4:45 PM *(includes special test coaching)*
• **Working Saturdays**: 9:00 AM – 1:00 PM *(Std 9 to 12 only)*`,
      answerTa: `⏰ **தினசரி பள்ளி வேலை நேரங்கள் (திங்கள் முதல் வெள்ளி வரை):**
• **மழலையர் பிரிவு (Pre-KG, LKG, UKG)**: காலை 8:45 – மதியம் 12:30
• **தொடக்கப் பள்ளி (1 முதல் 5-ஆம் வகுப்பு)**: காலை 8:45 – மாலை 3:45
• **நடுநிலை & உயர்நிலைப் பள்ளி (6 முதல் 10-ஆம் வகுப்பு)**: காலை 8:30 – மாலை 4:00
• **மேல்நிலைப் பள்ளி (11 & 12-ஆம் வகுப்பு)**: காலை 8:30 – மாலை 4:45 *(சிறப்புத் தேர்வுப் பயிற்சி உட்பட)*
• **வேலை சனிக்கிழமைகள்**: காலை 9:00 – மதியம் 1:00 *(9 முதல் 12-ஆம் வகுப்பு வரை மட்டும்)*`,
      suggestedFollowUps: ['Transport Details', 'Required Documents', 'Parent Support'],
      suggestedFollowUpsTa: ['பேருந்து & போக்குவரத்து', 'தேவையான ஆவணங்கள்', 'பெற்றோர் உதவி'],
      actionLink: '/admissions/parents-corner',
      actionText: 'View Parents Timetable',
      actionTextTa: 'நேர அட்டவணை பார்க்க'
    },

    // 10. Contact Details & Office Hours
    {
      id: 'kb-contact',
      category: 'Contact School',
      categoryTa: 'பள்ளி தொடர்பு',
      title: 'Contact Information & Administrative Hours',
      titleTa: 'பள்ளி தொடர்பு எண்கள் & அலுவலக நேரம்',
      keywords: ['contact', 'phone', 'call', 'email', 'address', 'location', 'office hours', 'where', 'helpline', 'number'],
      keywordsTa: ['தொடர்பு', 'போன்', 'தொலைபேசி', 'மின்னஞ்சல்', 'முகவரி', 'எங்குள்ளது', 'அலுவலக நேரம்'],
      patterns: [/contact/i, /phone (number)?/i, /call/i, /email/i, /address/i, /location/i, /office hours/i, /தொடர்பு/i, /தொலைபேசி/i, /முகவரி/i],
      answer: `📞 **Get in Touch with School Office:**
• **Address**: Shri Bharath Kanna Mat. Hr. Sec School, Main Road, Tamil Nadu, India.
• **Admissions Helpline**: +91 94432 60971
• **Administrative Office**: +91 422 268 0000 / +91 422 268 0001
• **Official Email**: info@shribharathkannaschool.edu.in
• **Office Working Hours**: Monday to Saturday, 8:30 AM – 5:00 PM *(Closed on Sundays & Government Holidays)*.`,
      answerTa: `📞 **பள்ளி அலுவலக தொடர்பு விவரங்கள்:**
• **முகவரி**: ஸ்ரீ பாரத் கண்ணா மெட்ரிகுலேஷன் மேல்நிலைப் பள்ளி, மெயின் ரோடு, தமிழ்நாடு, இந்தியா.
• **சேர்க்கை உதவி எண்**: +91 94432 60971
• **நிர்வாக அலுவலகம்**: +91 422 268 0000 / +91 422 268 0001
• **மின்னஞ்சல் முகவரி**: info@shribharathkannaschool.edu.in
• **அலுவலக வேலை நேரம்**: திங்கள் முதல் சனி வரை, காலை 8:30 – மாலை 5:00 மணி வரை *(ஞாயிறு மற்றும் அரசு விடுமுறை நாட்கள் தவிர)*.`,
      suggestedFollowUps: ['Campus Visit Booking', 'Admission Enquiry', 'Parent Support'],
      suggestedFollowUpsTa: ['பள்ளி வருகை முன்பதிவு', 'சேர்க்கை தகவல்', 'பெற்றோர் உதவி'],
      actionLink: '/contact',
      actionText: 'Go to Contact Page',
      actionTextTa: 'தொடர்பு பக்கத்திற்குச் செல்க'
    },

    // 11. Campus Visit Booking
    {
      id: 'kb-visit',
      category: 'Campus Visit Booking',
      categoryTa: 'பள்ளி வருகை முன்பதிவு',
      title: 'Booking a Campus Tour & Visit',
      titleTa: 'பள்ளி வளாகத்தை நேரில் பார்வையிடல்',
      keywords: ['visit', 'tour', 'appointment', 'booking', 'walkin', 'see campus', 'come to school', 'meet principal'],
      keywordsTa: ['பார்வை', 'வருகை', 'முன்பதிவு', 'பள்ளியை பார்க்க', 'முதல்வரை சந்திக்க'],
      patterns: [/campus (visit|tour)/i, /book.*visit/i, /visit.*campus/i, /பள்ளி.*வருகை/i, /பார்வையிட/i],
      answer: `🚶‍♂️ **Campus Visit & Guided Tours:**
We warmly welcome parents and prospective students to tour our world-class campus!
• **Visiting Days**: Monday through Saturday between **9:00 AM and 4:00 PM**.
• Guided walkthrough of Smart Classrooms, Science & AI Labs, Sports Complex, and Library.
• One-on-one consultation with our Academic Counsellors.
• Walk-ins are always welcome, or you can submit an enquiry below to reserve a specific timeslot!`,
      answerTa: `🚶‍♂️ **பள்ளி வளாகப் பார்வை & வழிகாட்டுதல்:**
பெற்றோர்கள் மற்றும் மாணவர்கள் பள்ளி வளாகத்தை நேரில் வந்து பார்வையிட அன்புடன் அழைக்கிறோம்!
• **பார்வையிடும் நேரம்**: திங்கள் முதல் சனி வரை, காலை 9:00 மணி முதல் மாலை 4:00 மணி வரை.
• ஸ்மார்ட் வகுப்பறைகள், அறிவியல் & கணினி ஆய்வகங்கள், விளையாட்டு மைதானம் மற்றும் நூலகத்தை பார்வையிடலாம்.
• கல்வி ஆலோசகர்களுடன் நேரடியாகக் கலந்துரையாடலாம்.
• முன்பதிவு செய்ய விரும்பினால் கீழே உள்ள சேர்க்கை படிவத்தில் தகவலை சமர்ப்பிக்கலாம்.`,
      suggestedFollowUps: ['Admission Enquiry', 'School Facilities', 'Contact School'],
      suggestedFollowUpsTa: ['சேர்க்கை தகவல்', 'பள்ளி வசதிகள்', 'பள்ளி தொடர்பு'],
      actionLink: '/contact',
      actionText: 'Book Visit Online',
      actionTextTa: 'இணையத்தில் முன்பதிவு செய்க'
    },

    // 12. Parent Support & Portal
    {
      id: 'kb-parent-support',
      category: 'Parent Support',
      categoryTa: 'பெற்றோர் உதவி',
      title: 'Parent Portal ERP & School Support',
      titleTa: 'பெற்றோர் உதவி & மொபைல் ஆப் விவரம்',
      keywords: ['parent', 'parents', 'support', 'app', 'erp', 'portal', 'ptm', 'meeting', 'complaint', 'grievance'],
      keywordsTa: ['பெற்றோர்', 'ஆப்', 'போர்டல்', 'கூட்டம்', 'புகார்', 'உதவி'],
      patterns: [/parent support/i, /parent portal/i, /mobile app/i, /ptm/i, /பெற்றோர்/i],
      answer: `👨‍👩‍👧‍👦 **Parent Partnership & Support:**
• **Mobile ERP App**: Download our school app to track daily attendance, homework, circulars, fee receipts, and marks.
• **Parent-Teacher Meetings (PTM)**: Conducted after every term examination with personalized feedback.
• **Principal Visiting Hours**: Monday to Friday between **3:30 PM and 4:30 PM** (prior appointment via reception).
• Dedicated parent support desk reachable at **support@shribharathkannaschool.edu.in**.`,
      answerTa: `👨‍👩‍👧‍👦 **பெற்றோர் ஆதரவு & மொபைல் ஆப் வசதி:**
• **பள்ளி மொபைல் செயலி (Mobile ERP App)**: தினசரி வருகைப் பதிவு, வீட்டுப்பாடம், தேர்வுகள் மற்றும் கட்டண ரசீதுகளை உங்கள் மொபைலில் பார்க்கலாம்.
• **பெற்றோர்-ஆசிரியர் சந்திப்பு (PTM)**: ஒவ்வொரு பருவத் தேர்வுக்குப் பிறகும் மாணவர்களின் முன்னேற்றம் குறித்து ஆலோசிக்கப்படுகிறது.
• **முதல்வரை சந்திக்கும் நேரம்**: திங்கள் முதல் வெள்ளி வரை மாலை 3:30 முதல் 4:30 மணி வரை (முன் அனுமதியுடன்).
• மின்னஞ்சல் உதவி: **support@shribharathkannaschool.edu.in**.`,
      suggestedFollowUps: ['School Timings', 'Contact School', 'Required Documents'],
      suggestedFollowUpsTa: ['பள்ளி நேரங்கள்', 'பள்ளி தொடர்பு', 'தேவையான ஆவணங்கள்'],
      actionLink: '/admissions/parents-corner',
      actionText: 'Visit Parents Corner',
      actionTextTa: 'பெற்றோர் தளம் பார்க்க'
    }
  ];

  // Language-aware answer search
  findAnswer(userInput: string, preferredLang?: LanguageCode): { answer: string; followUps?: string[]; actionLink?: string; actionText?: string; isFallback?: boolean } {
    const query = userInput.trim().toLowerCase();
    const hasTamilUnicode = /[\u0B80-\u0BFF]/.test(userInput);
    const lang: LanguageCode = preferredLang || (hasTamilUnicode ? 'ta' : this.langService.currentLang());

    if (!query) {
      return {
        answer: lang === 'ta' 
          ? 'தயவுசெய்து ஒரு கேள்வியைத் தட்டச்சு செய்யவும் அல்லது கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும்.' 
          : 'Please type a question or choose one of the quick options below.',
        followUps: this.getQuickActions(lang).slice(0, 4)
      };
    }

    // 1. Direct Category/Action Match
    for (const item of this.knowledgeBase) {
      if (
        (item.category && item.category.toLowerCase() === query) ||
        (item.categoryTa && item.categoryTa.toLowerCase() === query) ||
        (item.title && item.title.toLowerCase().includes(query)) ||
        (item.titleTa && item.titleTa.toLowerCase().includes(query))
      ) {
        return {
          answer: (lang === 'ta' && item.answerTa) ? item.answerTa : item.answer,
          followUps: (lang === 'ta' && item.suggestedFollowUpsTa) ? item.suggestedFollowUpsTa : item.suggestedFollowUps,
          actionLink: item.actionLink,
          actionText: (lang === 'ta' && item.actionTextTa) ? item.actionTextTa : item.actionText
        };
      }
    }

    // 2. Regex Pattern Match
    for (const item of this.knowledgeBase) {
      for (const pattern of item.patterns) {
        if (pattern.test(query)) {
          return {
            answer: (lang === 'ta' && item.answerTa) ? item.answerTa : item.answer,
            followUps: (lang === 'ta' && item.suggestedFollowUpsTa) ? item.suggestedFollowUpsTa : item.suggestedFollowUps,
            actionLink: item.actionLink,
            actionText: (lang === 'ta' && item.actionTextTa) ? item.actionTextTa : item.actionText
          };
        }
      }
    }

    // 3. Keyword Scoring across both EN and TA keywords
    const cleanedQuery = query.toLowerCase().replace(/[^\w\s\u0B80-\u0BFF]/g, ' ');
    const queryTokens = cleanedQuery.split(/\s+/).filter(t => t.length > 1);
    let bestMatch: ChatKnowledgeItem | null = null;
    let highestScore = 0;

    for (const item of this.knowledgeBase) {
      let score = 0;
      for (const token of queryTokens) {
        // Check English keywords
        for (const kw of item.keywords) {
          if (kw === token) score += 4;
          else if (kw.includes(token) || token.includes(kw)) score += 2;
        }
        // Check Tamil keywords
        if (item.keywordsTa) {
          for (const kwTa of item.keywordsTa) {
            if (kwTa === token) score += 5;
            else if (kwTa.includes(token) || token.includes(kwTa)) score += 3;
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (highestScore >= 3 && bestMatch) {
      return {
        answer: (lang === 'ta' && bestMatch.answerTa) ? bestMatch.answerTa : bestMatch.answer,
        followUps: (lang === 'ta' && bestMatch.suggestedFollowUpsTa) ? bestMatch.suggestedFollowUpsTa : bestMatch.suggestedFollowUps,
        actionLink: bestMatch.actionLink,
        actionText: (lang === 'ta' && bestMatch.actionTextTa) ? bestMatch.actionTextTa : bestMatch.actionText
      };
    }

    // Unrecognized query: Fallback
    return {
      answer: this.getFallbackMessage(lang),
      followUps: lang === 'ta' ? ['சேர்க்கை தகவல்', 'பள்ளி தொடர்பு', 'பள்ளி வசதிகள்'] : ['Admission Enquiry', 'Contact School', 'School Facilities'],
      isFallback: true
    };
  }

  // Quick Action Handler
  handleQuickAction(action: string, lang: LanguageCode = this.langService.currentLang()): { answer: string; followUps?: string[]; actionLink?: string; actionText?: string; isFallback?: boolean } {
    return this.findAnswer(action, lang);
  }

  // WhatsApp Redirect URL
  getWhatsAppUrl(customMessage?: string, lang: LanguageCode = this.langService.currentLang()): string {
    const schoolPhone = '919443260971';
    const defaultText = lang === 'ta'
      ? 'வணக்கம் ஸ்ரீ பாரத் கண்ணா பள்ளி, மாணவர் சேர்க்கை மற்றும் கட்டண விவரங்கள் குறித்து தகவல் அறிய விரும்புகிறேன்.'
      : 'Hello Shree Bharath Kanna School, I would like to make an enquiry regarding admissions and academic facilities.';
    const text = encodeURIComponent(customMessage || defaultText);
    return `https://wa.me/${schoolPhone}?text=${text}`;
  }

  // Submit Lead Form
  submitAdmissionLead(lead: LeadCaptureData, lang: LanguageCode = this.langService.currentLang()): boolean {
    if (!lead.parentName || !lead.phone || !lead.studentGrade) {
      const err = lang === 'ta' 
        ? 'பெற்றோர் பெயர், தொலைபேசி எண் மற்றும் வகுப்பு விவரங்களை உள்ளிடவும்.'
        : 'Please provide Parent Name, Phone Number, and Student Grade.';
      this.notificationService.error(err);
      return false;
    }

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const existingLeads = JSON.parse(localStorage.getItem('sbkmhss_chat_leads') || '[]');
        existingLeads.push({
          ...lead,
          submittedAt: new Date().toISOString(),
          language: lang
        });
        localStorage.setItem('sbkmhss_chat_leads', JSON.stringify(existingLeads));
      }
      const msg = lang === 'ta'
        ? `நன்றி ${lead.parentName}! எங்கள் சேர்க்கை ஆலோசகர் விரைவில் ${lead.phone} எண்ணில் தங்களைத் தொடர்பு கொள்வார்.`
        : `Thank you ${lead.parentName}! Our admissions counsellor will call you shortly at ${lead.phone}.`;
      this.notificationService.success(msg);
      return true;
    } catch {
      this.notificationService.success(lang === 'ta' ? 'விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!' : 'Admission enquiry submitted successfully!');
      return true;
    }
  }

  // Speech Recognition Support
  isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  // Speech Synthesis with language support and Tamil voice detection
  getTamilVoice(): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    if (this.voices.length === 0) {
      try {
        this.voices = window.speechSynthesis.getVoices();
      } catch {}
    }
    const taVoice = this.voices.find(v => {
      const lang = (v.lang || '').toLowerCase();
      const name = (v.name || '').toLowerCase();
      return lang === 'ta-in' || lang === 'ta' || lang.startsWith('ta-') || lang.startsWith('ta_') ||
             name.includes('tamil') || name.includes('தமிழ்') || name.includes('valluvar') || name.includes('pallavi');
    });
    return taVoice || null;
  }

  cleanTextForSpeech(text: string): string {
    return text
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[*_#`[\]()]/g, ' ')
      .replace(/•/g, ' ')
      .replace(/[^\S\r\n]+/g, ' ')
      .replace(/\n+/g, '. ')
      .trim();
  }

  speakText(text: string, lang: LanguageCode = this.langService.currentLang(), onEnd?: () => void): void {
    this.stopSpeaking();
    const clean = this.cleanTextForSpeech(text);
    if (!clean) return;

    const isTamil = lang === 'ta' || /[\u0B80-\u0BFF]/.test(clean);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.rate = isTamil ? 0.95 : 1.0;
        utterance.pitch = 1.0;

        if (isTamil) {
          utterance.lang = 'ta-IN';
          const tamilVoice = this.getTamilVoice();
          if (tamilVoice) {
            utterance.voice = tamilVoice;
          }
        } else {
          utterance.lang = 'en-US';
        }

        utterance.onstart = () => {
          this.isSpeaking.set(true);
        };

        utterance.onend = () => {
          this.isSpeaking.set(false);
          onEnd?.();
        };

        utterance.onerror = (e) => {
          console.warn('Speech synthesis error, trying audio fallback:', e);
          this.isSpeaking.set(false);
          if (isTamil) {
            this.playAudioFallback(clean, 'ta', onEnd);
          }
        };

        // If in Tamil mode but no browser Tamil voice is present, use instant Audio TTS fallback
        if (isTamil && !this.getTamilVoice()) {
          this.playAudioFallback(clean, 'ta', onEnd);
          return;
        }

        window.speechSynthesis.speak(utterance);
        return;
      } catch (e) {
        console.warn('Speech synthesis exception:', e);
      }
    }

    if (isTamil) {
      this.playAudioFallback(clean, 'ta', onEnd);
    }
  }

  playAudioFallback(text: string, lang: string = 'ta', onEnd?: () => void): void {
    this.stopSpeaking();
    if (typeof window === 'undefined') return;

    // Use the first ~180 characters for crisp, immediate audio output
    const sample = text.slice(0, 180).trim();
    if (!sample) return;

    try {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${encodeURIComponent(sample)}`;
      const audio = new Audio(url);
      this.currentAudio = audio;
      this.isSpeaking.set(true);

      audio.onended = () => {
        this.isSpeaking.set(false);
        this.currentAudio = null;
        onEnd?.();
      };

      audio.onerror = () => {
        this.isSpeaking.set(false);
        this.currentAudio = null;
      };

      audio.play().catch(() => {
        this.isSpeaking.set(false);
        this.currentAudio = null;
      });
    } catch {
      this.isSpeaking.set(false);
    }
  }

  stopSpeaking(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {}
      this.currentAudio = null;
    }
    this.isSpeaking.set(false);
  }
}
