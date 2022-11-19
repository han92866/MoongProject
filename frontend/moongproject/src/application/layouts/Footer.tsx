import { observer } from 'mobx-react'
import styles from './layout.module.css'

export default observer(Footer)

function Footer() {
  return (
    <div className={styles.footer}>
      <div style={{ height: '2px', backgroundColor: 'darkcyan' }}></div>
      <div className={styles.bottom}>
        <div>
          <span className={styles.footerTitle}>
            2022 MoongProject | Moong 🧡 Mong
          </span>
        </div>
      </div>
    </div>
  )
}
