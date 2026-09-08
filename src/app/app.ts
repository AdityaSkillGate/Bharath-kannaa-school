import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './core/components/topbar/topbar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ChatAssistantComponent } from './core/components/chat-assistant/chat-assistant.component';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, NavbarComponent, FooterComponent, ChatAssistantComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly notificationService = inject(NotificationService);
  protected readonly toasts = this.notificationService.toasts;

  closeToast(id: string) {
    this.notificationService.remove(id);
  }
}
