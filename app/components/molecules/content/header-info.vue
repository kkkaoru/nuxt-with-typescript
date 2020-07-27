<template>
  <div class="header-info">
    <div class="header-info__container">
      <picture>
        <img :src="fanClub.iconUrl" :alt="fanClub.name" class="header-info__fanclub-icon" />
      </picture>
    </div>
    <div class="header-info__container">
      <h2 class="header-info__fanclub-name">{{ fanClub.name }}</h2>
      <ul class="header-info__sub">
        <li class="header-info__sub-container">
          <time class="header-info__time-text" :datetime="dateTime">{{ time }}</time>
          <span class="header-info__time-suffix">投稿</span>
        </li>
        <li v-if="displayState" class="header-info__sub-container">
          <span class="header-info__publish-state">{{ publishedStateText }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { ContentDetail } from '@/types/api/content';
import { Fanclub } from '@/types/api/fanclub';
import { generateDisplayTimeText, generateDateTime } from '@/utils/date-time';
import { decidePublishedStateText } from '@/utils/content';

export default defineComponent({
  components: {},
  props: {
    content: {
      type: Object as PropType<ContentDetail>,
    },
    fanClub: {
      type: Object as PropType<Fanclub>,
      default: null,
    },
    displayState: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const publishedStateText = decidePublishedStateText(props.content.isLimited);
    const publishedDate = new Date(props.content.publishedAt);
    const time = generateDisplayTimeText(publishedDate);
    const dateTime = generateDateTime(publishedDate);
    return {
      time,
      dateTime,
      publishedStateText,
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
