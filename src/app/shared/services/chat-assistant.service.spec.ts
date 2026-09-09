import { TestBed } from '@angular/core/testing';
import { ChatAssistantService } from './chat-assistant.service';
import { LanguageService } from './language.service';

describe('ChatAssistantService', () => {
  let service: ChatAssistantService;
  let langService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAssistantService);
    langService = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return English welcome message and quick actions by default', () => {
    expect(service.getChatbotName('en')).toBe('Shree Bharath Kanna AI Assistant');
    expect(service.getWelcomeMessage('en')).toContain('Welcome to Shree Bharath Kanna School');
    expect(service.getQuickActions('en')).toContain('Admission Enquiry');
  });

  it('should return Tamil welcome message and quick actions when Tamil is active', () => {
    expect(service.getChatbotName('ta')).toBe('ஸ்ரீ பாரத் கண்ணா AI உதவியாளர்');
    expect(service.getWelcomeMessage('ta')).toContain('ஸ்ரீ பாரத் கண்ணா பள்ளிக்கு தங்களை அன்புடன் வரவேற்கிறோம்');
    expect(service.getQuickActions('ta')).toContain('சேர்க்கை தகவல்');
  });

  it('should answer questions in English', () => {
    const res = service.findAnswer('What are the school fees?', 'en');
    expect(res.answer).toContain('Fee Structure');
    expect(res.isFallback).toBeFalsy();
  });

  it('should answer questions in Tamil when asked in Tamil', () => {
    const res = service.findAnswer('கட்டண விவரம் என்ன?', 'ta');
    expect(res.answer).toContain('கட்டண');
    expect(res.isFallback).toBeFalsy();
  });

  it('should auto-detect Tamil text even if language is en', () => {
    const res = service.findAnswer('பள்ளி வசதிகள்');
    expect(res.answer).toContain('வசதிகள்');
  });

  it('should clean markdown and symbols for speech', () => {
    const raw = '📑 **சேர்க்கை** • விவரங்கள்: [Click](https://example.com)';
    const cleaned = service.cleanTextForSpeech(raw);
    expect(cleaned).not.toContain('**');
    expect(cleaned).not.toContain('https://');
    expect(cleaned).toContain('சேர்க்கை');
  });

  it('should support stopSpeaking and track isSpeaking signal', () => {
    expect(service.isSpeaking()).toBe(false);
    service.stopSpeaking();
    expect(service.isSpeaking()).toBe(false);
  });
});
