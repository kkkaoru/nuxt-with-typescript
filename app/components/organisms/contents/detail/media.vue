<template>
  <div class="content-media">
    <ContentVimeo v-if="videoUrl" :video-url="videoUrl" />
    <ContentImages v-if="imageUrls" :image-urls="imageUrls" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import ContentVimeo from '@/components/molecules/content/vimeo.vue';
import ContentImages from '@/components/molecules/content/images.vue';

export default defineComponent({
  components: {
    ContentVimeo,
    ContentImages,
  },
  props: {
    videoUrl: {
      type: String,
    },
    imageUrls: {
      type: Array as PropType<string[]>,
    },
  },
});
</script>
