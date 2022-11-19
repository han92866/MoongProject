/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from 'application/layouts/Layout'
import styles from 'application/layouts/layout.module.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { observer } from 'mobx-react'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-js-pagination'
import StringUtil from 'utils/StringUtil'
import NoticeStore from '../store/NoticeStore'

export default observer(BbsNoticeList)

export interface noticedata {
  noticeno: number
  title: string
  content: string
  writer: string
  writedate: Date
  hit: number
}

/**
 * 게시판(공지사항) List
 *
 * @param props
 */
function BbsNoticeList(props: { noticeStore: NoticeStore }) {
  const [bbsList, setBbsList] = React.useState<noticedata[]>([])

  // Paging
  const [page, setPage] = useState(1)
  const [totalCnt, setTotalCnt] = useState(0)

  const getBbsList = async (page) => {
    await axios
      .get('/board/Notice/list', { params: { page: page } })
      .then((resp) => {
        console.log(resp.data)

        setBbsList(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getBbsList(1)
  }, [])

  const changePage = (page) => {
    setPage(page)
    getBbsList(page)
  }

  return (
    <Layout>
      <div style={{ margin: '50px 90px 50px 90px' }}>
        <div className="col-12 mt-5">
          <h3 style={{ fontWeight: 'bold' }}>공지사항</h3>
          <hr style={{ border: 'solid #376092' }} />
        </div>
        <div className="mt-2">
          <table
            className="table"
            style={{ width: '100%', textAlign: 'right' }}
          >
            <tr>
              <td className="text-right">
                <Button
                  variant="primary"
                  style={{
                    background: '#376092',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                  id="btnWrite"
                >
                  공지사항 작성하기
                </Button>
              </td>
            </tr>
          </table>
        </div>
        <table className={styles.page_bbs_list}>
          <colgroup>
            <col width="100" />
            <col />
            <col width="70" />
            <col width="110" />
            <col width="100" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {bbsList?.map((tbNotice) => {
              return (
                <tr key={tbNotice.noticeno}>
                  <td>{tbNotice.noticeno}</td>
                  <td>
                    <span
                      className="list_title"
                      onClick={() => {
                        window.location.replace(
                          `/board/detail/${tbNotice.noticeno}`,
                        )
                      }}
                    >
                      {tbNotice.title}
                    </span>
                  </td>
                  <td>{tbNotice.writer}</td>
                  <td>{moment(tbNotice.writedate).format('YYYY-MM-DD')}</td>
                  <td>{StringUtil.formatNumber(tbNotice.hit)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination"
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={totalCnt}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={changePage}
      />
    </Layout>
  )
}
