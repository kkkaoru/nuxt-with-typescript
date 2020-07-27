<template>
  <div class="contact-inputs">
    <ul class="contact-inputs__list">
      <li v-if="!isApp" class="contact-inputs__container">
        <InputTitle title="ご利用環境" />
        <div class="contact-inputs__input-wrap">
          <InputSelector
            :value="viewerEnvironment"
            :items="ViewerEnvironmentOptions"
            :has-error="viewerEnvironmentErrors.length !== 0"
            @input="onInputViwerEnvironment"
          />
        </div>
        <div class="contact-inputs__sub-container">
          <Errors :messages="viewerEnvironmentErrors" />
        </div>
      </li>
      <li class="contact-inputs__container">
        <InputTitle title="件名" />
        <div class="contact-inputs__input-wrap">
          <InputText :value="title" :has-error="titleErrors.length !== 0" @input="onInputTitle" />
        </div>
        <div class="contact-inputs__sub-container">
          <Errors :messages="titleErrors" />
        </div>
      </li>
      <li class="contact-inputs__container">
        <InputTitle title="お問い合わせ内容" />
        <div class="contact-inputs__input-wrap">
          <InputTextArea :value="bodyText" :has-error="bodyTextErrors.length !== 0" @input="onInputBodyText" />
        </div>
        <div class="contact-inputs__sub-container">
          <Errors :messages="bodyTextErrors" />
        </div>
      </li>
      <li class="contact-inputs__container">
        <ContactInfo :mail-from="mailFrom" :user-name="user.nickName" :user-email="user.email" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, PropType, watch } from '@vue/composition-api';
import InputTitle from '@/components/atoms/inputs/title/index.vue';
import InputText from '@/components/atoms/inputs/text/index.vue';
import InputSelector from '@/components/atoms/inputs/selector/index.vue';
import InputTextArea from '@/components/atoms/inputs/text/textarea.vue';
import ContactInfo from '@/components/molecules/contact-info/index.vue';
import Errors from '@/components/atoms/error/list.vue';
import { validateTitle } from '@/utils/validate/contact/title';
import { validateBodyText } from '@/utils/validate/contact/bodyText';
import { validateViwerEnvironment } from '@/utils/validate/contact/viewerEnvironment';
import { User } from '~/types/user';
import { ContactRequestBody, ViewerEnvironment, ViewerEnvironmentOptions } from '~/types/api/contact';
import { ViewerClient } from '~/types/client';

export default defineComponent({
  components: {
    ContactInfo,
    InputTitle,
    InputSelector,
    InputText,
    InputTextArea,
    Errors,
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    mailFrom: {
      type: String,
      default: 'info@ichikara.co.jp',
    },
    viewerClient: {
      type: String as PropType<ViewerClient>,
      default: 'web',
    },
  },
  setup(props, ctx) {
    const title = ref<string>('');
    const titleErrors = computed(() => validateTitle(title.value));
    const onInputTitle = (value: string) => (title.value = value);

    const bodyText = ref<string>('');
    const bodyTextErrors = computed(() => validateBodyText(bodyText.value));
    const onInputBodyText = (value: string) => (bodyText.value = value);

    const viewerEnvironment = ref<ViewerEnvironment>('ios');
    const viewerEnvironmentErrors = computed(() => validateViwerEnvironment(viewerEnvironment.value));
    const onInputViwerEnvironment = (value: ViewerEnvironment) => (viewerEnvironment.value = value);

    const errors = computed(() => [...titleErrors.value, ...bodyTextErrors.value, ...viewerEnvironmentErrors.value]);
    const hasErrors = computed(() => Boolean(errors.value.length));

    const isApp = computed(() => props.viewerClient === 'app');

    const requestBody = computed<ContactRequestBody | null>(() => {
      if (hasErrors.value) {
        return null;
      }
      return {
        title: title.value,
        bodyText: bodyText.value,
        // FIXME: APIの変更により viewer_environment のパラメータが null を許容したら、アプリからのアクセスの場合 null に修正する
        viewerEnvironment: isApp.value ? 'other' : viewerEnvironment.value,
      };
    });

    watch(
      () => requestBody.value,
      () => ctx.emit('input', requestBody.value),
    );

    return {
      ViewerEnvironmentOptions,
      viewerEnvironment,
      viewerEnvironmentErrors,
      onInputViwerEnvironment,
      title,
      titleErrors,
      onInputTitle,
      bodyText,
      bodyTextErrors,
      onInputBodyText,
      isApp,
      requestBody,
    };
  },
});
</script>
<style lang="scss" scoped>
$width-space: 1.6rem;
$nest-space: 3.6rem;

.contact-inputs {
  display: flex;
  justify-content: center;
  padding-top: 1.3rem;
  &__list {
    width: 100%;
    max-width: var(--size-common-max-width);
  }
  &__container {
    padding: 0 $width-space;
    & + & {
      padding-top: 2.4rem;
    }
  }
  &__sub-container {
    padding: 0 $nest-space - $width-space;
  }
  &__input-wrap {
    padding-top: 0.8rem;
  }
  &__button-wrap {
    height: 5.6rem;
  }
  &__annotation-text {
    padding-top: 0.8rem;
    color: rgba(var(--color-black-rgb), 0.48);
    font-size: 1.1rem;
  }
}
</style>
