<template>
  <div class="show-card">
    <ul class="show-card__list">
      <li v-for="(card, index) in cards" :key="index" class="show-card__container">
        <input
          :id="`show-card_${index}`"
          type="radio"
          class="show-card__radio"
          :value="index"
          :name="name"
          :checked="equalCreditCards(card, active)"
          @change="onChangeActiveCard(index)"
        />
        <label :for="`show-card_${index}`" class="show-card__label">
          <div class="show-card__label-inner">
            <p class="show-card__label-text">クレジットカード</p>
            <div class="show-card__card-wrap">
              <img :src="require('@/assets/no-index/icons/visa.svg')" />
              <p class="show-card__number-wrap">
                <span class="show-card__number-prefix">末尾</span>
                <span class="show-card__number">{{ card.suffixNumber }}</span>
              </p>
            </div>
          </div>
          <CheckIcon />
        </label>
      </li>
      <li class="show-card__container">
        <input
          id="change-card"
          type="radio"
          class="show-card__radio"
          :value="CHANGE_CARD_INDEX"
          :name="name"
          :checked="active === null"
          @change="onChangeActiveCard(CHANGE_CARD_INDEX)"
        />
        <label for="change-card" class="show-card__label">
          <span class="show-card__label-text">別のクレジットカードに変更</span>
          <span class="show-card__check-icon"></span>
        </label>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext } from '@vue/composition-api';
import { DisplayCreditCardInformation } from '@/types/payment';
import { equalCreditCards } from '@/utils/payment';
import CheckIcon from '@/components/atoms/check-icon/green.vue';

const CHANGE_CARD_INDEX = -1;

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    cards: {
      type: Array as PropType<DisplayCreditCardInformation[]>,
    },
    active: {
      type: Object as PropType<DisplayCreditCardInformation>,
    },
    name: {
      type: String,
      default: 'show-card',
    },
  },
  setup(props, ctx: SetupContext) {
    const onChangeActiveCard = (index: number) => {
      const activeCard = index === CHANGE_CARD_INDEX ? null : props.cards[index];
      ctx.emit('change-active-card', activeCard);
    };
    return {
      CHANGE_CARD_INDEX,
      onChangeActiveCard,
      equalCreditCards,
    };
  },
});
</script>
<style lang="scss" scoped>
.show-card {
  padding-top: var(--size-sp-safe-space);
  &__radio {
    display: none;
  }
  &__container {
    padding: 0 2.4rem;
    & + & {
      padding-top: 0.8rem;
    }
  }
  @mixin common-label {
    display: flex;
    align-items: center;
    height: 9rem;
    padding: 0 2.4rem;
    color: rgba(11, 13, 45, 0.9);
    font-size: 1.9rem;
    background-color: var(--color-white-darker);
    border: 0.2rem solid transparent;
    border-radius: 1.2rem;
    input[type='radio']:checked + & {
      border: 0.2rem solid var(--color-green);
    }
  }
  &__label {
    @include common-label;
    transition: all var(--time-checked) var(--type-checked);
  }
  &__label-text {
    font-size: 1.6rem;
  }
  &__number-wrap {
    margin-top: -0.4rem;
    padding-left: 0.8rem;
  }
  &__number-prefix {
    font-size: 1.9rem;
  }
  &__number {
    font-size: 1.9rem;
  }
  &__card-wrap {
    display: flex;
    align-items: center;
    padding-top: 0.8rem;
  }
}
</style>
