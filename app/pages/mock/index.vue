<template>
  <TopTemplate :banners="mockBanners" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TopTemplate from '@/components/templates/pages/top/index.vue';
import { mockBanners } from '@/mocks/banner';

export default defineComponent({
  layout: 'mock',
  components: {
    TopTemplate,
  },
  setup() {
    return {
      mockBanners,
    };
  },
});
</script>
