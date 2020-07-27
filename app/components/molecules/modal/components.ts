import { SetupContext, PropType, computed, PropOptions } from '@vue/composition-api';
import { ModalStatusType } from '~/types/modal';
import { enabledScroll } from '~/utils/scroll';

export type ModalProps = {
  status: ModalStatusType;
  name: string;
};

/** モーダル共通のPropsを定義する */
export function defineModalProps(defaultModalName: string) {
  return {
    name: {
      type: String,
      default: defaultModalName,
    } as PropOptions<String>,
    status: {
      type: String as PropType<ModalStatusType>,
      required: true,
    } as PropOptions<ModalStatusType>,
  };
}

/** モーダル共通のボタン部品を用意する */
export function useModalComponent(props: ModalProps, ctx: SetupContext) {
  const isProcessing = computed(() => props.status === ModalStatusType.processing);

  const onSubmit = () => {
    if (props.status !== ModalStatusType.none) {
      return;
    }
    ctx.emit('submit');
  };
  const closeModal = () => {
    enabledScroll();
    ctx.root.$modal.hide(props.name);
    ctx.emit('close-modal');
  };
  return { isProcessing, onSubmit, closeModal };
}
