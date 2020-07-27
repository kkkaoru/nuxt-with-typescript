<template>
  <div class="accordion">
    <input :id="id" type="checkbox" class="accordion__input" />
    <label :for="id" class="accordion__title">{{ title }}</label>
    <div class="accordion__content">
      <PreWithLink :html="trimedContent" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import PreWithLink from '@/components/atoms/pre/with-link.vue';

export default defineComponent({
  components: {
    PreWithLink,
  },
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  setup(props) {
    const trimedContent = computed(() =>
      props.content
        .split('\n')
        .map((s) => s.trim())
        .join('\n'),
    );

    return { trimedContent };
  },
});
</script>
<style lang="scss" scoped>
.accordion {
  $triangle-size: 0.5em;
  &__title {
    position: relative;
    display: block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.6rem;
    cursor: pointer;
    &::after {
      width: $triangle-size;
      height: $triangle-size;
      border-right: $triangle-size solid transparent;
      border-bottom: $triangle-size solid var(--color-navy);
      border-left: $triangle-size solid transparent;
      transform: rotate(90deg);
      transition: all 0.1s ease-in;
      content: '';
    }
    input:checked + & {
      &::after {
        transform: rotate(180deg);
      }
    }
  }
  &__input {
    display: none;
  }
  &__content {
    max-height: 0;
    padding: 0 1.6rem;
    overflow-y: hidden;
    transition: all 0.2s ease-out;
    input:checked + label + & {
      max-height: 300vh;
      padding-bottom: 1.6rem;
      transition-duration: 0.1s;
    }
  }
}
</style>
