<template>
  <div class="waiting-store">
    <h2 class="waiting-store__title">
      <span class="waiting-store__title-text">お支払い番号</span>
    </h2>
    <ul class="waiting-store__list">
      <li class="waiting-store__container">
        <div class="waiting-store__description">
          <p class="waiting-store__description-text"
            >お近くの<span class="waiting-store__description-text--store">ファミリーマート</span
            >にて、お支払いをお願いいたします。お支払い期限を過ぎると番号は無効になります。</p
          >
        </div>
        <div class="waiting-store__link-wrap">
          <nuxt-link to="#" class="waiting-store__link">詳しいお支払い方法</nuxt-link>
        </div>
        <div class="waiting-store__registration-wrap">
          <ConvenienceStoreComponent :registration="convenienceStore" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { ConvenienceStoreRegistration } from '@/types/payment';
import ConvenienceStoreComponent from '@/components/molecules/payment/convenience-store-registoration.vue';

export default defineComponent({
  components: {
    ConvenienceStoreComponent,
  },
  props: {
    convenienceStore: {
      type: Object as PropType<ConvenienceStoreRegistration>,
    },
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

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
