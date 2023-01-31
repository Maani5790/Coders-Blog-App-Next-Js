import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'



const slug = () => {
    const router = useRouter()
    const {slug} = router.query

  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <h1>Title of page {slug}</h1>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod blanditiis ut rerum iusto culpa veniam excepturi maiores ducimus corrupti.

      </div>
      </main>
    </div>
  )
}

export default slug