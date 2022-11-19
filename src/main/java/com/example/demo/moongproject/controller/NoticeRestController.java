package com.example.demo.moongproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.moongproject.model.TbNotice;
import com.example.demo.moongproject.service.NoticeServiceImpl;

/**
 * 게시판(공지사항) RestController
 */
@RestController
public class NoticeRestController {
  private @Autowired NoticeServiceImpl noticeService;


  /**
   * 목록 조회
   *
   * @return
   */
  @GetMapping("/board/Notice/list")
  public List<TbNotice> getList() {
    return noticeService.readLatelyList();
  }

  @GetMapping("/home")
  public String getHome(){
      return "Hello World!";
  }
}
