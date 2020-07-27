<template>
  <div class="modal-dialog">
    <client-only>
      <modal
        :name="name"
        :pivot-y="1"
        :click-to-close="false"
        width="100%"
        height="auto"
        classes="modal-dialog__container"
      >
        <div class="modal-dialog__inner">
          <slot />
        </div>
      </modal>
    </client-only>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
});
</script>
<style lang="scss">
.modal-dialog {
  &__container {
    $radius-size: 1.2rem;
    border-radius: $radius-size $radius-size 0 0;
    @include md {
      // Overwrite vue-js-modal style only pc
      top: auto !important;
      max-width: 37.5rem;
      border-radius: $radius-size;
    }
  }
  &__inner {
    width: 100%;
    height: 100%;
    background-color: #fdfdf8;
  }
  & .v--modal-overlay {
    background-color: rgba(0, 0, 0, 0.6);
  }
  & .v--modal-background-click {
    @include md {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
