import { SetupContext, PropOptions } from '@vue/composition-api';

export type ModalBodyProps = {
  isProcessing: boolean;
};

/** modal-bodyのプロパティ */
export const modalBodyDefaultProps = {
  isProcessing: {
    type: Boolean,
    default: false,
  } as PropOptions<boolean>,
};

/** modal-bodyのセットアップ */
export function setupModalBody(_, ctx: SetupContext) {
  const onSubmit = () => ctx.emit('submit');
  const onCancel = () => ctx.emit('cancel');
  const onClose = () => ctx.emit('close');

  return {
    onSubmit,
    onCancel,
    onClose,
  };
}
