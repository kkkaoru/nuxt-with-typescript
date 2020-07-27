<template>
  <div class="fanclub-tabs">
    <ul class="fanclub-tabs__list">
      <li class="fanclub-tabs__container">
        <span v-if="isLicensesActive" class="fanclub-tabs__tab--active">{{ licensesName }}</span>
        <nuxt-link v-else class="fanclub-tabs__tab" :to="licensesTo">{{ licensesName }}</nuxt-link>
      </li>
      <li class="fanclub-tabs__container">
        <span v-if="!isLicensesActive" class="fanclub-tabs__tab--active">{{ contentsName }}</span>
        <nuxt-link v-else class="fanclub-tabs__tab" :to="contentsTo">{{ contentsName }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    licensesName: {
      type: String,
      default: 'プラン',
    },
    contentsName: {
      type: String,
      default: '投稿',
    },
    isLicensesActive: {
      type: Boolean,
      default: true,
    },
    licensesTo: {
      type: String,
      default: '/',
    },
    contentsTo: {
      type: String,
      default: '/',
    },
  },
});
</script>
<style lang="scss" scoped>
.fanclub-tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 0;
  background-color: var(--color-white);
  &__list {
    display: flex;
    width: 100%;
    max-width: var(--size-fanclub-max-width);
  }
  &__container {
    width: 50%;
  }
  &__tab {
    @mixin tab-styles($font-color, $border-color) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 5.6rem;
      color: $font-color;
      font-weight: bold;
      font-size: var(--size-font-default);
      background-color: transparent;
      border: none;
      border-bottom: 0.3rem solid $border-color;
      transition: all 0.16s ease-in;
    }
    @include tab-styles(rgba(var(--color-black-rgb), 0.7), transparent);
    cursor: pointer;
    &--active {
      @include tab-styles(rgba(var(--color-black-rgb), 0.9), var(--color-green));
    }
  }
}
</style>
