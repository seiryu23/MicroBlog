import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/Layout'
import utilStyle from '../../src/styles/utils.module.css'
import { getPostsData } from '../../lib/post'

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( { allPostsData } ) {
  return (
    <Layout home>
      <Head><title>{siteTitle}</title></Head>
      <section className={utilStyle.headingMd}>
        <p>
          学習用サイト
        </p>
      </section>
      <section>
        <h2>📝ブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} alt=""/>
              </Link>
              <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                {title}
              </Link>
              <br/>
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
