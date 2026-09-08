export interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string; description?: string }[];
}

export interface StatItem {
  number: string;
  suffix?: string;
  label: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'sports' | 'events' | 'academics' | 'science';
  imageUrl: string;
  caption: string;
  date?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  isImportant?: boolean;
}

export interface LeaderItem {
  name: string;
  role: string;
  qualification: string;
  image: string;
  bio: string;
  quote?: string;
}

export interface DisclosureItem {
  docNo: string;
  title: string;
  category: string;
  issueDate: string;
  fileSize: string;
  fileType: string;
}

export interface CareerOpening {
  id: string;
  role: string;
  department: string;
  experience: string;
  qualification: string;
  vacancies: number;
  type: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  imageUrl: string;
  icon: string;
}

export interface AcademicWing {
  title: string;
  grades: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  focus: string;
}
