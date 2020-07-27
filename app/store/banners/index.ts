import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Banner } from '@/types/banner';
import { mockBanners } from '@/mocks/banner';
@Module({ name: 'banners', stateFactory: true, namespaced: true })
export default class BannerStore extends VuexModule {
  /** 件数 */
  totalCount = 0;
  /** バナー一覧 */
  banners: Banner[] = [];

  @Mutation
  setBanners(banners: Banner[]) {
    this.banners = banners;
  }

  /** バナー一覧の取得 */
  @Action({ rawError: true })
  fetchBanners(): void {
    this.setBanners(mockBanners);
  }
}
