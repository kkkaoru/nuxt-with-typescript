import { CommonModalTemplateProps } from '@/components/molecules/modal/common-modal-template/types';

export const bodyData: CommonModalTemplateProps = {
  buttonColor: 'red',
  main: {
    title: 'お支払いを停止しますか？',
    description: [
      'お支払いを停止すると、次回のお支払い予定日以降会員特典を受けられなくなります。本当によろしいですか？',
    ],
    statusText: ['停止処理中です。', 'しばらくお待ち下さい。'],
    buttonText: '停止する',
  },
  error: {
    title: 'エラーが発生しました。',
    description: ['支払いの停止に失敗しました。'],
  },
  success: {
    title: 'お支払いを停止しました。',
    description: [],
  },
};
