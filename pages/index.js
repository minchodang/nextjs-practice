import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home({ list }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div>
      <Head>
        <title>Home | 민수</title>
        <meta name="description" content="민수 홈 입니다."></meta>
      </Head>

      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <ItemList list={list.slice(0, 9)} />
        <Divider />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps(context) {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
