<template>
  <DefaultLayout />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DefaultLayout from '@/components/templates/layouts/default/index.vue';

export default defineComponent({
  components: {
    DefaultLayout,
  },
});
</script>
