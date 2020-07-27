<template>
  <span :style="style">{{ dateTimeInMinutesText }}</span>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { generateDateTimeInMinutesText } from '@/utils/date-time';

export default defineComponent({
  props: {
    date: {
      type: String,
    },
    fontSize: {
      type: String,
      default: '1.6rem',
    },
  },
  setup(props) {
    const dateTimeInMinutesText = generateDateTimeInMinutesText(new Date(props.date));
    const style = {
      fontSize: props.fontSize,
    };
    return {
      dateTimeInMinutesText,
      style,
    };
  },
});
</script>
