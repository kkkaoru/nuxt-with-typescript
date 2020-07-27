<template>
  <div class="announcement-header">
    <h1 class="announcement-header__text">{{ announcement.name }}</h1>
    <HeaderInfo :announcement="announcement" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Announcement } from '@/types/api/announcement';
import { generateDisplayTimeText, generateDateTime } from '@/utils/date-time';
import HeaderInfo from '@/components/molecules/announcement/header-info.vue';

export default defineComponent({
  components: {
    HeaderInfo,
  },
  props: {
    announcement: {
      type: Object as PropType<Announcement>,
      required: true,
    },
  },
  setup(props) {
    const publishedDate = new Date(props.announcement.publishedAt);
    const time = generateDisplayTimeText(publishedDate);
    const dateTime = generateDateTime(publishedDate);
    return {
      time,
      dateTime,
    };
  },
});
</script>
<style lang="scss" scoped>
.announcement-header {
  max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 0;
  background-color: var(--color-white);
  @mixin common-sub-text {
    color: rgba(11, 13, 45, 0.48);
    font-size: 1.3rem;
  }
  @include md {
    padding-top: calc(2 * var(--size-sp-safe-space));
  }
  &__time-text {
    @include common-sub-text;
  }
  &__time-suffix {
    @include common-sub-text;
  }
  &__text {
    padding-top: 0.8rem;
    color: rgba(11, 13, 45, 0.9);
    font-size: 2.3rem;
  }
  $tag-space: 0.2rem;
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-left: -$tag-space;
    padding-top: 0.8rem;
  }
  &__tag-container {
    padding-left: $tag-space;
  }
  &__tag-text {
    @include common-sub-text;
  }
}
</style>
