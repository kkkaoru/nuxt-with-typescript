import { PaymentTypeLabel, PaymentPerMonthlyLabel, PaymentDaysLabel } from '@/types/payment';

export const PaymentTypeCreditCard: PaymentTypeLabel = {
  type: 'stripe',
  label: 'クレジットカード',
};

export const PaymentTypeConvenienceStore: PaymentTypeLabel = {
  type: 'komoju',
  label: 'コンビニエンスストア',
};

export const PaymentTypeLabelsJa: PaymentTypeLabel[] = [PaymentTypeCreditCard, PaymentTypeConvenienceStore];

export const PaymentPeriodMonthlySuffixJa: PaymentPerMonthlyLabel = {
  perName: 'ヶ',
  month: '月',
};

export const PaymentPeriodDaysSuffixJa: PaymentDaysLabel = {
  day: '日間',
};
