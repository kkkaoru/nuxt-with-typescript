<template>
  <InfoAlert :link-to="linkTo" :message="message" @close="onClose" />
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import InfoAlert from '@/components/molecules/alert-bar/info.vue';

export default defineComponent({
  props: {
    prefix: {
      type: String,
      default: () => '',
    },
    message: {
      type: String,
      default: () => '完了していないお支払いがあります。コンビニでのお支払いをお待ちしております。',
    },
  },
  components: {
    InfoAlert,
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
