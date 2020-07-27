<template>
  <div class="accept-terms">
    <div class="accept-terms__container">
      <h2 class="accept-terms__title">利用規約</h2>
      <p class="accept-terms__description">
        にじさんじファンクラブをご利用いただくには
        <a class="accept-terms__link" href="/terms" target="_blank" rel="noopener">利用規約</a>
        に同意いただく必要があります。
      </p>
      <ul class="accept-terms__button-list">
        <li class="accept-terms__button-container">
          <AcceptButton text="同意して開始" :loading="isProcessing" @click="onSubmit" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { modalBodyDefaultProps, setupModalBody } from '../body-components';
import AcceptButton from '@/components/atoms/button/buttonTag/blue.vue';

export default defineComponent({
  components: {
    AcceptButton,
  },
  props: modalBodyDefaultProps,
  setup: setupModalBody,
});
</script>
<style lang="scss" scoped>
@import '../mixins.scss';

.accept-terms {
  @include common-modal-body;
  display: flex;
  align-items: center;
  height: 50vh;
  @include md {
    height: auto;
  }
  &__title {
    padding: 1.6rem 0;
    font-size: 2.4rem;
    text-align: center;
  }
  &__description {
    font-size: 1.6rem;
  }
  &__link {
    padding: 0 0.1;
    color: var(--color-blue);
    &:visited {
      color: var(--color-blue);
    }
  }
}
</style>
