package com.example.demo.moongproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.moongproject.mapper.NoticeMapper;
import com.example.demo.moongproject.model.TbNotice;

/**
 * 게시판(공지사항) Service
 */
@Service
public class NoticeServiceImpl {
  private @Autowired NoticeMapper noticeMapper;
  
  /**
   * 목록 조회
   *
   * @return
   */
  public List<TbNotice> readLatelyList() {
    return noticeMapper.selectLatelyList();
  }

}
