<template>
  <Badge :is-show-badge="isShowBadge" :label="label">
    <MdiIcon :mdi="mdiBellOutline" :width="26" :height="26" class="icon--bell" />
  </Badge>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { mdiBellOutline } from '@mdi/js';
import Badge from '@/components/atoms/badge/index.vue';
import MdiIcon from '@/components/atoms/mdi-icon/index.vue';

const MAX_UNREAD_COUNT = 99;
const DEFAULT_COUNT = 0;

export default defineComponent({
  components: {
    Badge,
    MdiIcon,
  },
  props: {
    unreadAnnouncementCount: {
      type: Number,
      default: DEFAULT_COUNT,
    },
  },
  setup(props) {
    const label = computed(() =>
      props.unreadAnnouncementCount > MAX_UNREAD_COUNT ? `+${MAX_UNREAD_COUNT}` : String(props.unreadAnnouncementCount),
    );

    const isShowBadge = computed(() => props.unreadAnnouncementCount > DEFAULT_COUNT);
    return { label, isShowBadge, mdiBellOutline };
  },
});
</script>
<style lang="scss" scoped>
.icon--bell {
  fill: var(--color-navy);
}
</style>
