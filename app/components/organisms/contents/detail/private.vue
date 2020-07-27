<template>
  <div class="private">
    <div class="private__inner">
      <img class="private__symbol" :src="require('@/assets/no-index/icons/padlock.svg')" alt="Padlock" />
      <img :src="image" alt="会員限定コンテンツです" class="private__image" />
      <pre class="private__description">{{ description }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

// FIXME: Defining dedicated interface for props
export default defineComponent({
  props: {
    image: {
      type: String,
      default: 'https://placehold.it/512x512',
    },
    description: {
      type: String,
      default: '会員限定コンテンツです。\nプランに加入することで閲覧できるようになります。',
    },
  },
});
</script>
<style lang="scss" scoped>
.private {
  width: 100%;
  max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 0;
  &__inner {
    $shadow-width: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem var(--size-sp-safe-space) 4rem;
    background-color: var(--color-white-darker);
    border-radius: 1.2rem;
    box-shadow: inset $shadow-width $shadow-width $shadow-width 0 rgba(0, 0, 0, 0.2);
  }
  &__symbol {
    width: 2.4rem;
    height: 2.4rem;
    user-select: none;
  }
  &__image {
    width: 25.6rem;
    height: 25.6rem;
    margin-top: var(--size-sp-safe-space);
    border: 0.4rem solid #fff;
    border-radius: 1.6rem;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.5);
  }
  &__title {
    padding-top: 0.8rem;
    color: rgba(11, 13, 45, 0.9);
    font-size: 2.3rem;
  }
  &__description {
    max-width: 20.8rem;
    padding-top: 2.4rem;
    color: rgba(11, 13, 45, 0.48);
  }
  // FIXME: To be DRY
  &__button-join {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5.6rem;
    margin-top: 2.4rem;
    color: var(--color-on-green);
    text-decoration: none;
    background-color: var(--color-green);
    border-radius: 1.2rem;
    &:visited {
      color: var(--color-on-green);
    }
  }
}
</style>
