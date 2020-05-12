import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';

const features = [
  {
    title: <>High performance</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Overlord is a Byzantine fault tolerance (BFT) consensus algorithm 
        aiming to support thousands of transactions per second under hundreds of consensus nodes, 
        with transaction delays of no more than a few seconds
      </>
    ),
  },
  {
    title: <>Highly Customizable </>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Developers can customize PoA, PoS or DPoS chains or develop application-specific based on Muta, 
        and use different economic models and governance models to implement a specific business logic
      </>
    ),
  },
  {
    title: <>Interoperability</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The interoperability with CKB and other Muta chains is a built-in feature, 
        allowing every Muta powered chain to interact with each other while utilizing the high security and finality of the PoW CKB base layer
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt="Docusaurus with Keytar"
                className={styles.heroLogo}
                src={useBaseUrl('img/muta-logo.png')}
                width={260}
                height={260}
              />
              A{' '}
              <span className={styles.heroProjectKeywords}>highly customizable </span>{' '}
              and{' '}
              <span className={styles.heroProjectKeywords}>high performance</span> blockchain framework.
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/intro')}>
                Get Started
              </Link>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=nervosnetwork&amp;repo=muta&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                />
              </span>
            </div>
          </div>
        </div>
        <div
          className={classnames(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
              Why Muta？
          </div>
        </div>

        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
