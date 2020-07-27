<template>
  <nuxt-link class="license-button" :to="lincenseLink">{{ label }} </nuxt-link>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api';
import { License } from '~/types/api/license';

export default defineComponent({
  props: {
    license: {
      type: Object as PropType<License>,
      required: true,
    },
    label: {
      type: String,
      default: () => 'プランを見る',
    },
    prefix: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    const lincenseLink = computed(() => `${props.prefix}/licenses/${props.license.slug}`);
    return { lincenseLink };
  },
});
</script>
<style lang="scss" scoped>
.license-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.6rem;
  color: var(--color-on-green);
  text-decoration: none;
  background-color: var(--color-green);
  border-radius: 1.2rem;
  &:visited {
    color: var(--color-on-green);
  }
}
</style>
