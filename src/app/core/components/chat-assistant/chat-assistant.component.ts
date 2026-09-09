import {
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
  effect,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatAssistantService } from '../../../shared/services/chat-assistant.service';
import { LanguageService } from '../../../shared/services/language.service';
import { ChatMessage, LeadCaptureData } from '../../../shared/models/chat.models';

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.css'
})
export class ChatAssistantComponent implements OnInit, OnDestroy {
  protected readonly chatService = inject(ChatAssistantService);
  protected readonly langService = inject(LanguageService);
  private readonly router = inject(Router);

  @ViewChild('messagesContainer') private messagesContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('chatInput') private chatInput?: ElementRef<HTMLInputElement>;

  isOpen = signal<boolean>(false);
  isTyping = signal<boolean>(false);
  isListening = signal<boolean>(false);
  isVoiceMuted = signal<boolean>(false); // Voice enabled by default for Tamil interactive experience
  showLeadModal = signal<boolean>(false);
  unreadCount = signal<number>(1);
  hasUserInteracted = signal<boolean>(false);
  currentlySpokenMsgId = signal<string | null>(null);

  messages = signal<ChatMessage[]>([]);
  userInput = '';

  leadData: LeadCaptureData = {
    parentName: '',
    phone: '',
    email: '',
    studentGrade: 'Grade 11 (Bio-Maths / CS / Commerce)',
    message: ''
  };

  private recognition: any = null;

  constructor() {
    // Auto-scroll effect whenever messages change or typing changes
    effect(() => {
      this.messages();
      this.isTyping();
      setTimeout(() => this.scrollToBottom(), 50);
    });
  }

  ngOnInit(): void {
    this.loadHistory();
    this.initSpeechRecognition();
  }

  ngOnDestroy(): void {
    this.stopVoiceInput();
    this.chatService.stopSpeaking();
    this.currentlySpokenMsgId.set(null);
  }

  get chatbotName(): string {
    return this.chatService.getChatbotName(this.langService.currentLang());
  }

  get quickActions(): string[] {
    return this.chatService.getQuickActions(this.langService.currentLang());
  }

  toggleChatLanguage(): void {
    this.langService.toggleLanguage();
    if (this.messages().length <= 1) {
      this.initWelcomeMessage();
    }
  }

  toggleChat(): void {
    const nextState = !this.isOpen();
    this.isOpen.set(nextState);
    if (nextState) {
      this.unreadCount.set(0);
      this.hasUserInteracted.set(true);
      setTimeout(() => {
        this.scrollToBottom();
        this.chatInput?.nativeElement.focus();
      }, 100);
    } else {
      this.stopVoiceInput();
      this.chatService.stopSpeaking();
      this.currentlySpokenMsgId.set(null);
    }
  }

  toggleVoiceMute(): void {
    const nextMute = !this.isVoiceMuted();
    this.isVoiceMuted.set(nextMute);
    if (nextMute) {
      this.chatService.stopSpeaking();
      this.currentlySpokenMsgId.set(null);
    } else {
      const lastBotMsg = [...this.messages()].reverse().find(m => m.sender === 'bot');
      if (lastBotMsg) {
        this.speakMessage(lastBotMsg);
      }
    }
  }

  speakMessage(msg: ChatMessage): void {
    if (this.chatService.isSpeaking() && this.currentlySpokenMsgId() === msg.id) {
      this.chatService.stopSpeaking();
      this.currentlySpokenMsgId.set(null);
      return;
    }
    this.isVoiceMuted.set(false);
    this.currentlySpokenMsgId.set(msg.id);
    this.chatService.speakText(msg.text, this.langService.currentLang(), () => {
      this.currentlySpokenMsgId.set(null);
    });
  }

  sendMessage(textToSend?: string): void {
    const text = (textToSend || this.userInput).trim();
    if (!text || this.isTyping()) return;

    this.userInput = '';
    const now = this.formatTime(new Date());

    // 1. Add user message
    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text,
      timestamp: now
    };
    this.messages.update(prev => [...prev, userMsg]);
    this.saveHistory();

    // 2. Trigger typing animation
    this.isTyping.set(true);

    // 3. Simulate natural bot response time (400-550ms)
    setTimeout(() => {
      const currentLang = this.langService.currentLang();
      const result = this.chatService.findAnswer(text, currentLang);
      this.isTyping.set(false);

      const botId = 'bot-' + Date.now();
      const botMsg: ChatMessage = {
        id: botId,
        sender: 'bot',
        text: result.answer,
        timestamp: this.formatTime(new Date()),
        quickReplies: result.followUps,
        showFallbackActions: result.isFallback
      };

      this.messages.update(prev => [...prev, botMsg]);
      this.saveHistory();

      // Read aloud if voice is enabled or if query is in Tamil
      if (!this.isVoiceMuted() || currentLang === 'ta' || /[\u0B80-\u0BFF]/.test(text)) {
        this.isVoiceMuted.set(false);
        this.currentlySpokenMsgId.set(botId);
        this.chatService.speakText(result.answer, currentLang, () => {
          this.currentlySpokenMsgId.set(null);
        });
      }
    }, 500);
  }

  triggerQuickAction(action: string): void {
    const now = this.formatTime(new Date());
    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: action,
      timestamp: now
    };
    this.messages.update(prev => [...prev, userMsg]);
    this.saveHistory();

    this.isTyping.set(true);

    setTimeout(() => {
      const currentLang = this.langService.currentLang();
      const result = this.chatService.handleQuickAction(action, currentLang);
      this.isTyping.set(false);

      const botId = 'bot-' + Date.now();
      const botMsg: ChatMessage = {
        id: botId,
        sender: 'bot',
        text: result.answer,
        timestamp: this.formatTime(new Date()),
        quickReplies: result.followUps,
        showFallbackActions: result.isFallback
      };

      this.messages.update(prev => [...prev, botMsg]);
      this.saveHistory();

      // Automatically play Tamil voice when a question is clicked!
      this.isVoiceMuted.set(false);
      this.currentlySpokenMsgId.set(botId);
      this.chatService.speakText(result.answer, currentLang, () => {
        this.currentlySpokenMsgId.set(null);
      });
    }, 450);
  }

  // Voice Input Handler
  initSpeechRecognition(): void {
    if (typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        this.recognition = new SpeechRec();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = this.langService.isTamil() ? 'ta-IN' : 'en-US';

        this.recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          if (transcript) {
            this.userInput = transcript;
            this.sendMessage();
          }
          this.isListening.set(false);
        };

        this.recognition.onerror = () => {
          this.isListening.set(false);
        };

        this.recognition.onend = () => {
          this.isListening.set(false);
        };
      } catch (e) {
        console.warn('Could not initialize speech recognition:', e);
      }
    }
  }

  toggleVoiceInput(): void {
    if (this.isListening()) {
      this.stopVoiceInput();
    } else {
      this.startVoiceInput();
    }
  }

  startVoiceInput(): void {
    if (!this.recognition) {
      alert(this.langService.isTamil() 
        ? 'உங்கள் உலாவியில் குரல் அறிதல் ஆதரிக்கப்படவில்லை. தயவுசெய்து தட்டச்சு செய்யவும்.' 
        : 'Speech recognition is not supported in this browser. Please type your query.');
      return;
    }
    try {
      this.recognition.lang = this.langService.isTamil() ? 'ta-IN' : 'en-US';
      this.isListening.set(true);
      this.recognition.start();
    } catch {
      this.isListening.set(false);
    }
  }

  stopVoiceInput(): void {
    if (this.recognition && this.isListening()) {
      try {
        this.recognition.stop();
      } catch {}
    }
    this.isListening.set(false);
  }

  // Lead Form Handlers
  openLeadModal(): void {
    this.showLeadModal.set(true);
  }

  closeLeadModal(): void {
    this.showLeadModal.set(false);
  }

  submitLead(): void {
    const currentLang = this.langService.currentLang();
    const success = this.chatService.submitAdmissionLead(this.leadData, currentLang);
    if (success) {
      const now = this.formatTime(new Date());
      const botText = currentLang === 'ta'
        ? `✅ **சேர்க்கை விண்ணப்பம் பெறப்பட்டது!**\nநன்றி, **${this.leadData.parentName}**. **${this.leadData.studentGrade}** வகுப்பிற்கான தங்களது விவரங்கள் பதிவு செய்யப்பட்டுள்ளன. எங்கள் சேர்க்கை ஆலோசகர் **${this.leadData.phone}** எண்ணில் 24 மணி நேரத்திற்குள் தங்களைத் தொடர்பு கொள்வார்.`
        : `✅ **Admission Enquiry Received!**\nThank you, **${this.leadData.parentName}**. We have registered your enquiry for **${this.leadData.studentGrade}**. Our admissions counsellor will contact you at **${this.leadData.phone}** within 24 hours.`;

      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: botText,
        timestamp: now,
        quickReplies: currentLang === 'ta'
          ? ['பள்ளி வசதிகள்', 'கட்டண விவரம்', 'பேருந்து & போக்குவரத்து']
          : ['School Facilities', 'Fee Structure', 'Transport Details']
      };
      this.messages.update(prev => [...prev, botMsg]);
      this.saveHistory();
      this.closeLeadModal();

      // Reset form
      this.leadData = {
        parentName: '',
        phone: '',
        email: '',
        studentGrade: 'Grade 11 (Bio-Maths / CS / Commerce)',
        message: ''
      };
    }
  }

  // External Action Triggers
  openWhatsApp(): void {
    window.open(this.chatService.getWhatsAppUrl(undefined, this.langService.currentLang()), '_blank');
  }

  callSchool(): void {
    window.location.href = 'tel:+919443260971';
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    if (window.innerWidth < 768) {
      this.isOpen.set(false);
    }
  }

  // History & Storage
  clearHistory(): void {
    const confirmText = this.langService.isTamil()
      ? 'தங்களது உரையாடல் வரலாற்றை அழிக்க விரும்புகிறீர்களா?'
      : 'Are you sure you want to clear your chat history?';

    if (confirm(confirmText)) {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('sbkmhss_chat_history');
      }
      this.chatService.stopSpeaking();
      this.initWelcomeMessage();
    }
  }

  private loadHistory(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('sbkmhss_chat_history');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.messages.set(parsed);
            return;
          }
        } catch {}
      }
    }
    this.initWelcomeMessage();
  }

  private initWelcomeMessage(): void {
    const lang = this.langService.currentLang();
    const welcome: ChatMessage = {
      id: 'welcome-1',
      sender: 'bot',
      text: this.chatService.getWelcomeMessage(lang),
      timestamp: this.formatTime(new Date()),
      quickReplies: this.chatService.getQuickActions(lang).slice(0, 4)
    };
    this.messages.set([welcome]);
  }

  private saveHistory(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('sbkmhss_chat_history', JSON.stringify(this.messages()));
      } catch {}
    }
  }

  private scrollToBottom(): void {
    if (this.messagesContainer?.nativeElement) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
