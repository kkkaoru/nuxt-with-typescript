<template>
  <div class="subscription-status" :style="overwriteStatusStyle">
    <div class="subscription-status__text-wrap">
      <picture v-if="state.isShowFireIcon" class="subscription-status__image-wrap">
        <img :src="require('@/assets/no-index/icons/fire.svg')" alt="Fire icon" class="subscription-status__image" />
      </picture>
      <span class="subscription-status__text">{{ state.statusText }}</span>
    </div>
    <p v-if="state.isPaymentProcessing" class="subscription-status__annotation">
      <span class="subscription-status__annotation-text">{{ state.waitingText }}</span>
    </p>
    <div v-if="state.needs3dSecureTexts.length !== 0" class="subscription-status__annotation">
      <p v-for="(text, index) in state.needs3dSecureTexts" :key="index" class="subscription-status__annotation-text">{{
        text
      }}</p>
    </div>
    <div v-if="state.failedPaymentTexts.length !== 0" class="subscription-status__annotation">
      <p v-for="(text, index) in state.failedPaymentTexts" :key="index" class="subscription-status__annotation-text">{{
        text
      }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { generateSubscriptionStatusState } from './functions';
import { SubscriptionStatus } from '@/types/fan-club';
export default defineComponent({
  props: {
    status: {
      type: Number as PropType<SubscriptionStatus>,
    },
    needsPaddingBottom: {
      type: Boolean,
      default: true,
    },
    isUserLicenseActive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = computed(() => {
      return generateSubscriptionStatusState(props.status, props.isUserLicenseActive);
    });
    const overwriteStatusStyle = computed(() => {
      return props.needsPaddingBottom
        ? {}
        : {
            paddingBottom: '0',
          };
    });
    return {
      state,
      overwriteStatusStyle,
    };
  },
});
</script>
<style lang="scss" scoped>
.subscription-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0 3.2rem;
  background-color: var(--color-white);
  &__text-wrap {
    display: flex;
    align-items: flex-end;
  }
  &__image-wrap {
    display: inline-block;
    padding-right: 0.5rem;
  }
  &__image {
    width: 2.4rem;
    height: 2.4rem;
    user-select: none;
  }
  &__text {
    color: rgba(11, 13, 45, 0.7);
    font-weight: bold;
  }
  &__annotation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: var(--size-sp-safe-space);
  }
  &__annotation-text {
    color: var(--color-red);
    font-size: 1.3rem;
    & + & {
      padding-top: 0.5rem;
    }
  }
}
</style>
