import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
import NewsletterCta from './newsletter_cta';
import ExplainerVideo from './explainer_video';


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

function ValuePropVideoV2({ name, items, mp4VideoUrl, webmVideoUrl }) {
  const resolvedMp4VideoUrl = useBaseUrl(mp4VideoUrl);
  const resolvedWebmVideoUrl = useBaseUrl(webmVideoUrl);
  return (
    <div className={clsx("row", styles.valueProp)}>
      <div className={clsx('col col--5')}>
        <h2>{name}</h2>
        {
          items.map(item => 
            <div key={item.h3}>
              <i class={item.icon} style={{color: item.color}}></i>
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
            </div>)
        }
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
  const monarchPurpose = "Monarch is a tool for building Flutter widgets in isolation. It makes it easy to build, test and debug complex UIs.";

  return (
    <Layout
      title={siteConfig.tagline}
      description={monarchPurpose}>
        
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline}</h1>
          <p className="hero__subtitle">{monarchPurpose}</p>
          <CtaButton text="Get Started" />
          <ExplainerVideo />
        </div>
      </header>
      <main>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropVideoV2
              name="Build widgets faster"
              items={[
                {
                  icon: 'fa-regular fa-keyboard',
                  color: 'var(--mon-orange)',
                  h3: 'Write stories',
                  p: 'Write stories to isolate your widgets. Then preview stories without running your app or backend.'
                },
                {
                  icon: 'fa-solid fa-list',
                  color: 'var(--mon-celeste)',
                  h3: 'Browse your stories',
                  p: 'Monarch lets you verify your UI without an emulator—free up memory and resources.'
                }
              ]}
              mp4VideoUrl="assets/booking-build-hevc.mp4"
              webmVideoUrl="assets/booking-build-vp9.webm" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection)}>
          <div className="container">
            <ValuePropVideoV2
              name="Find and fix bugs with ease"
              items={[
                {
                  icon: 'fa-solid fa-bug',
                  color: 'var(--mon-purple)',
                  h3: 'Find bugs',
                  p: 'Stories render edge cases with little effort. Mock dependencies to render visual states that are hard to reproduce.'
                },
                {
                  icon: 'fa-solid fa-bug-slash',
                  color: 'var(--mon-green)',
                  h3: 'Fix bugs',
                  p: 'From your stories, navigate to your code to fix bugs. Monarch renders your fixes faster than an emulator.'
                },
                {
                  icon: 'fa-solid fa-flask-vial',
                  color: 'var(--mon-celeste)',
                  h3: 'Test your UI',
                  p: 'Reuse your stories from your widget tests.'
                }
              ]}
              mp4VideoUrl="assets/booking-fix-hevc.mp4"
              webmVideoUrl="assets/booking-fix-vp9.webm" />
          </div>
        </section>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropVideoV2
              name="Build responsive UIs easily"
              items={[
                {
                  icon: 'fa-solid fa-laptop-code',
                  color: 'var(--mon-yellow)',
                  h3: 'See your widgets in different modes',
                  p: 'Make sure your UI works across multiple devices, text scales, languages, and themes.'
                },
                {
                  icon: 'fa-solid fa-arrows-rotate',
                  color: 'var(--mon-blue)',
                  h3: 'Hot reload your changes',
                  p: 'Tune your UI easily with hot reload. Monarch automatically reloads your changes.'
                }
              ]}
              mp4VideoUrl="assets/booking-knobs-hevc.mp4"
              webmVideoUrl="assets/booking-knobs-vp9.webm" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection)}>
          <div className="container">
            <ValuePropVideoV2
              name="Debug widgets in isolation"
              items={[
                {
                  icon: 'fa-solid fa-eye',
                  color: 'var(--mon-purple)',
                  h3: 'Visual Debugging',
                  p: 'Fine-tune animations, fix layout issues, align text. Find images using too much memory.'
                },
                {
                  icon: 'fa-solid fa-toolbox',
                  color: 'var(--mon-orange)',
                  h3: 'Debug in isolation',
                  p: 'Debug widgets without running your app or backend. And Use DevTools.'
                }
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
