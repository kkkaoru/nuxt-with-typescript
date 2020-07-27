<template>
  <div class="description-pre">
    <pre :class="descriptionClassName">{{ description }}</pre>
    <a v-if="enableExpand" href="javascript:void(0);" :class="linkClassName" @click="clickMoreLink">もっと見る</a>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';

const DEFAULT_DESCRIPTION_CLASS = 'description-pre__text';
const EXPAND_DESCRIPTION_CLASS = 'description-pre__text--expanded';
const DEFAULT_LINK_CLASS = 'description-pre__link--more';
const HIDE_LINK_CLASS = 'description-pre__link--hide';

export default defineComponent({
  props: {
    description: {
      type: String,
      required: true,
    },
    enableExpand: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const isExpanded = ref<boolean>(props.enableExpand);
    const clickMoreLink = () => {
      if (!props.enableExpand) {
        return;
      }
      isExpanded.value = true;
    };
    const descriptionClassName = computed(() =>
      isExpanded.value ? DEFAULT_DESCRIPTION_CLASS : EXPAND_DESCRIPTION_CLASS,
    );
    const linkClassName = computed(() => (isExpanded.value ? DEFAULT_LINK_CLASS : HIDE_LINK_CLASS));
    return {
      descriptionClassName,
      linkClassName,
      clickMoreLink,
    };
  },
});
</script>
<style lang="scss" scoped>
@mixin common-description {
  display: -webkit-box;
  padding-top: var(--size-sp-safe-space);
  color: rgba(var(--color-black-rgb), 0.7);
  font-size: 1.3rem;
  transition: all 0.2s;
}
.description-pre {
  &__text {
    @include common-description;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    @include md {
      -webkit-line-clamp: 100;
    }
    &--expanded {
      @include common-description;
    }
  }
  &__link {
    &--more {
      margin-top: -0.2rem;
      color: var(--color-green);
      font-size: 1.3rem;
      @include md {
        display: none;
      }
    }
    &--hide {
      display: none;
    }
  }
}
</style>
