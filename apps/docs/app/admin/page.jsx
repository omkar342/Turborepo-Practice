import { Admin } from '@repo/ui/admin'
import React from 'react'
import styles from '../page.module.css'
import { InputBox } from '@repo/ui/input-box'

export default function () {
  return (
    <div className={styles.page}>
        <Admin name="docs" />
        <InputBox/>
    </div>
  )
}

