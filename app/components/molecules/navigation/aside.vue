<template>
  <aside class="nav-aside">
    <a href="javascript:void(0);" class="nav-aside__wrap-hamburger" @click.prevent="toggleActive">
      <Hamburger />
    </a>
    <vs-sidebar ref="sidebar" v-model="active" parent="body" color="">
      <portal-target name="sidebar" />
    </vs-sidebar>
  </aside>
</template>
<script lang="ts">
import Vue from 'vue';
import { defineComponent, ref, watch, watchEffect } from '@vue/composition-api';
import Hamburger from '@/components/atoms/hamburger/index.vue';
import { disabledScroll, enabledScroll } from '@/utils/scroll';

type VsSidevar = Vue & {
  /** サイドバーを閉じるメソッド */
  closeSidebar: () => void;
};

export default defineComponent({
  components: {
    Hamburger,
  },
  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const active = ref<boolean>(false);
    const sidebar = ref<VsSidevar>(null);

    const toggleActive = () => {
      if (!props.enabled) {
        // 無効の場合、開かないようにする
        active.value = false;
        return;
      }

      active.value = !active.value;
    };

    const closeSidebar = () => {
      // vue-saxの外部からサイドバーを閉じる場合、vuesaxが使用しているイベントリスナーを取り除く
      const element = window.document.getElementsByTagName('body')[0] as HTMLBodyElement;
      element.removeEventListener('click', sidebar.value.closeSidebar);
      sidebar.value.$emit('input', false);
    };
    // Control scroll by active value
    watchEffect(() => {
      if (active.value) {
        // 開いている場合
        disabledScroll();
        return;
      }
      // 閉じている場合
      enabledScroll();
    });

    // vue-routerのパスが変わった場合に、サイドバーを閉じる
    watch(
      () => ctx.root.$route.path,
      () => {
        if (active.value && sidebar.value) {
          closeSidebar();
        }
      },
    );

    return {
      active,
      sidebar,
      toggleActive,
    };
  },
});
</script>
<style lang="scss">
// For overwrite
@import './overwrite-vuesax-sidebar.scss';
</style>
<style lang="scss" scoped>
.nav-aside {
  height: 100%;
  &__wrap-hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1.3rem;
  }
}
</style>
