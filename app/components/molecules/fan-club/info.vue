<template>
  <div class="fan-club">
    <FanclubImages :alt="fanClub.name" :cover-image-url="fanClub.coverImageUrl" :icon-url="fanClub.iconUrl" />
    <div class="fan-club__text-wrap">
      <div class="fan-club__text-inner">
        <InfoTitle :title="fanClub.name" />
        <InfoDescription :description="fanClub.description" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Fanclub } from '@/types/api/fanclub';
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
    fanClub: {
      type: Object as PropType<Fanclub>,
    },
  },
});
</script>
<style lang="scss" scoped>
.fan-club {
  --size-fanclub-space: 2.4rem;
  background-color: var(--color-white);
  &__text-wrap {
    display: flex;
    justify-content: center;
    padding: 0 var(--size-fanclub-space);
  }
  &__text-inner {
    width: 100%;
    max-width: var(--size-fanclub-max-width);
    @include md {
      padding: 0 var(--size-sp-safe-space);
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
