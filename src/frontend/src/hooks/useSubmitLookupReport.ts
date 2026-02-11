// React hook for submitting anonymous reports from Advanced Contact Lookup
// Handles frontend-only submission without authentication requirement

import { useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

interface ReportSubmission {
  contact: string;
  type: 'phone' | 'email';
  category: string;
  description: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

export function useSubmitLookupReport() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitReport = async (data: ReportSubmission): Promise<SubmitResult> => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate submission delay (frontend-only for now)
      // In a real implementation, this would call the backend actor
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Store report in localStorage for demonstration
      // (In production, this would be a backend call)
      const reports = JSON.parse(localStorage.getItem('anonymous_reports') || '[]');
      reports.push({
        ...data,
        timestamp: Date.now(),
        id: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      });
      localStorage.setItem('anonymous_reports', JSON.stringify(reports));

      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Report submission error:', err);
      const errorMessage = t.reportSubmissionError || 'Failed to submit report';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitReport,
    isSubmitting,
    error,
    success,
  };
}
