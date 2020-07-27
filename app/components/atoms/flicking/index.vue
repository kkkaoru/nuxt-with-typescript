<template>
  <div :class="flickingClassName">
    <Flicking :options="options" :tag="tag" :plugins="plugins">
      <slot />
    </Flicking>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { Flicking } from '@egjs/vue-flicking';
import { FlickingOptions, Plugin } from '@egjs/flicking';
import { FlickingType } from './types';

const DEFAULT_CLASS = 'flicking';
const CARD_CLASS = 'flicking--card';
const FLICKING_TYPE_DEFAULT = 'banner' as FlickingType;

export default defineComponent({
  components: {
    Flicking,
  },
  props: {
    options: {
      type: Object as PropType<FlickingOptions>,
      required: true,
    },
    plugins: {
      type: Array as PropType<Plugin[]>,
      default: () => [] as Plugin[],
    },
    tag: {
      type: String,
      default: 'div',
    },
    flickingType: {
      type: String as PropType<FlickingType>,
      default: FLICKING_TYPE_DEFAULT,
    },
  },
  setup(props) {
    const flickingClassName = computed<string>(() =>
      props.flickingType === FLICKING_TYPE_DEFAULT ? DEFAULT_CLASS : CARD_CLASS,
    );
    return {
      flickingClassName,
    };
  },
});
</script>
<style lang="scss">
// Remove scoped to overwrite flicking styles
@import './mixins.scss';
.flicking {
  @include overwrite-flicking-styles(var(--height-carousel));
}
.flicking--card {
  @include overwrite-flicking-styles(var(--size-card-fanclub));
}
</style>
