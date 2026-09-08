import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  readonly toasts = signal<ToastMessage[]>([]);

  show(message: string, type: 'success' | 'info' | 'error' = 'success', durationMs = 4000) {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastMessage = { id, type, message };

    this.toasts.update(current => [...current, toast]);

    setTimeout(() => {
      this.remove(id);
    }, durationMs);
  }

  success(message: string, durationMs = 4000) {
    this.show(message, 'success', durationMs);
  }

  error(message: string, durationMs = 4000) {
    this.show(message, 'error', durationMs);
  }

  info(message: string, durationMs = 4000) {
    this.show(message, 'info', durationMs);
  }

  remove(id: string) {
    this.toasts.update(current => current.filter(t => t.id !== id));
  }
}
