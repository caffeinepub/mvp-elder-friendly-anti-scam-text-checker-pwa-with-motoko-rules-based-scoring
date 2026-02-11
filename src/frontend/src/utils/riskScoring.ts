// Pure deterministic risk scoring function
// Computes aggregated 0-100 risk score using configurable weights
// IO-free: accepts factor inputs, returns clamped score

import { riskConfig } from './riskWeights';

export interface RiskFactors {
  hasHighRiskKeywords: boolean;
  hasMediumRiskKeywords: boolean;
  internalReportCount: number;
  hasExternalPublicSource: boolean;
  isHighReportFrequency: boolean;
}

/**
 * Compute aggregated risk score (0-100) from factor inputs
 * Uses configured weights and applies 100 cap
 */
export function computeRiskScore(factors: RiskFactors): number {
  const { weights } = riskConfig;
  
  let score = 0;
  
  // High-risk keywords contribution
  if (factors.hasHighRiskKeywords) {
    score += weights.highRiskKeywords;
  }
  
  // Medium-risk keywords contribution
  if (factors.hasMediumRiskKeywords) {
    score += weights.mediumRiskKeywords;
  }
  
  // Internal reports contribution (capped)
  const reportContribution = Math.min(
    factors.internalReportCount * weights.internalReportBase,
    weights.internalReportMax
  );
  score += reportContribution;
  
  // External public source contribution
  if (factors.hasExternalPublicSource) {
    score += weights.externalPublicSource;
  }
  
  // High report frequency contribution
  if (factors.isHighReportFrequency) {
    score += weights.highReportFrequency;
  }
  
  // Clamp to 0-100 range
  return Math.max(0, Math.min(100, Math.round(score)));
}

/**
 * Map numeric score to risk level
 */
export function scoreToRiskLevel(score: number): 'Low' | 'Medium' | 'High' {
  if (score >= 60) return 'High';
  if (score >= 30) return 'Medium';
  return 'Low';
}
