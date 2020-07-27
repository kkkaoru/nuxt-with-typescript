import { CommonModalTemplateProps } from '@/components/molecules/modal/common-modal-template/types';

export const bodyData: CommonModalTemplateProps = {
  buttonColor: 'blue',
  main: {
    title: 'この内容で送信しますか？',
    description: [
      'お支払いを停止すると、次回のお支払い予定日以降会員特典を受けられなくなります。本当によろしいですか？',
    ],
    statusText: ['送信しています...'],
    buttonText: '送信',
  },
  error: {
    title: 'お問い合わせの送信に失敗しました',
    description: ['支払いの停止に失敗しました。'],
  },
};
