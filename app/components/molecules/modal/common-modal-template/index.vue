<template>
  <ModalTemplate :name="name" :status="status">
    <template #default>
      <MainBase
        :is-processing="isProcessing"
        :title="data.main.title"
        :description="data.main.description"
        :status-text="data.main.statusText"
        :button-text="data.main.buttonText"
        :button-color="data.buttonColor"
        @submit="onSubmit"
        @cancel="closeModal"
      />
    </template>
    <template #error>
      <ErrorBase
        :title="data.error.title"
        :description="data.error.description"
        :button-color="data.buttonColor"
        @close="closeModal"
      />
    </template>
    <template #success>
      <SuccessBase
        :title="data.success.title"
        :description="data.success.description"
        :button-color="data.buttonColor"
        @close="closeModal"
      />
    </template>
  </ModalTemplate>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { useModalComponent } from '../components';
import ModalTemplate from '../modal-template.vue';
import { CommonModalTemplateProps } from './types';
import ErrorBase from '@/components/molecules/modal/common-body/error-base.vue';
import MainBase from '@/components/molecules/modal/common-body/main-base.vue';
import SuccessBase from '@/components/molecules/modal/common-body/success-base.vue';
import { ModalStatusType } from '@/types/modal';

export default defineComponent({
  components: {
    ModalTemplate,
    SuccessBase,
    ErrorBase,
    MainBase,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String as PropType<ModalStatusType>,
      required: true,
    },
    data: {
      type: Object as PropType<CommonModalTemplateProps>,
      required: true,
    },
  },
  setup: useModalComponent,
});
</script>
