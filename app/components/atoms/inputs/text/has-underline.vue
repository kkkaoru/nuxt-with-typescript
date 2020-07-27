<template>
  <input
    :type="inputType"
    :placeholder="placeholder"
    :value="value"
    :class="className"
    :readonly="readonly"
    @input="onInput($event)"
  />
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext, computed } from '@vue/composition-api';
import { InputTextType } from './types';

export default defineComponent({
  props: {
    inputType: {
      type: String as PropType<InputTextType>,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx: SetupContext) {
    const onInput = (event: InputEvent) => {
      ctx.emit('input', (event.target as HTMLInputElement).value);
    };
    const className = computed(() => (props.hasError ? 'input-text--error' : 'input-text'));
    return {
      onInput,
      className,
    };
  },
});
</script>
<style lang="scss" scoped>
@mixin common-input-text($background-color) {
  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  color: rgba(var(--color-black-rgb), 0.9);
  background-color: $background-color;
  &::placeholder {
    color: rgba(var(--color-black-rgb), 0.48);
  }
}
$border-radius-size: 0.4rem;
.input-text {
  @include common-input-text(#f5f5f5);
  border-bottom: solid 0.3rem var(--color-blue);
  border-radius: $border-radius-size $border-radius-size 0 0;
  &:read-only {
    outline: none;
    opacity: 0.48;
  }
  &--error {
    @include common-input-text(#f5f5f5);
    border-bottom: solid 0.3rem var(--color-red);
    border-radius: $border-radius-size $border-radius-size 0 0;
  }
}
</style>
