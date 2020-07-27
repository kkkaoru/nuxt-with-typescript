<template>
  <p class="contact-annotation">
    お客様の情報を含むお問い合わせ情報は、プライバシーポリシーに従って取り扱います。 ご同意のうえ、送信をお願いします。
    お問い合わせの送信後、受付完了メールを送信させていただきます。
    混雑状況や内容により、返信に1週間ほどお時間をいただく場合があります。
  </p>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({});
</script>
<style lang="scss" scoped>
.contact-annotation {
  color: rgba(var(--color-black-rgb), 0.48);
  font-size: 1.3rem;
}
</style>
