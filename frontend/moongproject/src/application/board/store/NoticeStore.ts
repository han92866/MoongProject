import { action, observable } from "mobx";
import NoticeModel from "../model/NoticeModel";

import NoticeRestRepository from "../repository/NoticeRestRepository";

/**
 * 게시판(공지사항) Store
 */
export default class BbsNoticeStore {
  @observable private _noticeModel: NoticeModel;

  public get noticeModel(): NoticeModel {
    return this._noticeModel;
  }

  @action
  public setNoticeModel(_noticeModel: NoticeModel): void {
    this._noticeModel = _noticeModel;
  }

  /**
   * 목록 조회
   */
  public async readList() {
    const noticeRestRepository = new NoticeRestRepository();

    const result = await Promise.all([noticeRestRepository.getList()]);
      
    if (result != null) {
        this.setNoticeModel(new NoticeModel(result));
    }
  }
}
