<template>
  <BodyBase
    :title="title"
    :description="description"
    :button-text="buttonText"
    :button-color="buttonColor"
    :outlined="true"
    @click="onClose"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { setupModalBody } from '../body-components';
import BodyBase from './body-base.vue';
import { ModalButtonColor } from './types';

export default defineComponent({
  components: {
    BodyBase,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Array as PropType<Array<String>>,
      default: () => [] as string[],
    },
    buttonText: {
      type: String,
      default: () => '閉じる',
    },
    buttonColor: {
      type: String as PropType<ModalButtonColor>,
      default: () => 'red',
    },
  },
  setup(props, ctx) {
    const { onClose } = setupModalBody(props, ctx);
    return { onClose };
  },
});
</script>
