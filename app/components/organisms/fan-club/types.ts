import { PaymentType } from '@/types/api/payment-setting';
import {
  PaymentMethod,
  PaymentInputs,
  CreditCardInputs,
  PaymentPeriod,
  ConvenienceStoreRegistration,
  DisplayCreditCardInformation,
} from '@/types/payment';

export interface FanClubInputs {
  paymentMethods: PaymentMethod[];
  paymentInputs: PaymentInputs;
}
export type RegistrationInputs = {
  activeCard: DisplayCreditCardInformation;
  creditCardInputs: CreditCardInputs;
};
export interface WaitingPayment {
  paymentType: PaymentType;
  paymentPeriod: PaymentPeriod;
  convenienceStore: ConvenienceStoreRegistration;
}
