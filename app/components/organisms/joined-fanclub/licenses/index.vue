<template>
  <div class="joined-licenses">
    <h2 class="joined-licenses__title"> 加入中のプラン</h2>
    <ul class="joined-licenses__list">
      <li v-for="joinedLicense in joinedLicenses" :key="joinedLicense.license.slug" class="joined-licenses__item">
        <JoinedLicenseComponent :joined-license="joinedLicense" :prefix="prefix" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { pickRelatedLicenses, makeJoinedLicense } from './functions';
import JoinedLicenseComponent from './item.vue';
import { JoinedFanclub } from '@/types/joined-fanclub';

export default defineComponent({
  components: {
    JoinedLicenseComponent,
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
    // 重複無しのライセンスの一覧を算出する
    const licenses = computed(() =>
      pickRelatedLicenses(props.joinedFanclub.userLicenses, props.joinedFanclub.incompleteOrders),
    );

    const joinedLicenses = computed(() => {
      return licenses.value.map((lisence) =>
        makeJoinedLicense(lisence, props.joinedFanclub.userLicenses, props.joinedFanclub.incompleteOrders),
      );
    });

    return { joinedLicenses };
  },
});
</script>
<style lang="scss" scoped>
.joined-licenses {
  padding: 1.6rem var(--size-fanclub-space) 0;
  background-color: var(--color-white);
  &__title {
    color: rgba(var(--color-black-rgb), 0.9);
    font-size: 1.9rem;
  }
  &__item {
    padding-top: 0.8rem;
  }
}
</style>
