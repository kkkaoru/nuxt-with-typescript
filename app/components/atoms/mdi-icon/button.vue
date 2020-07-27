<template>
  <button class="mdi-buton" @click="onClick">
    <MdiIcon :mdi="mdi" :width="width" :height="height" />
  </button>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import MdiIcon from './index.vue';

export default defineComponent({
  components: {
    MdiIcon,
  },
  props: {
    mdi: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
  setup(_, ctx) {
    function onClick(e: MouseEvent) {
      ctx.emit('click', e);
    }
    return { onClick };
  },
});
</script>
<style scoped>
.mdi-buton {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
