import React from 'react'
import styles from "./style.module.css"

export default function BtnConfirm({ func, ...props }) {
    return (<>
        <div className={styles.line}></div>
        <button className={styles.confirm} onClick={() => func}>
            {/* TODO: func of closing task */}
            <img src="/images/icon-btns/Vector.svg" alt="✔" />
        </button>
    </>
    );
}