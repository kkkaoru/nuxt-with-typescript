<template>
  <ModalDialog :name="name">
    <ModalBody :status="status" @submit="onSubmit" />
  </ModalDialog>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { defineModalProps, useModalComponent } from '../components';
import ModalBody from './modal-body.vue';
import ModalDialog from '@/components/atoms/modal-dialog/template.vue';

export default defineComponent({
  components: {
    ModalDialog,
    ModalBody,
  },
  props: defineModalProps('accept-terms'),
  setup: useModalComponent,
});
</script>
