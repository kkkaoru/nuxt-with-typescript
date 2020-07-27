<template>
  <div class="contact-info">
    <div class="contact-info__annotation">
      <!-- TODO コンポーネント化する -->
      <span class="contact-info__annotation--text"
        >以下のいちからIDに登録されたメールアドレスに回答をお送りします。</span
      >
      <span class="contact-info__annotation--email">{{ mailFrom }}</span>
      <span class="contact-info__annotation--text">からのメールを受信できるように事前に設定をご確認ください。</span>
    </div>
    <div class="contact-info__user">
      <UserInfo :user-name="userName" :user-email="userEmail" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import UserInfo from './user.vue';

export default defineComponent({
  components: {
    UserInfo,
  },
  props: {
    mailFrom: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.contact-info {
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-top: 0.8rem;
  padding-bottom: 3.2rem;
  &__annotation {
    width: 100%;
    font-size: 1.6rem;
    $text-color: rgba(var(--color-black-rgb), 0.7);
    &--email {
      padding: 1rem 0;
      color: $text-color;
    }
    &--text {
      color: $text-color;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.6rem;
  }
}
</style>
