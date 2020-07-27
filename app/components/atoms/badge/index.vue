<template>
  <div class="badge">
    <slot />
    <span v-show="isShowBadge" class="badge__count" :style="badgeColorStyle">
      {{ label }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  props: {
    isShowBadge: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'var(--color-yellow)',
    },
    textColor: {
      type: String,
      default: '#fff',
    },
  },
  setup(props) {
    const badgeColorStyle = computed(() => {
      return {
        color: props.textColor,
        'background-color': props.backgroundColor,
        'border-color': props.backgroundColor,
      };
    });

    return { badgeColorStyle };
  },
});
</script>
<style lang="scss" scoped>
.badge {
  display: flex;
  align-items: flex-start;
  &__count {
    margin-top: -1rem;
    margin-left: -1.1rem;
    padding: 0.4rem 0.6rem;
    font-size: 1rem;
    line-height: 1;
    border-radius: 1em;
  }
}
</style>
