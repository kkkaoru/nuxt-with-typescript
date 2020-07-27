<template>
  <div class="fanclub-detail">
    <CoverAndIcon :alt="name" :cover-image-url="coverImageUrl" :icon-url="iconUrl" />
    <SmarllComponent v-if="isSmallerTitle" :title="name" :description="description" />
    <NormalTextsComponent v-else :title="name" :description="description" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CoverAndIcon from '../image/icon-and-cover.vue';
import NormalTextsComponent from '../title-and-description/normal.vue';
import SmarllComponent from '../title-and-description/smaller.vue';

export default defineComponent({
  components: {
    CoverAndIcon,
    NormalTextsComponent,
    SmarllComponent,
  },
  props: {
    coverImageUrl: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isSmallerTitle: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
