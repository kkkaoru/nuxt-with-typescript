<template>
  <section>
    <Carousel :banners="banners" />
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Banner } from '@/types/banner';
import Carousel from '@/components/organisms/carousel/banners/index.vue';

export default defineComponent({
  components: {
    Carousel,
  },
  props: {
    banners: {
      type: Array as PropType<Banner[]>,
      default: () => [] as Banner[],
    },
  },
});
</script>
