<template>
  <picture class="check-icon">
    <img :src="require('@/assets/no-index/icons/check-green.svg')" class="check-icon__image" />
  </picture>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({});
</script>
<style lang="scss" scoped>
.check-icon {
  display: inline-block;
  margin-left: auto;
  opacity: 0;
  transition: all var(--time-checked) var(--type-checked);
  input[type='radio']:checked + label > & {
    opacity: 1;
  }
  &__image {
    width: 2.8rem;
    height: 2.8rem;
    user-select: none;
  }
}
</style>
