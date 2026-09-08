export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  showFallbackActions?: boolean;
  isLeadForm?: boolean;
}

export interface ChatKnowledgeItem {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  patterns: RegExp[];
  answer: string;
  suggestedFollowUps?: string[];
  actionLink?: string;
  actionText?: string;
}

export interface LeadCaptureData {
  parentName: string;
  phone: string;
  email?: string;
  studentGrade: string;
  message?: string;
}
