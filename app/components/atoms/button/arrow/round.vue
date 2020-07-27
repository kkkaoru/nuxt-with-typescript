<template>
  <button class="arrow-button--round" @click="onClick">
    <img :class="directionClassName" :src="require('@/assets/no-index/icon-chevron-left.svg')" :alt="alt" />
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { ArrowDirection } from './types';

const DEFAULT_DIRECTION: ArrowDirection = 'left';
const LEFT_CLASS = 'arrow-button--round__left';
const RIGHT_CLASS = 'arrow-button--round__right';

export default defineComponent({
  props: {
    direction: {
      type: String as PropType<ArrowDirection>,
      default: DEFAULT_DIRECTION,
    },
    alt: {
      type: String,
      default: 'Arrow',
    },
  },
  setup(props, ctx) {
    const directionClassName = computed(() => (props.direction === DEFAULT_DIRECTION ? LEFT_CLASS : RIGHT_CLASS));
    const onClick = () => {
      ctx.emit('click');
    };
    return {
      directionClassName,
      onClick,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.arrow-button--round {
  background-color: transparent;
  border: none;
  &__left {
    @include common-arrow;
  }
  &__right {
    @include common-arrow;
    transform: scale(-1, 1);
  }
}
</style>
