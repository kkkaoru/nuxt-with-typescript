<template>
  <ul class="relations">
    <li v-for="(item, index) in relations" :key="index" class="relations__container">
      <ContentComponent :content="item" />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import ContentComponent from '@/components/molecules/content/index.vue';
import { ContentSummary } from '@/types/api/content';

export default defineComponent({
  components: {
    ContentComponent,
  },
  props: {
    relations: {
      type: Array as PropType<ContentSummary[]>,
      default: [],
    },
  },
});
</script>
<style lang="scss" scoped>
.relations {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) calc(2 * var(--size-sp-safe-space));
  background-color: var(--color-white-darkest);
  &__container {
    max-width: var(--size-card-max-width);
    & + & {
      padding-top: var(--size-sp-safe-space);
    }
  }
}
</style>
