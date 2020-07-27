import { CommonModalTemplateProps } from '@/components/molecules/modal/common-modal-template/types';

export const bodyData: CommonModalTemplateProps = {
  buttonColor: 'blue',
  main: {
    title: 'ご登録情報を変更しますか？',
    description: ['入力された内容で次回以降の決済を行います。'],
    statusText: ['変更処理中です。', 'しばらくお待ち下さい。'],
    buttonText: 'お支払い情報を変更する',
  },
  error: {
    title: 'エラーが発生しました。',
    description: ['カード情報をご確認の上クレジットカード情報を変更するか、お使いのカード会社にお問い合わせください。'],
  },
  success: {
    title: 'お支払い情報が変更されました。',
    description: ['お支払い情報を変更します。決済処理は変更したあと数日以内に実行されます。'],
  },
};
