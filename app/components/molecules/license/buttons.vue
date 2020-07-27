<template>
  <div class="license-buttons">
    <LicenseLinkButton
      v-for="license in licenses"
      :key="license.slug"
      :license="license"
      :label="label"
      :prefix="prefix"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api';
import LicenseLinkButton from './link-button.vue';
import { License } from '~/types/api/license';

export default defineComponent({
  components: {
    LicenseLinkButton,
  },
  props: {
    licenses: {
      type: Array as PropType<License[]>,
      default: () => [] as License[],
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
    prefix: {
      type: String,
      default: () => '',
    },
    requestLoginText: {
      type: String,
      default: 'ログインする',
    },
    showLicenseText: {
      type: String,
      default: 'プランを見る',
    },
  },
  setup(props) {
    const label = computed(() => (props.isLogin ? props.showLicenseText : props.requestLoginText));
    return { label };
  },
});
</script>
<style lang="scss" scoped>
.license-buttons {
  padding: var(--size-sp-safe-space) var(--size-fanclub-space) 0;
}
</style>
