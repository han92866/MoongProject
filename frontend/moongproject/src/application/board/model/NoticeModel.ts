import TbNotice from "domain/notice/TbNotice";
import { action, observable } from "mobx";

/**
 * 게시판(공지사항) Model
 */
export default class NoticeModel  {
  @observable private tbNotice: TbNotice;
  @observable private tbNoticeList: TbNotice[];

  public constructor(data?) {

    this.tbNotice = new TbNotice(data?.tbNotice || {});
  }

  public getTbNotice(): TbNotice {
    return this.tbNotice;
  }

  @action
  public setTbNotice(tbNotice: TbNotice): void {
    this.tbNotice = tbNotice;
  }

  public getTbNoticeList(): TbNotice[] {
    return this.tbNoticeList;
  }

  @action
  public setTbNoticeList(tbNoticeList: TbNotice[]): void {
    this.tbNoticeList = tbNoticeList;
  }
}
