<template>
  <nav>
    <NavUser :user="user" @login="login" />
    <NavMenu :user="user" @logout="logout" />
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import NavUser from './user.vue';
import NavMenu from './menu.vue';
import { User } from '@/types/user';

export default defineComponent({
  components: {
    NavUser,
    NavMenu,
  },
  props: {
    user: {
      type: Object as PropType<User | null>,
      default: () => null,
    },
  },
  setup(_, ctx) {
    const login = () => ctx.emit('login');
    const logout = () => ctx.emit('logout');
    return { login, logout };
  },
});
</script>
