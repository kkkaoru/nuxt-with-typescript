import { License } from '~/types/api/license';
import { UserLicense } from '~/types/api/user-license';
import { Order } from '~/types/api/order';

export type JoinedLicense = {
  /** ライセンス */
  license: License;
  /** ライセンスに紐づくユーザーライセンス */
  userLicenses: UserLicense[];
  /** ライセンスに紐づく未完了のオーダー */
  incompleteOrders: Order[];
};
