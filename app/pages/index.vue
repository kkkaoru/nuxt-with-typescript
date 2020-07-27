<template>
  <TopTemplate :banners="banners" />
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { bannerStore } from '@/utils/store-accessor';
import TopTemplate from '@/components/templates/pages/top/index.vue';

export default defineComponent({
  components: {
    TopTemplate,
  },
  async asyncData() {
    await Promise.all([bannerStore.fetchBanners()]);
  },
  setup() {
    const banners = computed(() => bannerStore.banners);

    return {
      banners,
    };
  },
});
</script>
