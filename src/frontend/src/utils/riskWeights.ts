// Configurable risk scoring weights for professional anti-fraud engine
// All weights are adjustable for future calibration

export interface RiskWeights {
  highRiskKeywords: number;
  mediumRiskKeywords: number;
  internalReportBase: number;
  internalReportMax: number;
  externalPublicSource: number;
  highReportFrequency: number;
}

export interface RiskThresholds {
  highFrequencyReportCount: number;
}

// Professional default weights (0-100 scale)
export const DEFAULT_RISK_WEIGHTS: RiskWeights = {
  highRiskKeywords: 40,
  mediumRiskKeywords: 20,
  internalReportBase: 10,
  internalReportMax: 30,
  externalPublicSource: 25,
  highReportFrequency: 15,
};

// Configurable thresholds
export const DEFAULT_RISK_THRESHOLDS: RiskThresholds = {
  highFrequencyReportCount: 5, // 5+ reports = high frequency
};

// Export singleton config for easy import
export const riskConfig = {
  weights: DEFAULT_RISK_WEIGHTS,
  thresholds: DEFAULT_RISK_THRESHOLDS,
};
