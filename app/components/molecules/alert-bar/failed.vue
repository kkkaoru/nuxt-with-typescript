<template>
  <AlertBar>
    <nuxt-link :to="linkTo">
      <div class="failed-alert">
        <MdiIcon :mdi="mdiAlertCircle" class="failed-alert__icon" />
        <div class="failed-alert__message">{{ message }}</div>
        <MdiButton :mdi="mdiClose" class="failed-alert__close-button" @click.prevent="close" />
      </div>
    </nuxt-link>
  </AlertBar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiAlertCircle, mdiClose } from '@mdi/js';
import MdiIcon from '@/components/atoms/mdi-icon/index.vue';
import MdiButton from '@/components/atoms/mdi-icon/button.vue';
import AlertBar from '@/components/atoms/alert-bar/index.vue';

export default defineComponent({
  components: {
    MdiIcon,
    MdiButton,
    AlertBar,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
  },
  setup(_, ctx) {
    function close() {
      ctx.emit('close');
    }
    return { mdiAlertCircle, mdiClose, close };
  },
});
</script>

<style lang="scss" scoped>
@import './mixins.scss';
.failed-alert {
  @include common-alert(var(--color-payment-error), #f44336, var(--color-on-red));
}
</style>
