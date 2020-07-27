import { SubscriptionStatusState } from './types';
import { SubscriptionStatus } from '@/types/fan-club';
import {
  decideSubscriptionStatusText,
  decideSubscriptionWaitingText,
  decideSubscription3dSecureTexts,
  decideFailedPaymentTexts,
} from '@/utils/fan-club';

export function generateSubscriptionStatusState(
  status: SubscriptionStatus,
  isUserLicenseActive: boolean,
): SubscriptionStatusState {
  return {
    statusText: decideSubscriptionStatusText(status, isUserLicenseActive),
    waitingText: status === SubscriptionStatus.paymentProcessing ? decideSubscriptionWaitingText() : '',
    needs3dSecureTexts: status === SubscriptionStatus.needs3dSecure ? decideSubscription3dSecureTexts() : [],
    failedPaymentTexts: status === SubscriptionStatus.failedPayment ? decideFailedPaymentTexts() : [],
    isShowFireIcon: isUserLicenseActive,
    isPaymentProcessing: status === SubscriptionStatus.paymentProcessing,
  };
}
