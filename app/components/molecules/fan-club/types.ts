export type SubscriptionStatusState = {
  statusText: string;
  waitingText: string;
  needs3dSecureTexts: string[];
  failedPaymentTexts: string[];
  isShowFireIcon: boolean;
  isPaymentProcessing: boolean;
};
