<template>
  <main>
    <Header :logo-link="logoLink" />
    <nuxt />
  </main>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Header from '@/components/organisms/header/index.vue';
export default defineComponent({
  props: {
    logoLink: {
      type: String,
      default: '/',
    },
  },
  components: {
    Header,
  },
});
</script>
<style lang="scss">
@import '../scss/colors.scss';
@import '../scss/font-sizes.scss';
@import '../scss/heights.scss';
@import '../scss/widths.scss';
@import '../scss/init.scss';

:root {
  @include font-colors;
  @include colors;
  @include font-sizes;
  @include heights;
  @include widths;
}
</style>
