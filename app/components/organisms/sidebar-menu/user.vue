<template>
  <div class="user">
    <client-only v-if="user">
      <a :href="userPageLink" class="user__inner">
        <img :src="user.thumbnailUrl" :alt="user.nickName" class="user__thumbnail" />
        <p class="user__name">{{ user.nickName }}</p>
      </a>
    </client-only>
    <client-only v-else>
      <div class="user__inner">
        <ul class="user__links">
          <li class="user__link-container">
            <a href="#login" class="user__link" @click.prevent="login">ログイン</a>
          </li>
        </ul>
      </div>
    </client-only>
  </div>
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
    const login = () => ctx.emit('login');
    const userPageLink = `${process.env.NUXT_ICHIKARA_CONNECT_ID_FRONT_SERVER}/user`;
    return {
      login,
      userPageLink,
    };
  },
});
</script>
<style lang="scss" scoped>
.user {
  min-height: 9.2rem;
  &__inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.8rem var(--size-nav-safe-space);
  }
  &__thumbnail {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 2em;
  }
  &__name {
    padding-left: 1.2rem;
    overflow: hidden;
    color: rgba(11, 13, 45, 0.9);
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__links {
    width: 100%;
  }
  &__link-container {
    & + & {
      padding-top: 3.6rem;
    }
  }
  &__link {
    display: block;
    color: var(--color-navy-darkest);
    &:visited {
      color: var(--color-navy-darkest);
    }
  }
}
</style>
