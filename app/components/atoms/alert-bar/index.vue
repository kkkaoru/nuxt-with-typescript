<template>
  <div class="alert-bar">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
<style lang="scss" scoped>
.alert-bar {
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: var(--color-white);
}
</style>
