import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | 민수</title>
      </Head>
      <div className={styles.container}>create-next-app으로 설치하면</div>
    </div>
  );
}
