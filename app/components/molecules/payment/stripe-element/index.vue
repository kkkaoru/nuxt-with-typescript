<template>
  <div class="stripe-element">
    <label :for="elementId" class="stripe-element__label">{{ label }}</label>
    <div :class="elementClass">
      <div :id="elementId" />
    </div>
    <p v-if="annotation" class="stripe-element__annotation">
      <span class="stripe-element__annotation-text">{{ annotation }}</span>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed, PropType, reactive, onUnmounted, ref } from '@vue/composition-api';
import { StripeElementInputState } from './types';
import { $elements } from '@/utils/stripe-accessor';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    elementType: {
      type: String as PropType<stripe.elements.elementsType>,
      required: true,
    },
    elementId: {
      type: String,
      required: true,
    },
    annotation: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  setup(props, ctx) {
    // 入力状態
    const state = reactive<StripeElementInputState>({
      error: null,
      complete: false,
    });
    const errorMessage = computed(() => (state.error ? state.error.message : ''));
    const onChange = (res?: stripe.elements.ElementChangeResponse) => {
      if (res) {
        state.error = res.error || null;
        state.complete = res.complete;
      }
      ctx.emit('change', state);
    };

    const hasError = computed(() => state.error !== null);

    const elementClass = computed(() => {
      return {
        'stripe-element__input': !hasError.value,
        'stripe-element__input--error': hasError.value,
      };
    });

    const element = ref<stripe.elements.Element>(null);

    // Stripe Elementsのマウント
    onMounted(() => {
      element.value = $elements.create(props.elementType, {
        style: {
          base: {
            lineHeight: '1.5',
            fontFamily: 'NotoSansJP',
            // px指定じゃないとうまく動かない
            fontSize: '16px',
            fontWeight: '500',
            fontStyle: 'normal',
            '::placeholder': {
              color: 'rgba(11, 13, 45, 0.25)',
            },
          },
          invalid: {
            color: '#db3069',
          },
        },
        placeholder: props.placeholder,
      });
      element.value.on('change', onChange);
      element.value.mount(`#${props.elementId}`);
    });

    // 非表示時に破棄する
    onUnmounted(() => {
      element.value.destroy();
    });

    return {
      state,
      errorMessage,
      hasError,
      elementClass,
    };
  },
});
</script>
<style lang="scss" scoped>
.stripe-element {
  &__label {
    color: rgba(11, 13, 45, 0.7);
    font-size: 1.3rem;
  }
  &__input {
    @mixin common-input {
      height: 5rem;
      margin-top: 0.4rem;
      padding: 1.6rem 1.3rem;
      background-color: var(--color-white-darker);
      border: none;
      &::placeholder {
        color: rgba(11, 13, 45, 0.25);
      }
    }
    @include common-input;
    &--error {
      @include common-input;
      border: 0.2rem solid var(--color-red);
      border-radius: 0.4rem;
    }
  }

  &__annotation {
    padding-top: 0.8rem;
  }
  &__annotation-text {
    display: inline-block;
    margin-left: -0.1rem;
    color: rgba(11, 13, 45, 0.48);
    font-size: 1rem;
    line-height: 1.5;
    transform: scale(0.9);
  }
}
</style>
