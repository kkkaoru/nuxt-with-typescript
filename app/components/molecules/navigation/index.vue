<template>
  <Aside :enabled="enabled" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Aside from './aside.vue';

export default defineComponent({
  components: {
    Aside,
  },
  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
