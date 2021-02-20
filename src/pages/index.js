import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


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
        to={useBaseUrl('docs/install/')}>
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
  const monarchPurpose = "Monarch is a tool for developing Flutter widgets in isolation. It makes it super easy to build widgets for complex UIs.";

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
                'Monarch provides a sandbox to build Flutter widgets in isolation.',
                'Create widgets without worrying about data, screens, emulators, backends or business logic.',
                'Define the relevant states of your widgets, we call these relevant states "stories".',
                'Browse stories to verify your UX is right.',
                'Ditch the emulator for common tasks.'
              ]}
              mp4VideoUrl="assets/build-widgets-faster-hevc.mp4"
              webmVideoUrl="assets/build-widgets-faster-vp9.webm" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValuePropVideo
              name="Find and fix bugs with ease"
              items={[
                'Render edge cases with ease.',
                'From your stories, navigate to your code to find and fix bugs.',
                'Monarch renders your fixes much faster than an emulator.',
                'Mock dependencies to render visual states that are hard to reproduce.',
                'You can also reuse your stories from your widget tests.'
              ]}
              mp4VideoUrl="assets/find-fix-bugs-hevc.mp4"
              webmVideoUrl="assets/find-fix-bugs-vp9.webm" />
          </div>
        </section>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValuePropVideo
              name="Switch themes, locales, device resolutions and text scale"
              items={[
                'See your widgets in different device resolutions.',
                'Switch between dark mode, light mode or your own custom theme.',
                'See how your widgets render under different locales.',
                'Play with the text scale factor to see how your widgets will render to different users.',
              ]}
              mp4VideoUrl="assets/build-widgets-faster-hevc.mp4"
              webmVideoUrl="assets/build-widgets-faster-vp9.webm" />
          </div>
        </section>
        {/* <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValueProp
              name="Create a component library"
              items={[
                'Create stories that reflect your component library using real code.',
                'Easily find widgets to reuse in other screens.'
              ]}
              imageUrl="assets/create_component_library.png" />
          </div>
        </section> */}
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <div className={clsx("row", styles.valueProp)}>
              <div className={clsx('col col--12')}>
                <h2>Why Monarch?</h2>
                <p>Monarch helps you build widgets in isolation. The benefits are clear:</p>
                <ul>
                  <li>Build widgets in isolation to avoid the pain and frustration of developing widgets in the context of an entire app.</li>
                  <li>Stories help you pinpoint bugs quickly. It’s more efficient than debugging using entire screens.</li>
                  <li>A story is like a visual test. The more stories you have, the more confidence your components work in all possible scenarios.</li>
                  <li>Parallelize development: widget isolation enables multiple team members to work on multiple widgets at the same time.</li>
                </ul>
              </div>
            </div>
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
      </main>
    </Layout>
  );
}

export default Home;
