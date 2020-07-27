<template>
  <h2 class="input-title">{{ title }}</h2>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
});
</script>
<style lang="scss" scoped>
.input-title {
  color: rgba(var(--color-black-rgb), 0.9);
  font-weight: normal;
  font-size: 1.3rem;
}
</style>
