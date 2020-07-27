<template>
  <pre class="content-body" v-html="parsedEmoji"></pre>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { parseAnchorTag, parseEmoji } from '@/utils/content';
export default defineComponent({
  props: {
    body: {
      type: String,
    },
  },
  setup(props) {
    const parsedAncor: string = parseAnchorTag(props.body, 'content-body__link');
    const parsedEmoji: string = parseEmoji(parsedAncor, 'content-body__emoji');
    return { parsedEmoji };
  },
});
</script>
<style lang="scss">
.content-body {
  max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 0;
  color: rgba(11, 13, 45, 0.7);
  font-weight: 300;
  background-color: var(--color-white-bg);
  @include md {
    padding-top: calc(2 * var(--size-sp-safe-space));
  }
  &__emoji {
    width: var(--size-font-default);
    height: var(--size-font-default);
    margin-top: -0.1em;
    margin-right: 0.1em;
  }
  &__link {
    color: var(--color-green);
    font-weight: 500;
    &:visited {
      color: var(--color-green);
    }
    .announcement & {
      color: var(--color-blue);
      &:visited {
        color: var(--color-blue);
      }
    }
  }
}
</style>
