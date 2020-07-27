<template>
  <img class="logo-horizontal" :src="require('@/assets/logo/nijisanji-fanclub.svg')" :alt="serviceName" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    serviceName: {
      type: String,
      default: 'にじさんじファンクラブ',
    },
  },
});
</script>
<style lang="scss" scoped>
.logo-horizontal {
  display: block;
  // ↓CSSの変数を読み込むように変更
  // width: 11.2rem;
  width: var(--size-header-logo-width);
  height: calc(var(--size-header-height) - var(--size-header-border-height));
  padding: 0.8rem 0;
}
</style>
