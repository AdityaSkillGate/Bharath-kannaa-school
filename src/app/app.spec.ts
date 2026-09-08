import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the school application', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render school brand name in navbar', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand-title')?.textContent).toContain('Shri Bharath Kanna');
  });

  it('should render the AI School Assistant floating button', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const fab = compiled.querySelector('.chat-fab-btn');
    expect(fab).toBeTruthy();
  });

  it('should toggle AI School Assistant window when clicked', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const fab = compiled.querySelector('.chat-fab-btn') as HTMLButtonElement;
    expect(fab).toBeTruthy();

    fab.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const chatWindow = compiled.querySelector('.chat-window');
    expect(chatWindow).toBeTruthy();
    expect(compiled.querySelector('.chat-bot-name')?.textContent).toContain('Shree Bharath Kanna AI Assistant');
  });
});
