import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';

// Mock user data
const MOCK_USER = {
  id: 1,
  name: 'Jessica',
  email: 'jessica@email.com',
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Using a signal for reactive user state
  currentUser = signal(MOCK_USER);

  // Mock login function
  login(credentials: any) {
    this.currentUser.set(MOCK_USER);
    return of({ success: true });
  }

  // Mock logout function
  logout() {
    this.currentUser.set(null);
  }

  // Getter for the current user signal
  get user() {
    return this.currentUser.asReadonly();
  }
}
