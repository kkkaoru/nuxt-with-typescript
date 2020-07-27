<template>
  <ul class="annotations">
    <li class="annotations__container">
      <span class="annotations__text">※コンビニ決済は日本国内のみの対応です</span>
    </li>
    <li class="annotations__container">
      <span class="annotations__text">※利用者様都合による退会では返金いたしかねます</span>
    </li>
    <li class="annotations__container">
      <span class="annotations__text">※決済完了からファンクラブへの加入には時間がかかる場合がございます</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
<style lang="scss" scoped>
@import './mixins.scss';
@include annotations;
</style>
