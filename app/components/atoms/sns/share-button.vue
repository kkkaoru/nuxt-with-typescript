<template>
  <a :href="ShareInfo.link" class="sns" :style="snsColor" target="_blank" rel="noopener">
    <img class="sns__image" :src="ShareInfo.image" :alt="ShareInfo.name" />
    <span class="sns__text" :style="fontColor">{{ ShareInfo.text }}</span>
  </a>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { ShareInfo } from './types';

export default defineComponent({
  props: {
    ShareInfo: {
      type: Object as PropType<ShareInfo>,
    },
  },
  setup(props) {
    const snsColor = {
      backgroundColor: props.ShareInfo.backgroundColor,
    };
    const fontColor = {
      color: props.ShareInfo.fontColor,
    };
    return {
      snsColor,
      fontColor,
    };
  },
});
</script>
<style lang="scss" scoped>
.sns {
  display: flex;
  align-items: center;
  height: 2.4rem;
  padding: 0 0.8rem;
  color: #fff;
  font-weight: bold;
  font-size: var(--size-font-sns);
  @include xs {
    font-size: 10px;
  }
  border: none;
  border-radius: 0.4rem;
  &__image {
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    user-select: none;
  }
  &__text {
    padding-left: 0.5rem;
  }
}
</style>
