import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Footer from '../components/Footer/footer'
import styles from './index.module.css';
import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.header)}>
      <div className="container">
        <h1 className={styles.title}>
          {siteConfig.title}
        </h1>
        <p className={styles.desc}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/docs/intro">
            Buka Dokumentasi
          </Link>
        </div>
      </div>
      {/* Menambahkan gambar di sini */}
      <img
        className={styles.banner} // Kelas CSS untuk gambar
        src="img/banner.png" // Path gambar di dalam folder static
        alt="Header Image"
        style={{width: '700px', height: 'auto'}} // Sesuaikan ukuran gambar sesuai kebutuhan
      />
  </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Footer /> {/* Menambahkan Footer Kustom di sini */}
    </Layout>
  );
}
