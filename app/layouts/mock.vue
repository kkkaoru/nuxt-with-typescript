<template>
  <DefaultLayout logo-link="/mock" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { isAvailableMockRoute } from '@/utils/redirect';
import DefaultLayout from '@/components/templates/layouts/default/index.vue';

export default defineComponent({
  components: {
    DefaultLayout,
  },
  middleware: isAvailableMockRoute() ? [] : ['block-access'],
});
</script>
