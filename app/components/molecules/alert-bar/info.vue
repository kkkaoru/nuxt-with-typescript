<template>
  <AlertBar>
    <nuxt-link :to="linkTo">
      <div class="info-alert">
        <MdiIcon :mdi="mdiInformationOutline" class="info-alert__icon" />
        <div class="info-alert__message">{{ message }}</div>
        <MdiButton :mdi="mdiClose" class="info-alert__close-button" @click.prevent="close" />
      </div>
    </nuxt-link>
  </AlertBar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiInformationOutline, mdiClose } from '@mdi/js';
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
    return { mdiInformationOutline, mdiClose, close };
  },
});
</script>

<style lang="scss" scoped>
@import './mixins.scss';

.info-alert {
  @include common-alert(var(--color-waiting-payment), #999, var(--color-on-blue));
}
</style>
