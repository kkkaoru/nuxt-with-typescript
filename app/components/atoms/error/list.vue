<template>
  <ul v-if="isShow" class="errors">
    <li v-for="(message, index) in messages" :key="index" class="errors__container">
      <span class="errors__text">{{ message }}</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
export default defineComponent({
  props: {
    messages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    const isShow = computed(() => props.messages.length !== 0);
    return {
      isShow,
    };
  },
});
</script>
<style lang="scss" scoped>
.errors {
  &__container {
    padding-top: 0.8rem;
    font-size: 1.1rem;
  }
  &__text {
    color: var(--color-red);
    font-weight: bold;
  }
}
</style>
