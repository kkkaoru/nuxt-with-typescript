<template>
  <div class="mock-page">
    <h1 class="mock-page__title">
      <span class="mock-page__title-text">デザインモックページ一覧</span>
    </h1>
    <ul class="mock-page__list">
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">トップページ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design" class="mock-page__link">トップページ</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?one=1" class="mock-page__link">トップページ（カルーセルの画像が一枚）</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?terms=1" class="mock-page__link">利用規約モーダルの表示</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?payment-failed-alert=true" class="mock-page__link">決済失敗アラートの表示</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?konbini-waiting-alert=true" class="mock-page__link"
            >コンビニ決済待ちアラートの表示</nuxt-link
          >
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?unread-announcement-count=0" class="mock-page__link">お知らせ未読件数 0件</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?unread-announcement-count=1" class="mock-page__link">お知らせ未読件数 1件</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?unread-announcement-count=10" class="mock-page__link">お知らせ未読件数 10件</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design?unread-announcement-count=100" class="mock-page__link"
            >お知らせ未読件数 100件</nuxt-link
          >
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">エラーページ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/notexistingpath" class="mock-page__link">共通エラーページ</nuxt-link>
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">コンテンツ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contents/multiple" class="mock-page__link">複数ライセンスの表示</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contents/video" class="mock-page__link">コンテンツ詳細(動画有り)</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contents/image" class="mock-page__link">コンテンツ詳細(画像有り)</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contents/nomedia" class="mock-page__link"
            >コンテンツ詳細(動画無し、画像無し)</nuxt-link
          >
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contents/private" class="mock-page__link">限定コンテンツ非表示</nuxt-link>
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">お知らせ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/announcements" class="mock-page__link">お知らせ一覧</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/announcements/sample" class="mock-page__link">お知らせ詳細</nuxt-link>
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">ライセンス詳細</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/licenses/unsubscribed" class="mock-page__link">未加入</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/licenses/waiting" class="mock-page__link">コンビニエンスストア支払い待ち</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/licenses/convenience" class="mock-page__link"
            >コンビニエンスストア支払い済み</nuxt-link
          >
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/licenses/creditcard" class="mock-page__link">クレジットカード登録済み</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/licenses/3dsecure" class="mock-page__link">本人確認</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/licenses/failure" class="mock-page__link">決済失敗</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/payments/complete" class="mock-page__link">決済完了ページ</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/payments/history" class="mock-page__link">決済履歴ページ</nuxt-link>
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">お問い合わせ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contact" class="mock-page__link">お問い合わせページ</nuxt-link>
        </div>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/contact/complete" class="mock-page__link">お問い合わせ完了</nuxt-link>
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">ファンクラブ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/fanclubs/example" class="mock-page__link">ファンクラブトップページ</nuxt-link>
        </div>
      </li>
      <li class="mock-page__container">
        <h2 class="mock-page__title--sub">加入済みファンクラブ</h2>
        <div class="mock-page__link-wrap">
          <nuxt-link to="/design/my/fanclubs" class="mock-page__link">加入済みファンクラブページ</nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  layout: 'design',
});
</script>
<style lang="scss" scoped>
.mock-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.4rem;
  padding: 2.4rem 0 3.2rem;
  background-color: var(--color-white);
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  &__title {
    width: 100%;
    max-width: var(--size-fanclub-max-width);
    padding: 0 var(--size-sp-safe-space);
    &--sub {
      padding: 0 var(--size-sp-safe-space);
      color: rgba(11, 13, 45, 0.7);
      font-size: 1.9rem;
    }
  }
  &__title-text {
    display: block;
    color: rgba(11, 13, 45, 0.9);
    font-size: 2.3rem;
  }
  &__list {
    width: 100%;
    max-width: var(--size-fanclub-max-width);
    padding-top: var(--size-sp-safe-space);
  }
  &__container {
    & + & {
      padding-top: var(--size-sp-safe-space);
    }
  }
  &__link-wrap {
    padding: 0 2.4rem;
    & + & {
      padding-top: 0.8rem;
    }
  }
  &__link {
    color: var(--color-blue);
    &:visited {
      color: var(--color-blue);
    }
  }
}
</style>
