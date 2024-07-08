import { Admin } from '@repo/ui/admin'
import { InputBox } from '@repo/ui/input-box'
import React from 'react'
import styles from '../page.module.css'

export default function () {
  return (
    <div className={styles.page}>
        <Admin name="web" />
        <InputBox/>
    </div>
  )
}

