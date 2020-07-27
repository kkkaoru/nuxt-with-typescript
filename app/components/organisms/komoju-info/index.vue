<template>
  <div class="waiting-store">
    <h2 class="waiting-store__title">
      <span class="waiting-store__title-text">{{ receiptLabel }} </span>
    </h2>
    <ul class="waiting-store__list">
      <li class="waiting-store__container">
        <div class="waiting-store__description">
          <p class="waiting-store__description-text"
            >お近くの<span class="waiting-store__description-text--store">{{ storeName }}</span
            >にて、お支払いをお願いします。お支払い期限を過ぎると番号は無効になります。</p
          >
        </div>
        <div class="waiting-store__link-wrap">
          <a :href="komojuOrder.instructionsUrl" class="waiting-store__link" target="_blank" rel="noopener"
            >詳しいお支払い方法</a
          >
        </div>
        <div class="waiting-store__registration-wrap">
          <ConvenienceStoreComponent :komoju-order="komojuOrder" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import ConvenienceStoreComponent from './item.vue';
import { KomojuOrder } from '@/types/api/order';
import { generateDisplayStoreName, generateReceiptLabel } from '~/utils/payment';

export default defineComponent({
  components: {
    ConvenienceStoreComponent,
  },
  props: {
    komojuOrder: {
      type: Object as PropType<KomojuOrder>,
      required: true,
    },
  },
  setup(props) {
    const storeName = computed(() => generateDisplayStoreName(props.komojuOrder.store));
    const receiptLabel = computed(() => generateReceiptLabel(props.komojuOrder.store));
    return { storeName, receiptLabel };
  },
});
</script>
<style lang="scss" scoped>
@import '../fan-club/mixins.scss';

.waiting-store {
  @include common-list-layout;
  &__description {
    @include common-padding;
  }
  &__description-text {
    color: rgba(11, 13, 45, 0.48);
    font-size: 1.3rem;
  }
  &__link-wrap {
    @include common-padding;
    padding-top: 0.8rem;
  }
  &__link {
    color: var(--color-blue);
    font-size: 1.3rem;
    &:visited {
      color: var(--color-blue);
    }
  }
  &__registration-wrap {
    padding-top: 1.65rem;
  }
}
</style>
