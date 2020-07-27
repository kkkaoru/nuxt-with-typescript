<template>
  <button class="button--green" :type="type" :disabled="!enabled" @click="onClick">
    <img v-if="loading" alt="text" :src="require('@/assets/no-index/spinner-white.gif')" class="button__loading" />
    <span v-else>{{ text }}</span>
  </button>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api';
export default defineComponent({
  props: {
    text: {
      type: String,
    },
    type: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx: SetupContext) {
    const onClick = () => {
      if (props.loading) {
        return;
      }
      ctx.emit('click');
    };
    return {
      onClick,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../button.scss';
@include loading-image;

.button--green {
  @include button-style(var(--color-green), var(--color-on-green), var(--color-size-default));
}
</style>
