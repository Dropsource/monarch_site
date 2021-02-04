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
        <h1>{name}</h1>
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


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Monarch | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/install/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValueProp
              name="Build widgets faster"
              items={[
                'Monarch provides a sandbox to build Flutter widgets in isolation.',
                'Create widgets without worrying about data, screens, emulators, backends or business logic.',
                'Browse stories to verify your UX is right.',
                'Ditch the emulator for common tasks.',
                'Inspired by Storybook JS.'
              ]}
              imageUrl="img/build_widgets_faster_1200.png" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValueProp
              name="Find and fix bugs with ease"
              items={[
                'Render edge cases with ease.',
                'From your stories, navigate to your code to find and fix bugs.',
                'Monarch renders your fixes much faster than an emulator.',
                'Mock dependencies to render visual states that are hard to reproduce.',
                'You can also reuse your stories from your widget tests.'
              ]}
              imageUrl="img/find_fix_bugs_1200.png" />
          </div>
        </section>
        <section className={styles.valuePropSection}>
          <div className="container">
            <ValueProp
              name="Switch themes, locales, device resolutions and text scale"
              items={[
                'See your widgets in different device resolutions.',
                'Switch between dark mode, light mode or your own custom theme.',
                'See how your widgets render under different locales.',
                'Play with the text scale factor to see how your widgets will render to different users.',
              ]}
              imageUrl="gifs/switch_knobs.gif" />
          </div>
        </section>
        <section className={clsx(styles.valuePropSection, styles.valuePropSectionAlt)}>
          <div className="container">
            <ValueProp
              name="Create a component library"
              items={[
                'Create stories that reflect your component library using real code.',
                'Easily find widgets to reuse in other screens.'
              ]}
              imageUrl="img/create_component_library_1200.png" />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
