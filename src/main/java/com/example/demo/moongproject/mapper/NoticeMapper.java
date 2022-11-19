package com.example.demo.moongproject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.moongproject.model.TbNotice;

/**
 * 게시판(공지사항) Mapper
 */
@Mapper
public interface NoticeMapper {

  /**
   *
   * @return
   */
  public List<TbNotice> selectLatelyList();
}
