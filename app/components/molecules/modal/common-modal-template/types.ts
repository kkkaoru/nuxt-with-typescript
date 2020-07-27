import { ModalButtonColor } from '@/components/molecules/modal/common-body/types';

export type BaseModalProps = {
  title: string;
  description: string[];
  buttonText?: string;
};

/** エラーモーダルのプロパティ */
export type ErrorModalProps = BaseModalProps;
/** 成功モーダルのプロパティ */
export type SuccessModalProps = BaseModalProps;
/** 初期モーダルのプロパティ */
export type MainModalProps = BaseModalProps & {
  statusText?: string[];
  buttonText: string;
};

export type CommonModalTemplateProps = {
  buttonColor: ModalButtonColor;
  main: MainModalProps;
  error?: ErrorModalProps;
  success?: SuccessModalProps;
};
