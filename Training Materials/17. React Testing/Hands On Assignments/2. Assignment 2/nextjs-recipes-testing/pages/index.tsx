
import React from 'react';
import Head from 'next/head';
import Dashboard from '../src/components/Dashboard';

export default function Home() {
  const DEMO_RECIPES = ['Ramen', 'Paella', 'Biriyani', 'Tacos', 'Pho', 'Pizza'];
  return (
    <>
      <Head>
        <title>Recipe Dashboard</title>
      </Head>
      <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <Dashboard title="Global Recipes" initialItems={DEMO_RECIPES} />
      </div>
    </>
  );
}
