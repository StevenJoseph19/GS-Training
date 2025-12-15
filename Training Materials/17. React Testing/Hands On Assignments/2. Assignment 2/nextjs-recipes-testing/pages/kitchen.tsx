
import React from 'react';
import Head from 'next/head';
import KitchenPage from '../src/pages/KitchenPage';

export default function Kitchen() {
  return (
    <>
      <Head>
        <title>Kitchen Integration</title>
      </Head>
      <KitchenPage />
    </>
  );
}
