<template>
  <h1 class="title--info">{{ title }}</h1>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.title--info {
  padding-top: 0.4rem;
  color: rgba(var(--color-black-rgb), 0.9);
  font-size: 2.3rem;
  line-height: 1.24;
}
</style>
