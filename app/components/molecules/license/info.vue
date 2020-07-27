<template>
  <div class="license-info">
    <FanclubImages
      :alt="license.fanclub.name"
      :cover-image-url="license.fanclub.coverImageUrl"
      :icon-url="license.fanclub.iconUrl"
    />
    <div class="license-info__text-wrap">
      <div class="license-info__text-inner">
        <InfoTitle :title="license.name" />
        <InfoDescription :description="license.description" :enable-expand="false" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { License } from '~/types/api/license';
import FanclubImages from '@/components/molecules/fan-club/image/with-background.vue';
import InfoTitle from '@/components/atoms/title/info.vue';
import InfoDescription from '@/components/atoms/description/expand.vue';

export default defineComponent({
  components: {
    FanclubImages,
    InfoTitle,
    InfoDescription,
  },
  props: {
    license: {
      type: Object as PropType<License>,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.license-info {
  &__text-wrap {
    display: flex;
    justify-content: center;
    padding: 0 var(--size-fanclub-space);
    background-color: var(--color-white);
  }
  &__text-inner {
    width: 100%;
    max-width: var(--size-fanclub-max-width);
    // FIXME: Adjust this padding based on zeplin
    padding: 0 var(--size-sp-safe-space);
    @include md {
      padding: 0;
    }
    &::after {
      display: block;
      width: 100%;
      padding-top: var(--size-sp-safe-space);
      border-bottom: 0.1rem solid #f7f7f7;
      content: '';
    }
  }
}
</style>
