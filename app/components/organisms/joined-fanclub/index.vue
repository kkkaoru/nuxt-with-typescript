<template>
  <FanclubCard :fanclub="joinedFanclub.fanclub" :link-to="linkTo" :has-border="false" :is-smaller-title="true">
    <JoinedLicenses :joined-fanclub="joinedFanclub" :prefix="prefix" />
  </FanclubCard>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import JoinedLicenses from './licenses/index.vue';
import { JoinedFanclub } from '~/types/joined-fanclub';
import FanclubCard from '@/components/molecules/fan-club/card/default.vue';

export default defineComponent({
  components: {
    FanclubCard,
    JoinedLicenses,
  },
  props: {
    joinedFanclub: {
      type: Object as PropType<JoinedFanclub>,
      required: true,
    },
    prefix: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    const linkTo = computed(() => `${props.prefix}/fanclubs/${props.joinedFanclub.fanclub.slug}`);
    return { linkTo };
  },
});
</script>
