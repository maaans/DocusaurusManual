import React from 'react';
import styles from './styles.module.css'; // Import CSS module
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function Feature({ title, description, imageUrl, link }) {
  return (
    <div className={clsx(styles.featureCard)}>
      <div className="text-center">
        {/* Membungkus title dengan Link */}
        <div className={clsx('text-[#06104b] text-xl font-bold', styles.featureTitle)}>
          <Link to={link} className={clsx('hover:underline')}> {/* Tautkan judul ke link */}
            {title}
          </Link>
        </div>
        <div className={clsx('text-[#667085] text-sm', styles.featureDescription)}>
          {description}
        </div>
        <div className={styles.featureImage}>
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <div className={clsx(styles.featuresWrapper)}>
      <div className={clsx(styles.categoryTitle)}>
        Kategori Dokumentasi
      </div>
      <div className={clsx(styles.featureContainer)}>
        <Feature 
          title="User Guide" 
          description="Testing"
          imageUrl="img/manual.png"
          link="/docs/user-guide/" 
        />
      </div>
    </div>
  );
}

export default HomepageFeatures;
