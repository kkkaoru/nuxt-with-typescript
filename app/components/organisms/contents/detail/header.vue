<template>
  <div class="content-header">
    <ul v-if="tags.length > 0" class="content-header__tags">
      <li v-for="(tag, index) in tags" :key="index" class="content-header__tag-container">
        <span class="content-header__tag-text">#{{ tag }}</span>
      </li>
    </ul>
    <h1 class="content-header__text">{{ content.name }}</h1>
    <HeaderInfo :content="content" :fan-club="fanclub" :display-state="displayState" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { ContentSummary } from '@/types/api/content';
import { Fanclub } from '@/types/api/fanclub';
import { generateDisplayTimeText, generateDateTime } from '@/utils/date-time';
import HeaderInfo from '@/components/molecules/content/header-info.vue';
export default defineComponent({
  components: {
    HeaderInfo,
  },
  props: {
    content: {
      type: Object as PropType<ContentSummary>,
      required: true,
    },
    tags: {
      type: Array as PropType<string[]>,
      default: [] as string[],
    },
    fanclub: {
      type: Object as PropType<Fanclub>,
      required: true,
    },
    displayState: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const publishedDate = new Date(props.content.publishedAt);
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
.content-header {
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
