import { PaymentSetting } from '@/types/api/payment-setting';

/** 月額表示用の支払い設定 */
export const DEFAULT_PAYMENT_SETTING: PaymentSetting = {
  id: -1,
  serviceType: 'stripe',
  isSubscription: true,
  percentOff: '0',
  paymentFeePercent: '0',
  period: 1,
  status: 'active',
};
