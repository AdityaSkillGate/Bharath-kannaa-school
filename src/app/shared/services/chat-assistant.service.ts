import { Injectable, inject } from '@angular/core';
import { ChatKnowledgeItem, ChatMessage, LeadCaptureData } from '../models/chat.models';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ChatAssistantService {
  private readonly notificationService = inject(NotificationService);

  readonly chatbotName = 'Shree Bharath Kanna AI Assistant';
  readonly welcomeMessage = '👋 Welcome to Shree Bharath Kanna School.\nHow can I help you today?';
  readonly fallbackMessage = `I couldn't find that information.\nPlease contact our office or submit an enquiry.`;

  readonly quickActions: string[] = [
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

  private readonly knowledgeBase: ChatKnowledgeItem[] = [
    // 1. School Overview
    {
      id: 'kb-overview',
      category: 'School Overview',
      title: 'About Shree Bharath Kanna School',
      keywords: ['about', 'history', 'founder', 'founded', 'overview', 'who are you', 'kanna school', 'sbkmhss', 'vision', 'motto'],
      patterns: [/about (school|bharath kanna|sbkmhss)/i, /who founded/i, /when was.*(founded|started|established)/i, /school overview/i, /history/i],
      answer: `🏛️ **Shri Bharath Kanna Matriculation Higher Secondary School** was established in **1998** under the visionary leadership of our Chairman **Dr. R. Kanna**.

For over 25+ years, we have been delivering holistic education that blends academic distinction with deep ethical values. Our sprawling lush-green campus accommodates 2,800+ students from Kindergarten to Higher Secondary (Std 12) with a 100% board examination record.`,
      suggestedFollowUps: ['Academic Information', 'School Facilities', 'Admission Enquiry'],
      actionLink: '/about/about-us',
      actionText: 'Read Complete History'
    },

    // 2. Admissions
    {
      id: 'kb-admissions',
      category: 'Admissions',
      title: 'Admission Process & Guidelines',
      keywords: ['admission', 'admissions', 'apply', 'enroll', 'enrolment', 'join', 'seat', 'procedure', 'how to apply', 'registration'],
      patterns: [/how to (apply|join|enroll|get admission)/i, /admission (process|procedure|dates|open)/i, /admissions open/i, /application form/i],
      answer: `📋 **Admissions Open for Academic Year 2025 - 2026** (Pre-KG to Std 11)!

**4-Step Simple Admission Process:**
1. **Enquiry & Registration**: Submit online enquiry or visit campus.
2. **Campus Tour & Interaction**: Informal student-parent interaction.
3. **Document Verification**: Verify birth certificate, transfer certificate & marksheet.
4. **Fee Payment & Confirmation**: Receive official admission pack & uniform kit.

Would you like to fill our quick admission lead form now?`,
      suggestedFollowUps: ['Required Documents', 'Fee Structure', 'Eligibility Criteria'],
      actionLink: '/admissions/admissions',
      actionText: 'Open Admissions Page'
    },

    // 3. Eligibility Criteria
    {
      id: 'kb-eligibility',
      category: 'Eligibility Criteria',
      title: 'Age Eligibility Criteria',
      keywords: ['eligibility', 'age', 'cutoff', 'cut-off', 'minimum age', 'criteria', 'which class', 'age limit'],
      patterns: [/age (limit|criteria|requirement|cutoff)/i, /how old/i, /eligibility criteria/i, /which age for/i],
      answer: `🎂 **Age Eligibility Criteria (as of 31st July of admission year):**
• **Pre-KG**: 2.5 to 3 years
• **LKG**: 3+ years
• **UKG**: 4+ years
• **Class 1**: 5+ years
• **Classes 2 to 9**: Based on valid Transfer Certificate (TC) & previous academic clearance.
• **Class 11**: Based on 10th Board Marks (SSLC / CBSE / ICSE) across Bio-Maths, CS-Maths, Pure Science & Commerce streams.`,
      suggestedFollowUps: ['Required Documents', 'Admission Enquiry', 'Academic Information'],
      actionLink: '/admissions/admissions',
      actionText: 'Check Eligibility Table'
    },

    // 4. Required Documents
    {
      id: 'kb-documents',
      category: 'Required Documents',
      title: 'Required Documents Checklist',
      keywords: ['documents', 'certificate', 'tc', 'birth certificate', 'aadhar', 'emis', 'proof', 'checklist', 'what papers'],
      patterns: [/what documents/i, /required documents/i, /certificates needed/i, /document checklist/i, /bring for admission/i],
      answer: `📑 **Required Documents for Admission Checklist:**
1. Original Birth Certificate (with 2 photocopies).
2. Transfer Certificate (TC) countersigned by proper educational authorities (for Std 2 & above).
3. Student & Parent Aadhar Card copies.
4. Community Certificate copy (where applicable).
5. EMIS Number from previous recognized school.
6. 4 recent passport-size student color photographs.
7. Previous year Term / Annual progress report card.`,
      suggestedFollowUps: ['Admission Enquiry', 'Fee Structure', 'School Timings'],
      actionLink: '/admissions/admissions',
      actionText: 'View Document Checklist'
    },

    // 5. Fee Structure
    {
      id: 'kb-fees',
      category: 'Fee Structure',
      title: 'Fee Structure & Payment Schedule',
      keywords: ['fee', 'fees', 'cost', 'tuition', 'payment', 'installment', 'scholarship', 'how much', 'expense'],
      patterns: [/how much.*fee/i, /fee structure/i, /tuition fees/i, /payment installment/i, /scholarship/i, /cost of study/i],
      answer: `💳 **Transparent & Affordable Fee Structure:**
• We strictly adhere to Tamil Nadu State Fee Determination Committee guidelines.
• Tuition fees are payable in **3 flexible term installments** (June, October, January).
• **Zero hidden charges**: Comprehensive breakdown including tuition, digital labs, sports, and library.
• **Merit Scholarships**: Special fee concessions available for top academic performers, state sports medalists, and deserving underprivileged students.

For exact grade-wise fee schedule, please visit our accounts desk or submit an enquiry.`,
      suggestedFollowUps: ['Admission Enquiry', 'Transport Details', 'Contact School'],
      actionLink: '/admissions/admissions',
      actionText: 'Enquire About Fees'
    },

    // 6. Academic Curriculum & CBSE Information
    {
      id: 'kb-curriculum',
      category: 'Academic Curriculum',
      title: 'Curriculum & CBSE/State Board Foundation',
      keywords: ['curriculum', 'cbse', 'syllabus', 'state board', 'samacheer', 'neet', 'jee', 'subjects', 'stream', 'matriculation'],
      patterns: [/curriculum/i, /cbse/i, /state board/i, /samacheer kalvi/i, /syllabus/i, /neet.*jee/i, /integrated coaching/i],
      answer: `📚 **Academic Framework & Syllabi:**
• We follow the **Tamil Nadu Matriculation & State Board (Samacheer Kalvi)** curriculum, enriched with **CBSE/NCERT foundational modules** in Mathematics, Science, and English.
• **Higher Secondary Streams (Std 11 & 12)**:
  1. *Group 1*: Physics, Chemistry, Biology, Mathematics
  2. *Group 2*: Physics, Chemistry, Computer Science, Mathematics
  3. *Group 3*: Physics, Chemistry, Biology, Computer Science
  4. *Group 4*: Commerce, Accountancy, Economics, Business Maths / Computer App
• **NEET / JEE / CA-Foundation**: Specialized integrated weekend coaching with top subject trainers.`,
      suggestedFollowUps: ['Academic Information', 'School Facilities', 'School Timings'],
      actionLink: '/academics',
      actionText: 'Explore Complete Curriculum'
    },

    // 7. Facilities & Smart Classrooms
    {
      id: 'kb-facilities',
      category: 'School Facilities',
      title: 'Campus Infrastructure & Smart Classrooms',
      keywords: ['facilities', 'smart classroom', 'smart board', 'classrooms', 'infrastructure', 'campus', 'amenities'],
      patterns: [/facilities/i, /smart classroom/i, /interactive board/i, /campus facilities/i, /amenities/i],
      answer: `🏫 **World-Class Campus Infrastructure:**
• **Smart 4K Interactive Classrooms**: Acoustically engineered and air-cooled with interactive digital whiteboards.
• **High-Tech Laboratories**: Dedicated Physics, Chemistry, and Biology research workstations.
• **AI & Computer Labs**: 120+ Core i7 computers with fiber-optic internet.
• **Knowledge Resource Library**: 15,000+ volumes, educational journals, and digital kiosks.
• **Safe & Eco-Friendly**: RO purified drinking water stations, full solar power backup, and landscaped open gardens.`,
      suggestedFollowUps: ['Laboratories', 'Library', 'Sports Facilities'],
      actionLink: '/facilities',
      actionText: 'View All Campus Facilities'
    },

    // 8. Laboratories
    {
      id: 'kb-laboratories',
      category: 'Laboratories',
      title: 'Science, STEM & AI Laboratories',
      keywords: ['lab', 'labs', 'laboratory', 'laboratories', 'science lab', 'physics lab', 'chemistry lab', 'biology lab', 'computer lab'],
      patterns: [/laborator(y|ies)/i, /science lab/i, /computer lab/i, /stem lab/i, /ai lab/i],
      answer: `🔬 **State-of-the-Art Laboratories:**
• **Physics Lab**: Equipped with optical benches, spectrometers, sonometers, and digital electrical meters.
• **Chemistry Lab**: Features fume hoods, emergency safety showers, analytical balances, and safe chemical setups.
• **Biology Lab**: High-precision binocular microscopes, preserved specimen archives, and anatomical 3D models.
• **AI & STEM Robotics Lab**: LEGO Mindstorms, Arduino microcontroller kits, and Python coding workstations.`,
      suggestedFollowUps: ['School Facilities', 'Academic Information', 'School Events'],
      actionLink: '/facilities',
      actionText: 'Tour Laboratories'
    },

    // 9. Library
    {
      id: 'kb-library',
      category: 'Library',
      title: 'Knowledge Resource Center',
      keywords: ['library', 'books', 'reading', 'journals', 'encyclopedia', 'digital library', 'e-books'],
      patterns: [/library/i, /books/i, /reading hall/i, /resource center/i],
      answer: `📖 **Library & Knowledge Resource Center:**
• Over **15,000+ physical volumes** covering classics, world encyclopedias, science, fiction, and competitive exams.
• Subscriptions to 18 national & regional periodicals, dailies, and STEM research journals.
• Dedicated quiet individual study carrels and multimedia e-reader stations.
• Weekly library hours and Book Readers' Club sessions for all grades.`,
      suggestedFollowUps: ['School Facilities', 'Academic Information', 'Clubs'],
      actionLink: '/facilities',
      actionText: 'Explore Library'
    },

    // 10. Sports Facilities
    {
      id: 'kb-sports',
      category: 'Sports Facilities',
      title: 'Sports Complex & Athletic Grounds',
      keywords: ['sport', 'sports', 'playground', 'ground', 'cricket', 'football', 'athletics', 'basketball', 'badminton', 'karate', 'yoga', 'silambam'],
      patterns: [/sports/i, /playground/i, /games/i, /cricket/i, /football/i, /athletic/i, /martial arts/i],
      answer: `🏅 **Multi-Acre Sports Complex:**
• **Outdoor Arena**: Full-size natural grass football pitch, 200m standard athletic track, turf & cement cricket coaching nets.
• **Hard Courts**: Floodlit basketball court and standard volleyball arena.
• **Indoor Sports Complex**: 4-court wooden badminton hall, table tennis arena, and carrom/chess studios.
• **Martial Arts & Wellness**: Specialized training in Karate, Silambam, and Yoga by Black Belt and NIS-certified physical directors.`,
      suggestedFollowUps: ['Achievements', 'Student Activities', 'School Facilities'],
      actionLink: '/activities/sports-achievements',
      actionText: 'See Sports Achievements'
    },

    // 11. School Events & Celebrations
    {
      id: 'kb-events',
      category: 'School Events',
      title: 'Annual Events & Cultural Celebrations',
      keywords: ['events', 'annual day', 'sports day', 'celebration', 'celebrations', 'functions', 'festivals', 'science exhibition', 'expo'],
      patterns: [/annual day/i, /sports day/i, /events/i, /science (expo|exhibition)/i, /festivals/i],
      answer: `🎉 **Vibrant School Calendar & Events:**
• **Silver Jubilee Annual Day**: Mega cultural extravaganza showcasing student theatrical, musical, and dance talents.
• **Annual Sports Olympiad**: Inter-house track and field championship with march-past and athletic displays.
• **Science & STEM Innovation Expo**: Student prototypes, robotics demonstrations, and working models.
• **Cultural & National Days**: Pongal celebration, Independence Day, Republic Day, Teachers' Day, and Children's Day carnivals.`,
      suggestedFollowUps: ['Student Activities', 'Achievements', 'Photo Gallery'],
      actionLink: '/activities/photo-gallery',
      actionText: 'View Event Gallery'
    },

    // 12. Student Activities & Clubs
    {
      id: 'kb-activities',
      category: 'Student Activities',
      title: 'Student Development, Houses & Clubs',
      keywords: ['clubs', 'activities', 'houses', 'extracurricular', 'robotics club', 'eco club', 'debating', 'literary'],
      patterns: [/clubs/i, /activities/i, /houses/i, /extracurricular/i, /student development/i],
      answer: `🌟 **Holistic Student Development:**
• **4 School Houses**: *Emerald (Green)*, *Ruby (Red)*, *Sapphire (Blue)*, and *Topaz (Yellow)* fostering healthy team rivalry and leadership.
• **Specialized Clubs**:
  1. *Robotics & Coding Club* (AI, scratch programming, IoT)
  2. *Eco & Green Warriors Club* (tree plantation, organic farming)
  3. *Literary & Debating Society* (public speaking, model parliament)
  4. *Fine Arts & Heritage Club* (classical music, theater, painting)
  5. *Disaster Response & Scouts/Guides*`,
      suggestedFollowUps: ['School Events', 'Sports Facilities', 'Achievements'],
      actionLink: '/activities/student-development',
      actionText: 'Learn About Clubs'
    },

    // 13. Achievements
    {
      id: 'kb-achievements',
      category: 'Achievements',
      title: 'Academic & Sports Achievements',
      keywords: ['achievements', 'awards', 'results', 'rank', 'topper', 'trophy', 'board results', 'medals', 'records'],
      patterns: [/achievements/i, /board (results|marks)/i, /toppers/i, /troph(y|ies)/i, /medals/i, /pass percentage/i],
      answer: `🏆 **Pinnacles of Excellence:**
• **100% Pass Record** in SSLC (Class 10) & HSC (Class 12) State Board examinations for over 15 consecutive years.
• Consistent District 1st & 2nd ranks in Mathematics, Physics, and Commerce.
• **Sports Champions**: Winners of Tamil Nadu State Matriculation Athletic Championship (4x100m Boys Relay) and District Rolling Football Trophy.
• Over 45+ students successfully cleared NEET and JEE with state government medical college entries.`,
      suggestedFollowUps: ['Academic Information', 'Sports Facilities', 'Admission Enquiry'],
      actionLink: '/activities/sports-achievements',
      actionText: 'View Sports Achievements'
    },

    // 14. Transport Routes
    {
      id: 'kb-transport',
      category: 'Transport Details',
      title: 'School Bus Fleet & Routes',
      keywords: ['transport', 'bus', 'van', 'route', 'routes', 'pickup', 'drop', 'gps', 'driver', 'commute', 'coverage'],
      patterns: [/transport/i, /bus(es)?/i, /bus routes/i, /pickup.*drop/i, /bus service/i, /van/i],
      answer: `🚌 **Safe & Reliable School Transport Fleet:**
• Fleet of **25+ yellow school buses** serving a **35 km radius** across urban, suburban, and rural areas.
• **Advanced Safety**:
  - Live satellite GPS location tracking.
  - Dedicated lady attendants on every single route.
  - Government certified speed governors (max 40 km/h).
  - In-bus CCTV cameras, emergency SOS alarms, and first-aid kits.
• Mobile SMS notification alerts sent to parents when bus approaches student pickup point.`,
      suggestedFollowUps: ['School Timings', 'Contact School', 'Admission Enquiry'],
      actionLink: '/facilities',
      actionText: 'View Transport Details'
    },

    // 15. School Timings
    {
      id: 'kb-timings',
      category: 'School Timings',
      title: 'Daily Bell Schedule & Working Timings',
      keywords: ['timing', 'timings', 'time', 'hours', 'bell', 'schedule', 'opening', 'closing', 'start time', 'end time'],
      patterns: [/timing/i, /timings/i, /bell schedule/i, /what time/i, /school hours/i, /opening time/i],
      answer: `⏰ **Standard Daily Bell Timings (Monday to Friday):**
• **Kindergarten (Pre-KG, LKG, UKG)**: 8:45 AM – 12:30 PM
• **Primary Wing (Classes 1 to 5)**: 8:45 AM – 3:45 PM
• **Middle & High School (Classes 6 to 10)**: 8:30 AM – 4:00 PM
• **Higher Secondary (Classes 11 & 12)**: 8:30 AM – 4:45 PM *(includes special test coaching)*
• **Working Saturdays**: 9:00 AM – 1:00 PM *(Std 9 to 12 only)*`,
      suggestedFollowUps: ['Transport Details', 'Required Documents', 'Parent Support'],
      actionLink: '/admissions/parents-corner',
      actionText: 'View Parents Timetable'
    },

    // 16. Contact Details & Office Hours
    {
      id: 'kb-contact',
      category: 'Contact School',
      title: 'Contact Information & Administrative Hours',
      keywords: ['contact', 'phone', 'call', 'email', 'address', 'location', 'office hours', 'where', 'helpline', 'number'],
      patterns: [/contact/i, /phone (number)?/i, /call/i, /email/i, /address/i, /location/i, /where is/i, /office hours/i],
      answer: `📞 **Get in Touch with School Office:**
• **Address**: Shri Bharath Kanna Mat. Hr. Sec School, Main Road, Tamil Nadu, India.
• **Admissions Helpline**: +91 94432 60971
• **Administrative Office**: +91 422 268 0000 / +91 422 268 0001
• **Official Email**: info@shribharathkannaschool.edu.in
• **Office Working Hours**: Monday to Saturday, 8:30 AM – 5:00 PM *(Closed on Sundays & Government Holidays)*.`,
      suggestedFollowUps: ['Campus Visit Booking', 'Admission Enquiry', 'Parent Support'],
      actionLink: '/contact',
      actionText: 'Go to Contact Page'
    },

    // 17. Campus Visit Booking
    {
      id: 'kb-visit',
      category: 'Campus Visit Booking',
      title: 'Booking a Campus Tour & Visit',
      keywords: ['visit', 'tour', 'appointment', 'booking', 'walkin', 'see campus', 'come to school', 'meet principal'],
      patterns: [/campus (visit|tour)/i, /book.*visit/i, /visit.*campus/i, /come and see/i, /appointment with principal/i],
      answer: `🚶‍♂️ **Campus Visit & Guided Tours:**
We warmly welcome parents and prospective students to tour our world-class campus!
• **Visiting Days**: Monday through Saturday between **9:00 AM and 4:00 PM**.
• Guided walkthrough of Smart Classrooms, Science & AI Labs, Sports Complex, and Library.
• One-on-one consultation with our Academic Counsellors.
• Walk-ins are always welcome, or you can submit an enquiry below to reserve a specific timeslot!`,
      suggestedFollowUps: ['Admission Enquiry', 'School Facilities', 'Contact School'],
      actionLink: '/contact',
      actionText: 'Book Visit Online'
    },

    // 18. Parent Support & Portal
    {
      id: 'kb-parent-support',
      category: 'Parent Support',
      title: 'Parent Portal ERP & School Support',
      keywords: ['parent', 'parents', 'support', 'app', 'erp', 'portal', 'ptm', 'meeting', 'complaint', 'grievance'],
      patterns: [/parent support/i, /parent portal/i, /mobile app/i, /ptm/i, /parent teacher meeting/i, /grievance/i],
      answer: `👨‍👩‍👧‍👦 **Parent Partnership & Support:**
• **Mobile ERP App**: Download our school app to track daily attendance, homework, circulars, fee receipts, and marks.
• **Parent-Teacher Meetings (PTM)**: Conducted after every term examination with personalized feedback.
• **Principal Visiting Hours**: Monday to Friday between **3:30 PM and 4:30 PM** (prior appointment via reception).
• Dedicated parent support desk reachable at **support@shribharathkannaschool.edu.in**.`,
      suggestedFollowUps: ['School Timings', 'Contact School', 'Required Documents'],
      actionLink: '/admissions/parents-corner',
      actionText: 'Visit Parents Corner'
    }
  ];

  // Answer matching engine
  findAnswer(userInput: string): { answer: string; followUps?: string[]; actionLink?: string; actionText?: string; isFallback?: boolean } {
    const query = userInput.trim().toLowerCase();
    if (!query) {
      return {
        answer: 'Please type a question or choose one of the quick options below.',
        followUps: this.quickActions.slice(0, 4)
      };
    }

    // Exact or partial quick action matching
    for (const item of this.knowledgeBase) {
      if (item.category.toLowerCase() === query || item.title.toLowerCase().includes(query)) {
        return {
          answer: item.answer,
          followUps: item.suggestedFollowUps,
          actionLink: item.actionLink,
          actionText: item.actionText
        };
      }
    }

    // Regex pattern matching (high confidence)
    for (const item of this.knowledgeBase) {
      for (const pattern of item.patterns) {
        if (pattern.test(query)) {
          return {
            answer: item.answer,
            followUps: item.suggestedFollowUps,
            actionLink: item.actionLink,
            actionText: item.actionText
          };
        }
      }
    }

    // Keyword matching score
    const queryTokens = query.split(/\s+/).filter(t => t.length > 2);
    let bestMatch: ChatKnowledgeItem | null = null;
    let highestScore = 0;

    for (const item of this.knowledgeBase) {
      let score = 0;
      for (const token of queryTokens) {
        for (const kw of item.keywords) {
          if (kw === token) score += 4;
          else if (kw.includes(token) || token.includes(kw)) score += 2;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    // Fallback threshold
    if (highestScore >= 3 && bestMatch) {
      return {
        answer: bestMatch.answer,
        followUps: bestMatch.suggestedFollowUps,
        actionLink: bestMatch.actionLink,
        actionText: bestMatch.actionText
      };
    }

    // Unrecognized query: Return prompt-specified fallback
    return {
      answer: this.fallbackMessage,
      followUps: ['Admission Enquiry', 'Contact School', 'School Facilities'],
      isFallback: true
    };
  }

  // Quick Action Click
  handleQuickAction(action: string): { answer: string; followUps?: string[]; actionLink?: string; actionText?: string; isFallback?: boolean } {
    const match = this.knowledgeBase.find(kb => 
      kb.category.toLowerCase() === action.toLowerCase() || 
      kb.keywords.some(k => k.toLowerCase() === action.toLowerCase())
    );

    if (match) {
      return {
        answer: match.answer,
        followUps: match.suggestedFollowUps,
        actionLink: match.actionLink,
        actionText: match.actionText
      };
    }

    return this.findAnswer(action);
  }

  // WhatsApp Redirect URL
  getWhatsAppUrl(customMessage?: string): string {
    const schoolPhone = '919443260971';
    const text = customMessage 
      ? encodeURIComponent(customMessage) 
      : encodeURIComponent('Hello Shree Bharath Kanna School, I would like to make an enquiry regarding admissions and academic facilities.');
    return `https://wa.me/${schoolPhone}?text=${text}`;
  }

  // Submit Lead Form
  submitAdmissionLead(lead: LeadCaptureData): boolean {
    if (!lead.parentName || !lead.phone || !lead.studentGrade) {
      this.notificationService.error('Please provide Parent Name, Phone Number, and Student Grade.');
      return false;
    }

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const existingLeads = JSON.parse(localStorage.getItem('sbkmhss_chat_leads') || '[]');
        existingLeads.push({
          ...lead,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('sbkmhss_chat_leads', JSON.stringify(existingLeads));
      }
      this.notificationService.success(`Thank you ${lead.parentName}! Our admissions counsellor will call you shortly at ${lead.phone}.`);
      return true;
    } catch {
      this.notificationService.success('Admission enquiry submitted successfully!');
      return true;
    }
  }

  // Speech Recognition Check
  isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  // Speech Synthesis
  speakText(text: string): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Remove markdown chars for clean voice output
      const cleanText = text.replace(/[*_#`[\]()]/g, '').replace(/•/g, '').replace(/https?:\/\/\S+/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  stopSpeaking(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}
