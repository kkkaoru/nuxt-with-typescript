<template>
  <BodyBase
    :title="title"
    :description="description"
    :button-text="buttonText"
    :button-color="buttonColor"
    :outlined="false"
    :status-text="statusText"
    :cancelable="cancelable"
    :is-processing="isProcessing"
    @click="onSubmit"
    @cancel="onCancel"
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
      required: true,
    },
    buttonColor: {
      type: String as PropType<ModalButtonColor>,
      default: () => 'red',
    },
    cancelable: {
      type: Boolean,
      default: () => true,
    },
    statusText: {
      type: Array as PropType<Array<String>>,
      default: () => [] as string[],
    },
    isProcessing: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const { onSubmit, onCancel } = setupModalBody(props, ctx);
    return { onSubmit, onCancel };
  },
});
</script>
