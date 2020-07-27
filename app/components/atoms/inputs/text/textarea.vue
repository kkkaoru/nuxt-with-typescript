<template>
  <textarea
    :type="inputType"
    :placeholder="placeholder"
    :value="value"
    :class="className"
    :readonly="readonly"
    :style="style"
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
    height: {
      type: String,
      default: '200px',
    },
  },
  setup(props, ctx: SetupContext) {
    const onInput = (event: InputEvent) => {
      ctx.emit('input', (event.target as HTMLInputElement).value);
    };
    const className = computed(() => (props.hasError ? 'input-text--error' : 'input-text'));

    const style = computed(() => {
      return {
        height: props.height,
      };
    });
    return {
      onInput,
      className,
      style,
    };
  },
});
</script>
<style lang="scss" scoped>
@mixin common-input-text {
  width: 100%;
  height: 5.6rem;
  padding: 1rem 1.6rem 0;
  color: rgba(var(--color-black-rgb), 0.7);
  font-size: var(--size-font-default);
  background-color: var(--color-white);
  border-radius: 0.4rem;

  &::placeholder {
    color: rgba(var(--color-black-rgb), 0.48);
  }
}
.input-text {
  @include common-input-text;
  border: solid 0.1rem var(--color-gray);
  &:read-only {
    color: rgba(var(--color-black-rgb), 0.48);
    background-color: #efefef;
    outline: none;
  }
  &:focus {
    border: solid 0.2rem var(--color-blue);
  }
  &--error {
    @include common-input-text;
    border: solid 0.2rem var(--color-red);
  }
}
</style>
