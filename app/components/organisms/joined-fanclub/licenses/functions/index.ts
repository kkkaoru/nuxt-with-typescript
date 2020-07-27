import { JoinedLicense } from '../types';
import { License } from '~/types/api/license';
import { UserLicense } from '~/types/api/user-license';
import { Order } from '~/types/api/order';
import { isSubscriptionOrder } from '~/utils/order';

/** 関連のあるライセンスを一覧化する */
export function pickRelatedLicenses(userLicenses: UserLicense[], incompleteOrders: Order[]): License[] {
  // ユーザーライセンス加入中のライセンス
  const activeLicenses = userLicenses
    .filter((userLicense) => userLicense.status === 'active')
    .map((userLicense) => userLicense.license);
  // 決済未完了のライセンス
  const incompleteLicenses = incompleteOrders.map((order) => order.product);
  // ユーザーに関連するライセンス一覧
  const relatedLicenses = activeLicenses.concat(incompleteLicenses);
  return Array.from(new Set(relatedLicenses));
}

/** 指定されたライセンスに関連するユーザーライセンス情報、オーダー情報を集める */
export function makeJoinedLicense(
  license: License,
  userLicenses: UserLicense[],
  incompleteOrders: Order[],
): JoinedLicense {
  return {
    license,
    userLicenses: userLicenses.filter((userLicense) => userLicense.license.slug === license.slug),
    incompleteOrders: incompleteOrders.filter((order) => order.product.slug === license.slug),
  } as JoinedLicense;
}

/** 加入中ライセンスの表示優先順位を計算する */
export function compareJoinedLicenseSortPriority(a: JoinedLicense, b: JoinedLicense): number {
  const priorityA = calcJoinedLicenseSortPriority(a);
  const priorityB = calcJoinedLicenseSortPriority(b);

  // 優先度を計算し、昇順になるよう結果を返す
  return priorityA - priorityB;
}

/** 投稿の優先順位を示すenum */
enum JoinedLicenseSortPriority {
  subscriptionFailed,
  waitingKonbiniPayment,
  successPayment,
}

/** 加入中ファンクラブのソート優先順位を計算する */
function calcJoinedLicenseSortPriority(joinedFanclub: JoinedLicense): JoinedLicenseSortPriority {
  if (hasFailedSubscription(joinedFanclub)) {
    // 決済失敗中のサブスクリプションが最も高い
    return JoinedLicenseSortPriority.subscriptionFailed;
  }
  if (hasIncompleteKonbiniOrder(joinedFanclub)) {
    // コンビニ決済待ちが2番目に高い
    return JoinedLicenseSortPriority.waitingKonbiniPayment;
  }
  // 決済に成功している場合
  return JoinedLicenseSortPriority.successPayment;
}

/** 未完了のサブスクリプションのオーダーを持っているか */
function hasFailedSubscription(joinedFanclub: JoinedLicense): boolean {
  // 未完了のサブスクリプションが存在する
  return joinedFanclub.incompleteOrders.some((order) => isSubscriptionOrder(order));
}

/** 未完了のサブスクリプションのオーダーを持っているか */
function hasIncompleteKonbiniOrder(joinedFanclub: JoinedLicense): boolean {
  // 未完了のコンビニ決済(非サブスクリプション)が存在する
  return joinedFanclub.incompleteOrders.some((order) => !isSubscriptionOrder(order));
}
