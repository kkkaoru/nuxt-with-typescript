<template>
  <div class="announcement-media">
    <AnnouncementVimeo v-if="videoUrl" :video-url="videoUrl" />
    <AnnouncementImages v-if="images.length > 0" :images="images" :name="announcementSlug" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import AnnouncementVimeo from '@/components/molecules/announcement/vimeo.vue';
import AnnouncementImages from '@/components/molecules/announcement/images.vue';

export default defineComponent({
  components: {
    AnnouncementVimeo,
    AnnouncementImages,
  },
  props: {
    videoUrl: {
      type: String,
    },
    images: {
      type: Array as PropType<string[]>,
    },
    announcementSlug: {
      type: String,
      requires: true,
    },
  },
});
</script>
