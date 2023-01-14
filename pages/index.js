import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Mykolas Stramkauskas. I am front end developer.</p>
        <p>I am using this blog site to show my work.</p>
        <p>You can find me on 
          <a href="https://www.linkedin.com/in/mykolas-stramkauskas-625850165/" target="_blank"> Linkedin </a>
            or you can email me on 
          <a href='mailto:msmykolas@gmail.com' target="_blank"> msmykolas@gmail.com</a>
         </p>
        <p>Here is my <a href="https://github.com/myka1" target="_blank">GitHub</a></p>
        <p>You can download my CV here: 
          <a
            href="/files/Mykolas_Stramkauskas.pdf"
            alt="link to cv"
            target="_blank"
            rel="noopener noreferrer"
            > Link
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}