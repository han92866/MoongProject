/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from 'application/layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import NoticeStore from '../store/NoticeStore'

export default observer(BbsNoticeDetail)

export interface noticedata {
  noticeno: number
  title: string
  content: string
  writer: string
  writedate: Date
  hit: number
}

/**
 * 게시판(공지사항) 상세화면
 *
 * @param props
 */
function BbsNoticeDetail(props: { noticeStore: NoticeStore }) {
  // const store: NoticeStore = props.noticeStore;
  // @observable private _noticeModel: NoticeModel;

  const [bbsList, setBbsList] = React.useState<noticedata[]>([])

  // const getBbsList = async () => {
  //   await axios
  //     .get('/board/Notice/detail')
  //     .then((resp) => {
  //       console.log('[BbsList.js] useEffect() success :D')
  //       console.log(resp.data)

  //       setBbsList(resp.data)
  //     })
  //     .catch((err) => {
  //       console.log('[BbsList.js] useEffect() error :<')
  //       console.log(err)
  //     })
  // }

  useEffect(() => {
    // getBbsList()
  }, [])

  return (
    <Layout>
      <div style={{ margin: '50px 90px 50px 90px' }}>
        <div className="col-12 mt-5">
          <h3 style={{ fontWeight: 'bold' }}>공지사항</h3>
          <hr style={{ border: 'solid #376092' }} />
        </div>
      </div>
    </Layout>
  )
}
