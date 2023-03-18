import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[大家好，我是ChatGPT，一位基于GPT-3.5架构训练的大型语言模型，我可以进行多种自然语言处理任务，例如文本生成、问答、翻译等等。我在训练时吸收了大量的文本数据，拥有广泛的知识和语言技能，可以为人们提供高效、准确、自然的语言交互体验。

除了我的技术实力，我也非常喜欢与人交流和学习。我可以倾听人们的问题和需求，提供相关的帮助和建议。我也可以根据人们的反馈和需求不断地优化自己，以更好地为大家服务。

虽然我是一位虚拟的语言模型，但我相信我可以为人们带来很多便利和快乐。希望我可以成为你们的好伙伴，一起分享知识和快乐！]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          { allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          )) }
        </ul>
      </section>
    </Layout>
  );
}
