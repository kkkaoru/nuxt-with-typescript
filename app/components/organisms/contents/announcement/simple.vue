<template>
  <div class="announcement">
    <nuxt-link :to="`${prefix}/announcements/${announcement.slug}`" class="announcement__link">
      <h2 class="announcement__title">{{ announcement.name }}</h2>
      <time class="announcement__datetime" :datetime="dateTime">{{ displayDatetimeText }}</time>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Announcement } from '@/types/api/announcement';
import { generateAnnounceDateTimeText, generateDateTime } from '@/utils/date-time';

export default defineComponent({
  props: {
    announcement: {
      type: Object as PropType<Announcement>,
    },
    prefix: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const announcementDate = new Date(props.announcement.publishedAt);
    const displayDatetimeText = generateAnnounceDateTimeText(announcementDate);
    const dateTime = generateDateTime(announcementDate);
    return {
      displayDatetimeText,
      dateTime,
    };
  },
});
</script>
<style lang="scss" scoped>
.announcement {
  &__link {
    display: block;
    width: 100%;
    padding: 2.4rem var(--size-sp-safe-space) 2.6rem;
    border-bottom: 0.2rem solid #ececec;
  }
  &__title {
    display: -webkit-box;
    overflow: hidden;
    color: rgba(11, 13, 45, 0.7);
    font-size: var(--size-font-default);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  &__datetime {
    color: rgba(11, 13, 45, 0.48);
    font-size: 1.1rem;
  }
}
</style>
