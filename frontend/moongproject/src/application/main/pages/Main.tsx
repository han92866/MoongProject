import { observer } from "mobx-react";
import React from "react";
import Layout from "../../layouts/Layout";
import styles from '../../layouts/layout.module.css';

export default observer(Main);

function Main() {

  return (
    <>
      <Layout>
        <div className={styles.main}>
          메인화면이다
        </div>
      </Layout>   
    </>
  );
}
