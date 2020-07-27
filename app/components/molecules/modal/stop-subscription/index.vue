<template>
  <CommonModalTemplate :name="name" :status="status" :data="bodyData" @submit="onSubmit" @close-modal="closeModal" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { defineModalProps, useModalComponent, ModalProps } from '../components';
import { bodyData } from './body';
import CommonModalTemplate from '@/components/molecules/modal/common-modal-template/index.vue';

export default defineComponent({
  components: {
    CommonModalTemplate,
  },
  props: defineModalProps('stop-subscription'),
  setup(props: ModalProps, ctx) {
    const { onSubmit, closeModal } = useModalComponent(props, ctx);
    return { onSubmit, closeModal, bodyData };
  },
});
</script>
