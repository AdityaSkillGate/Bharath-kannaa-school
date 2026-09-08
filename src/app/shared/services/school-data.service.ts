import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {
  readonly schoolInfo = SCHOOL_INFO;

  getStatistics(): StatItem[] {
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

  getWhyChooseUs(): FeatureItem[] {
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

  getAcademicWings(): AcademicWing[] {
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

  getFacilities(): FacilityItem[] {
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

  getGalleryItems(): GalleryItem[] {
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

  getVideoItems(): VideoItem[] {
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

  getLeaders(): LeaderItem[] {
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

  getTestimonials(): TestimonialItem[] {
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

  getDisclosures(): DisclosureItem[] {
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

  getCareerOpenings(): CareerOpening[] {
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

  getNews(): NewsItem[] {
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
