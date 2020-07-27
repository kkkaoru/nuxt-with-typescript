<template>
  <ShareButton :share-info="shareInfo" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ShareButton from '@/components/atoms/sns/share-button.vue';
import { ShareInfo } from '@/components/atoms/sns';

export default defineComponent({
  components: {
    ShareButton,
  },
  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  setup(props) {
    const shareInfo: ShareInfo = {
      link: props.link,
      text: props.text,
      name: 'Twitter',
      image: require('@/assets/no-index/sns/twitter.png'),
      backgroundColor: '#1da1f2',
      fontColor: '#fff',
    };
    return {
      shareInfo,
    };
  },
});
</script>
