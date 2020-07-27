<template>
  <div v-if="content" class="content">
    <nuxt-link :to="contentLink" class="content__image-wrap">
      <img :src="content.coverImageUrl" :alt="content.name" class="content__image" />
    </nuxt-link>
    <div class="content__description">
      <nuxt-link :to="contentLink" class="content__link">
        <h2 class="content__title">{{ content.name }}</h2>
      </nuxt-link>
      <p class="content__description-text">{{ content.textFirstChar }}</p>
      <ul class="content__info">
        <li class="content__info-container">
          <span class="content__info-text">
            <time :datetime="dateTime">{{ dateText }}</time>
          </span>
        </li>
        <li class="content__info-container--has-dot">
          <span class="content__info-text">{{ publishedStateText }}</span>
        </li>
        <li class="content__info-container--has-dot">
          <ul class="content__tags">
            <li v-for="(tag, index) in content.tags" :key="index" class="content__tag-container">
              <span class="content__tag-text">#{{ tag }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { ContentSummary } from '@/types/api/content';
import { decidePublishedStateText } from '@/utils/content';
import { generateDistanceText, generateDateTime } from '@/utils/date-time';

export default defineComponent({
  props: {
    content: {
      type: Object as PropType<ContentSummary>,
      required: true,
    },
  },
  setup(props) {
    const content = props.content;
    const publishedStateText = decidePublishedStateText(content.isLimited);
    const publishedDate = new Date(content.publishedAt);
    const dateText = generateDistanceText(publishedDate);
    const dateTime = generateDateTime(publishedDate);

    const contentLink = computed(() => `/contents/${content.slug}`);

    return {
      publishedStateText,
      dateText,
      dateTime,
      contentLink,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  $text-safe-area: 0.5rem;

  overflow: hidden;
  border-radius: 1.2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  &__link {
    display: block;
    text-decoration: none;
  }
  &__image-wrap {
    display: block;
    width: 100%;
    height: 52.1vw;
    overflow: hidden;
    background-color: #fff;
    @include md {
      height: 34.5rem;
    }
  }
  &__image {
    width: 100%;
    background-color: #fff;
  }
  &__title {
    color: var(--color-green);
    font-size: var(--size-font-default);
  }
  &__description {
    padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 2.4rem;
    background-color: var(--color-white);
  }
  &__description-text {
    display: -webkit-box;
    padding-top: $text-safe-area;
    overflow: hidden;
    font-size: 1.3rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  @mixin common-sub-list {
    display: flex;
    flex-direction: row;
  }
  @mixin common-sub-text {
    color: #c1c1c5;
    font-size: 1.1rem;
  }
  @mixin common-sub-container {
    display: flex;
    align-items: baseline;
  }
  &__info {
    @include common-sub-list;
    padding-top: $text-safe-area;
  }

  &__info-container {
    @include common-sub-container;
    &--has-dot {
      @include common-sub-container;
      &::before {
        content: '・';
        @include common-sub-text;
      }
    }
  }
  &__info-text {
    @include common-sub-text;
  }
  &__tags {
    @include common-sub-list;
  }
  &__tag-container {
    @include common-sub-container;
    & + & {
      padding-left: 0.2em;
    }
  }
  &__tag-text {
    @include common-sub-text;
  }
}
</style>
