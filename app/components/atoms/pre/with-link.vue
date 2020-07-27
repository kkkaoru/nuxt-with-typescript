<template>
  <pre class="pre--with-link" v-html="html" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    html: {
      type: String,
    },
  },
});
</script>
<style lang="scss">
// Remove scoped for overwrite a tag style in content
.pre--with-link {
  font-weight: 300;
  white-space: pre-wrap;
  & > a {
    color: var(--color-blue);
  }
}
</style>
