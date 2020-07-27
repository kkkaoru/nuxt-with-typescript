<template>
  <ModalDialog :name="name">
    <div>
      <template v-if="status === ModalStatusType.error">
        <!-- エラー時の表示 -->
        <slot name="error" />
      </template>
      <template v-else-if="status === ModalStatusType.success">
        <!-- 成功時の表示 -->
        <slot name="success" />
      </template>
      <template v-else>
        <!-- デフォルト表示 -->
        <slot name="default" />
      </template>
    </div>
  </ModalDialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import ModalDialog from '@/components/atoms/modal-dialog/template.vue';
import { ModalStatusType } from '~/types/modal';

export default defineComponent({
  components: {
    ModalDialog,
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
  },
  setup() {
    return { ModalStatusType };
  },
});
</script>
