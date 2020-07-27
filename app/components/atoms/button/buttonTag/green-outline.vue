<template>
  <button class="button-green--outline" :type="type" @click="onClick">{{ text }}</button>
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
  },
  setup(_, ctx: SetupContext) {
    const onClick = () => {
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
.button-green--outline {
  $boder: 0.2rem solid var(--color-green);
  @include button-style(transparent, rgba(11, 13, 45, 0.9), var(--color-size-default), $boder);
}
</style>
