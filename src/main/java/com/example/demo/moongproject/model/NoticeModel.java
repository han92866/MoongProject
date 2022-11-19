package com.example.demo.moongproject.model;

import java.util.List;

/**
 * 게시판(공지사항) Model
 */
public class NoticeModel {
  private TbNotice tbNotice;
  private List<TbNotice> tbNoticeList;

  public TbNotice getTbNotice() {
    return this.tbNotice;
  }

  public void setTbNotice(TbNotice tbNotice) {
    this.tbNotice = tbNotice;
  }
  
  public List<TbNotice> getTbNoticeList() {
	return this.tbNoticeList;
  }

  public void setTbNoticeList(List<TbNotice> tbNoticeList) {
	this.tbNoticeList = tbNoticeList;
  }
  
}
