import { CommonModalTemplateProps } from '@/components/molecules/modal/common-modal-template/types';

export const bodyData: CommonModalTemplateProps = {
  buttonColor: 'green',
  main: {
    title: 'お支払いを再実行しますか？',
    description: ['お支払いはいつでも停止できます。'],
    statusText: ['決済処理中です。', 'しばらくお待ち下さい。'],
    buttonText: 'お支払いを再実行する',
  },
  error: {
    title: 'エラーが発生しました。',
    description: [
      'お支払いに失敗しました。',
      'カード情報をご確認の上お支払いを再度実行するか、お使いのカード会社にお問い合わせください。',
    ],
  },
  success: {
    title: 'お支払いを再実行しました。',
    description: ['お支払いが完了しました。'],
  },
};
