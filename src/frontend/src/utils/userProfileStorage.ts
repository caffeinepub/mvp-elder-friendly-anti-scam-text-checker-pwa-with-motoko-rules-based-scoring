export interface HistoryItem {
  type: 'phone' | 'crypto' | 'message' | 'email';
  input: string;
  timestamp: number;
  result?: string;
}

export interface UserProfile {
  history: HistoryItem[];
  preferredLanguage?: string;
}

const STORAGE_KEY_PREFIX = 'antifraud_user_';

export function getUserProfile(principal: string): UserProfile {
  try {
    const key = `${STORAGE_KEY_PREFIX}${principal}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading user profile:', error);
  }
  return { history: [] };
}

export function saveUserProfile(principal: string, profile: UserProfile): void {
  try {
    const key = `${STORAGE_KEY_PREFIX}${principal}`;
    localStorage.setItem(key, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
}

export function clearUserProfile(principal: string): void {
  try {
    const key = `${STORAGE_KEY_PREFIX}${principal}`;
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing user profile:', error);
  }
}
