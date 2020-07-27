<template>
  <ul class="menu">
    <li class="menu__group">
      <ul class="menu__details">
        <li class="menu__container">
          <nuxt-link v-if="user" class="menu__link" to="/my/fanclubs">
            <span class="menu__text">加入中のファンクラブ</span>
          </nuxt-link>
        </li>
        <li class="menu__container">
          <nuxt-link v-if="user" class="menu__link" to="/payments/history">
            <span class="menu__text">決済履歴</span>
          </nuxt-link>
        </li>
        <li class="menu__container">
          <nuxt-link class="menu__link" to="/announcements">
            <span class="menu__text">お知らせ</span>
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li class="menu__group">
      <ul class="menu__details">
        <li class="menu__container">
          <a
            class="menu__link"
            href="https://www.youtube.com/channel/UCX7YkU9nEeaoZbkVLVajcMg"
            target="_blank"
            rel="noopener"
          >
            <span class="menu__text">YouTube チャンネル</span>
          </a>
        </li>
        <li class="menu__container">
          <a class="menu__link" href="https://nijisanji.booth.pm/" target="_blank" rel="noopener">
            <span class="menu__text">ショップ</span>
          </a>
        </li>
        <li class="menu__container">
          <a class="menu__link" href="https://nijisanji.ichikara.co.jp/" target="_blank" rel="noopener">
            <span class="menu__text">にじさんじ公式</span>
          </a>
        </li>
      </ul>
    </li>
    <li class="menu__group">
      <ul class="menu__details">
        <li class="menu__container">
          <nuxt-link class="menu__link" to="/help">
            <span class="menu__text">ヘルプ</span>
          </nuxt-link>
        </li>
        <li class="menu__container">
          <nuxt-link class="menu__link" to="/terms">
            <span class="menu__text">利用規約</span>
          </nuxt-link>
        </li>
        <li class="menu__container">
          <nuxt-link class="menu__link" to="/legal">
            <span class="menu__text">特定商取引法に基づく表記</span>
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li v-if="user" class="menu__group">
      <ul class="menu__details">
        <li class="menu__container">
          <a class="menu__link" href="#logout" @click.prevent="logout">
            <span class="menu__text">ログアウト</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { User } from '@/types/user';

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User | null>,
    },
  },
  setup(_, ctx) {
    const logout = () => ctx.emit('logout');
    return { logout };
  },
});
</script>
<style lang="scss" scoped>
.menu {
  padding-bottom: 5rem;
  &__group {
    padding-top: 0.8rem;
    &:first-of-type {
      padding-top: 0;
    }
  }
  &__details {
    border-top: 0.2rem solid var(--color-gray);
  }
  &__text {
    @mixin common-font-color {
      color: var(--color-navy-darkest);
    }
    @include common-font-color;
    padding-left: var(--size-nav-safe-space);
    &:visited {
      @include common-font-color;
    }
  }
  &__link {
    @mixin common-link {
      display: block;
      padding: 1.8rem 0;
    }
    @include common-link;
    &.nuxt-link-active {
      background-color: var(--color-white-darker);
    }
  }
}
</style>
