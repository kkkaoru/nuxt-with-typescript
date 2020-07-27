<template>
  <nuxt-link v-if="linkTo" :to="linkTo">
    <template v-if="isSubscriptionFailed">
      <JoinedLicenseMessage :title="title" :warning-text="warningText" />
    </template>
    <template v-else-if="isWaitingKonbiniPayment">
      <JoinedLicenseMessage :title="title" :annotation-text="annotationText" />
    </template>
    <template v-else>
      <JoinedLicenseMessage :title="title" />
    </template>
  </nuxt-link>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { JoinedLicense } from './types';
import { isSubscriptionOrder, isKomojuOrder } from '@/utils/order';
import JoinedLicenseMessage from '@/components/molecules/joined-license/index.vue';

export default defineComponent({
  components: {
    JoinedLicenseMessage,
  },
  props: {
    joinedLicense: {
      type: Object as PropType<JoinedLicense>,
      required: true,
    },
    prefix: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    const title = computed(() => props.joinedLicense.license.name);

    // サブスクリプション失敗時、警告文を表示しライセンスページヘのリンクを用意する
    const isSubscriptionFailed = computed(() =>
      props.joinedLicense.incompleteOrders.some((order) => isSubscriptionOrder(order)),
    );
    const warningText = computed(() =>
      isSubscriptionFailed.value ? '定期購入が完了しておりません。お支払い情報を確認してください。' : null,
    );

    const linkTo = computed(() => `${props.prefix}/licenses/${props.joinedLicense.license.slug}`);

    // コンビニ決済待ち時、メッセージを表示
    const isWaitingKonbiniPayment = computed(() =>
      props.joinedLicense.incompleteOrders.some((order) => isKomojuOrder(order)),
    );
    const annotationText = computed(() =>
      isWaitingKonbiniPayment.value
        ? '完了していないお支払いがあります。コンビニでのお支払いをお待ちしております。'
        : null,
    );

    return { title, warningText, linkTo, annotationText, isWaitingKonbiniPayment, isSubscriptionFailed };
  },
});
</script>
