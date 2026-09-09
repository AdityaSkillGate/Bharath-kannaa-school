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
  categoryTa?: string;
  title: string;
  titleTa?: string;
  keywords: string[];
  keywordsTa?: string[];
  patterns: RegExp[];
  answer: string;
  answerTa?: string;
  suggestedFollowUps?: string[];
  suggestedFollowUpsTa?: string[];
  actionLink?: string;
  actionText?: string;
  actionTextTa?: string;
}

export interface LeadCaptureData {
  parentName: string;
  phone: string;
  email?: string;
  studentGrade: string;
  message?: string;
}
