import Link from 'next/link';
import React from 'react'
import styles from "../styles/Blog.module.css";


const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

             
          <h2>popular blogs</h2>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn JavaScript in 2022?</h3></Link>
            <p>JavaScript is the language used to design logic for the web.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web.</p>
          </div>
          </main>
    </div>
  )
}

export default Blog