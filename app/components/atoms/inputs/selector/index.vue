<template>
  <div class="select">
    <select :value="value" :class="className" :readonly="readonly" @input="onInput($event)">
      <option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';

type Item = { label: string; value: string };

export default defineComponent({
  props: {
    value: {
      type: String,
    },
    items: {
      type: Array as PropType<Item[]>,
      default: [] as Item[],
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
  setup(props, ctx) {
    const onInput = (event: InputEvent) => {
      ctx.emit('input', (event.target as HTMLInputElement).value);
    };
    const className = computed(() => (props.hasError ? 'select__input--error' : 'select__input'));
    return {
      onInput,
      className,
    };
  },
});
</script>
<style lang="scss" scoped>
@mixin common-input-text {
  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  color: rgba(var(--color-black-rgb), 0.7);
  font-size: var(--size-font-default);
  background-color: var(--color-white);
  border-radius: 0.4rem;
  appearance: none;
  &::placeholder {
    color: rgba(var(--color-black-rgb), 0.48);
  }
}
@mixin triangle($color, $top) {
  $triangle-size: 0.8rem;
  position: absolute;
  top: $top;
  right: 1.6rem;
  bottom: 0;
  display: inline-block;
  width: $triangle-size;
  height: $triangle-size;
  margin: auto 0;
  border-right: $triangle-size solid transparent;
  border-bottom: $triangle-size solid $color;
  border-left: $triangle-size solid transparent;
  transform: rotate(180deg);
  content: '';
}
.select {
  position: relative;
  &::before {
    @include triangle(rgba(var(--color-black-rgb), 0.9), 0.3rem);
  }
  &::after {
    @include triangle(var(--color-white), 0);
  }
  &__input {
    border: solid 0.1rem var(--color-gray);
    @include common-input-text;
    &:focus {
      border: solid 0.2rem var(--color-blue);
    }
    &--error {
      @include common-input-text;
      border: solid 0.2rem var(--color-red);
    }
  }
}
</style>
