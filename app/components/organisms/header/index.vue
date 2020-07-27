<template>
  <header class="header">
    <nuxt-link :to="logoLink">
      <img class="header__logo" src="https://placehold.it/500x200" />
    </nuxt-link>
  </header>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    logoLink: {
      type: String,
      default: '/',
    },
  },
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  &__logo {
    width: var(--width-logo);
    height: var(--height-logo);
  }
}
</style>
