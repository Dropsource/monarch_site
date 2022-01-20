import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
import NewsletterCta from './newsletter_cta';


function ValueProp({ name, items, imageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("row", styles.valueProp)}>
      <div className={clsx('col col--5')}>
        <h2>{name}</h2>
        <ul>
          {
            items.map(item => <li key={item}>{item}</li>)
          }
        </ul>
      </div>
      <div className={clsx('col col--7')}>
        {imgUrl && (
          <div className="text--center">
            <img src={imgUrl} alt={name} />
          </div>
        )}
      </div>
    </div>
  );
}

function ValuePropVideo({ name, items, mp4VideoUrl, webmVideoUrl }) {
  const resolvedMp4VideoUrl = useBaseUrl(mp4VideoUrl);
  const resolvedWebmVideoUrl = useBaseUrl(webmVideoUrl);
  return (
    <div className={clsx("row", styles.valueProp)}>
      <div className={clsx('col col--5')}>
        <h2>{name}</h2>
        <ul>
          {
            items.map(item => <li key={item}>{item}</li>)
          }
        </ul>
      </div>
      <div className={clsx('col col--7')}>
        <div className="text--center">
          <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src={resolvedWebmVideoUrl} type="video/webm" />
            <source src={resolvedMp4VideoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

function OsLogo({ className }) {
  return (
    <div className={clsx(styles.osLogo, className)}>
    </div>
  )
}

function CtaButton({ text }) {
  return (
    <div className="button__container">
      <Link
        className={clsx(
          'button button--outline button--primary button--lg',
        )}
        to={useBaseUrl('docs/introduction')}>
        {text}
      </Link>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // @GOTCHA: if you change `monarchPurpose` make sure to find-replace-all instances
  // of its string contents in the *.md and *.mdx files. The monarch purpose is
  // set as the `description` field in every markdown file. The `description` field
  // becomes the <meta name="description" content="..."/> and <meta property="og:description" content="..."/> 
  // in <head>, used by search engines. 
  const monarchPurpose = "Monarch is a tool for building Flutter widgets in isolation. It makes building beautiful apps a simpler and faster experience.";

  return (
    <Layout
      title={siteConfig.tagline}
      description={monarchPurpose}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline}</h1>
          <p className="hero__subtitle">{monarchPurpose}</p>
          <CtaButton text="Get Started" />
        </div>
      </header>
      <main>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropVideo
              name="Build widgets faster"
              items={[
                'Build your widgets in isolation.',
                'Isolate your widgets by writing stories.',
                'Render stories without worrying about data, emulators, backends or business logic.',
                'Browse stories to verify your UI is right.',
                'Ditch the emulator for common tasks, free up memory and resources.',
              ]}
              mp4VideoUrl="assets/booking-build-hevc.mp4"
              webmVideoUrl="assets/booking-build-vp9.webm" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValuePropVideo
              name="Find and fix bugs with ease"
              items={[
                'Render edge cases with little effort.',
                'From your stories, navigate to your code to find and fix bugs.',
                'Monarch renders your fixes much faster than an emulator.',
                'Mock dependencies to render visual states that are hard to reproduce.',
                'Reuse your stories from your widget tests.'
              ]}
              mp4VideoUrl="assets/booking-fix-hevc.mp4"
              webmVideoUrl="assets/booking-fix-vp9.webm" />
          </div>
        </section>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropVideo
              name="Build responsive UIs easily"
              items={[
                'See your widgets in different devices and tune them easily with hot reload.',
                'Switch between dark mode, light mode or your own custom theme.',
                'See your UI under the locales your app supports.',
                'Make sure your app remains accessible and usable at large text scale factors.',
              ]}
              mp4VideoUrl="assets/booking-knobs-hevc.mp4"
              webmVideoUrl="assets/booking-knobs-vp9.webm" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValuePropVideo
              name="Debug widgets in isolation"
              items={[
                'Fine-tune animations, fix layout issues, align text.',
                'Find images using too much memory.',
                'Use DevTools.',
                'Debug your widgets without running the full app.'
              ]}
              mp4VideoUrl="assets/booking-debug-hevc.mp4"
              webmVideoUrl="assets/booking-debug-vp9.webm" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.osSection)}>
          <div className="container">
            <div className="row os__buttons">
              <div className="col col--4">
                <OsLogo className={styles.apple} />
                <CtaButton text="Get Started on macOS" />
              </div>
              <div className="col col--4">
                <OsLogo className={styles.windows} />
                <CtaButton text="Get Started on Windows" />
              </div>
              <div className="col col--4">
                <OsLogo className={styles.linux} />
                <div className="button__container">
                  <p className="coming__soon">Coming soon on Linux</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.newsletterSection)}>
          <div className="container">
            <NewsletterCta />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
