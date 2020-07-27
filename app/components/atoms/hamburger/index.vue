<template>
  <img class="hamburger" :src="require('@/assets/no-index/hamburger@2x.png')" />
</template>
<style lang="scss" scoped>
.hamburger {
  $hamburger-size: 2.4rem;
  width: $hamburger-size;
  height: $hamburger-size;
}
</style>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
