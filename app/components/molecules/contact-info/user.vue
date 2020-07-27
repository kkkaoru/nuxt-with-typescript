<template>
  <div class="user-info">
    <div class="user-info__name">{{ `${userName} 様` }}</div>
    <div class="user-info__email">{{ userEmail }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.user-info {
  display: block;
  padding: 2.4rem;
  background-color: var(--color-white);
  border: 0.2rem solid var(--color-white-darkest);
  border-radius: 0.4rem;
  $text-color: rgba(var(--color-black-rgb), 0.7);
  &__email {
    padding-top: 1rem;
    color: $text-color;
  }
  &__name {
    color: $text-color;
  }
}
</style>
