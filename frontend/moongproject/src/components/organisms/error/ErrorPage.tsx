import React from "react";

export default ErrorPage;

function ErrorPage() {
  return (
    <div id="wrap">
      <div id="container">
        <div className="page_con">
          <div className="page_con_space">
            <div className="error_area">
              <div className="error_msg">
                <p>페이지를 찾을 수 없습니다.</p>
                불편을 드려서 죄송합니다.
                <br />
                요청하신 서비스가 정상 처리 되지 않았습니다.
                <br />
                보다 정상적인 서비스가 되도록 최선을 다 하겠습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
