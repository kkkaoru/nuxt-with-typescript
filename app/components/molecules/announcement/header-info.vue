<template>
  <div class="header-info">
    <div class="header-info__container">
      <ul class="header-info__sub">
        <li class="header-info__sub-container">
          <time class="header-info__time-text" :datetime="dateTime">{{ time }}</time>
          <span class="header-info__time-suffix">投稿</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Announcement } from '@/types/api/announcement';
import { generateDisplayTimeText, generateDateTime } from '@/utils/date-time';

export default defineComponent({
  components: {},
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
.header-info {
  display: flex;
  padding-top: var(--size-sp-safe-space);
  &__container {
    & + & {
      padding-left: 1rem;
    }
  }
  &__fanclub-icon {
    width: 4.4rem;
    height: 4.4rem;
    border: 0.3rem solid var(--color-green);
    border-radius: 2em;
  }
  &__fanclub-name {
    color: var(--color-green);
    .announcement & {
      color: rgba(11, 13, 45, 0.9);
    }
    font-size: 1.9rem;
  }
  &__sub {
    display: flex;
    margin-top: -0.6rem;
  }
  @mixin sub-info-text {
    color: rgba(11, 13, 45, 0.48);
    font-size: 1.1rem;
  }
  &__sub-container {
    & + & {
      &::before {
        @include sub-info-text;
        display: inline;
        content: '・';
      }
    }
  }
  &__time-text {
    @include sub-info-text;
  }
  &__time-suffix {
    @include sub-info-text;
  }
  &__publish-state {
    @include sub-info-text;
  }
}
</style>
