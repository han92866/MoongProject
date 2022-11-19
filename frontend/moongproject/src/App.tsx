import BbsNoticeDetail from 'application/board/pages/BbsNoticeDetail'
import BbsNoticeList from 'application/board/pages/BbsNoticeList'
import NoticeStore from 'application/board/store/NoticeStore'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './application/main/pages/Main'

function App() {
  const [store] = React.useState(new NoticeStore())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board/" element={<BbsNoticeList noticeStore={store} />} />
        <Route
          path="/board/detail/:noticeno?"
          element={<BbsNoticeDetail noticeStore={store} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
