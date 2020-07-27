<template>
  <div class="subscription-help-wrap">
    <img class="subscription-help-wrap__icon" :src="require('@/assets/no-index/icons/help.svg')" alt="help" />
    <div class="subscription-help-wrap__text-inner">
      <SubscriptionHelpJa />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SubscriptionHelpJa from './ja.vue';

export default defineComponent({
  components: {
    SubscriptionHelpJa,
  },
});
</script>
<style lang="scss" scoped>
.subscription-help-wrap {
  display: flex;
  padding: var(--size-sp-safe-space) 2.4rem 0;
  &__icon {
    width: 2.4rem;
    height: 2.4rem;
    user-select: none;
  }
  &__text-inner {
    padding-left: 0.8rem;
  }
}
</style>
