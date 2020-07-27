<template>
  <FailedAlert :link-to="linkTo" :message="message" @close="onClose" />
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import FailedAlert from '@/components/molecules/alert-bar/failed.vue';

export default defineComponent({
  props: {
    prefix: {
      type: String,
      default: () => '',
    },
    message: {
      type: String,
      default: () => '定期購入が完了していません。お支払い情報を確認してください。',
    },
  },
  components: {
    FailedAlert,
  },
  setup(props, ctx) {
    const linkTo = computed(() => `${props.prefix}/my/fanclubs`);
    function onClose() {
      ctx.emit('close');
    }
    return {
      linkTo,
      onClose,
    };
  },
});
</script>
