<template>
  <div class="subscription-help">
    <p class="subscription-help__text">
      選択されたお支払いサイクルで継続的にお支払いが発生します。
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
<style lang="scss" scoped>
@import './mixins.scss';
@include subscription-help;
</style>
