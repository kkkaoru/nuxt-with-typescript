import { CommonModalTemplateProps } from '@/components/molecules/modal/common-modal-template/types';

export const bodyData: CommonModalTemplateProps = {
  buttonColor: 'red',
  main: {
    title: 'お支払いを中止しますか？',
    description: [
      'コンビニでのお支払いからサービスへの反映には時間がかかる場合があります。お支払いが済んでいる場合は反映をお待ちください。',
    ],
    statusText: ['中止処理中です。', 'しばらくお待ち下さい。'],
    buttonText: '支払いを中止する',
  },
  error: {
    title: 'エラーが発生しました。',
    description: ['お支払いの中止に失敗しました。'],
  },
  success: {
    title: 'お支払いを中止しました。',
    description: [],
  },
};
