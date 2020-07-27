<template>
  <div class="modal-body">
    <h2 class="modal-body__title">{{ title }}</h2>
    <div v-if="isShowDescirption" class="modal-body__description">
      <p v-for="(line, index) in description" :key="index" class="modal-body__description-text">{{ line }}</p>
    </div>
    <ul class="modal-body__button-list">
      <li class="modal-body__button-container">
        <component :is="button" :text="buttonText" :loading="isProcessing" @click="onClick" />
      </li>
      <li v-if="cancelable" class="modal-body__button-container">
        <component :is="cancelButton" v-if="!isProcessing" text="キャンセル" @click="onCancel" />
        <template v-else>
          <div v-if="isShowProcessingText" class="modal-body__status">
            <p v-for="(line, index) in statusText" :key="index" class="modal-body__status-text">{{ line }}</p>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api';
import { setupModalBody } from '../body-components';
import { ModalButtonColor } from './types';
import RedOutlineButton from '@/components/atoms/button/buttonTag/red-outline.vue';
import GreenOutlineButton from '@/components/atoms/button/buttonTag/green-outline.vue';
import BlueOutlineButton from '@/components/atoms/button/buttonTag/blue-outline.vue';
import RedFlatButton from '@/components/atoms/button/buttonTag/red.vue';
import GreenFlatButton from '@/components/atoms/button/buttonTag/green.vue';
import BlueFlatButton from '@/components/atoms/button/buttonTag/blue.vue';

export default defineComponent({
  components: {
    BlueOutlineButton,
    RedOutlineButton,
    GreenOutlineButton,
    RedFlatButton,
    GreenFlatButton,
    BlueFlatButton,
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
    outlined: {
      type: Boolean,
      default: () => true,
    },
    cancelable: {
      type: Boolean,
      default: () => false,
    },
    statusText: {
      type: Array as PropType<Array<String>>,
      default: () => [] as string[],
    },
    isProcessing: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props, ctx) {
    const onClick = () => {
      ctx.emit('click');
    };
    const { onCancel } = setupModalBody(props, ctx);
    // 補足説明の表示
    const isShowDescirption = computed(() => props.description.length > 0);
    // 計算中のテキスト表示
    const isShowProcessingText = computed(() => props.statusText.length > 0);

    // 閉じるボタンの表示に使用するボタン
    const button = computed(() => {
      switch (props.buttonColor) {
        case 'blue':
          return props.outlined ? BlueOutlineButton : BlueFlatButton;
        case 'green':
          return props.outlined ? GreenOutlineButton : GreenFlatButton;
        case 'red':
        default:
          return props.outlined ? RedOutlineButton : RedFlatButton;
      }
    });

    // キャンセルボタンの表示に使用するボタン
    const cancelButton = computed(() => {
      switch (props.buttonColor) {
        case 'blue':
          return BlueOutlineButton;
        case 'green':
          return GreenOutlineButton;
        case 'red':
        default:
          return RedOutlineButton;
      }
    });

    return {
      onClick,
      onCancel,
      isShowDescirption,
      button,
      cancelButton,
      isShowProcessingText,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../mixins.scss';
.modal-body {
  @include common-modal-body;
}
</style>
