import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const textContent = {
  write: `
A story captures the rendered visual state of a Flutter widget. You can write 
multiple stories per widget to exercise and capture the most important states 
a widget can support.
<br/><br/>
In code, a story is a function that returns a widget in a specific visual state.
  `,
  storiesCodeExample: `
import 'package:flutter/material.dart';
import 'package:my_fancy_app/button.dart';

Widget primary() => Button(
  'Button', style: ButtonStyles.primary);

Widget secondary() => Button(
  'Button', style: ButtonStyles.secondary);

Widget disabled() => Button(
  'Button', style: ButtonStyles.disabled);  
  `,
  browse: `
You can render your stories using the Monarch desktop apps for macOS and 
Windows. (Linux coming soon).
  `
}

const features = [
  {
    title: 'Easy to Use Foo!',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function FeatureOg({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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

function FeatureRow({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="row">
      <div className={clsx('col col--6', styles.feature)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={clsx('col col--6', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureRowTwoColumns({ columnOne, columnTwo }) {
  return (
    <div className="row">
      <div className={clsx('col col--6', styles.feature)}>
        {columnOne}
      </div>
      <div className={clsx('col col--6', styles.feature)}>
        {columnTwo}
      </div>
    </div>
  );
}

function WriteStories() {
  return (
    <FeatureRowTwoColumns
      columnOne={
        <>
          <h3>Write stories for your widgets</h3>
          <p dangerouslySetInnerHTML={{ __html: textContent.write }} />
        </>
      }
      columnTwo={
        <CodeBlock language="javascript">{textContent.storiesCodeExample}</CodeBlock>
      } />
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
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
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <WriteStories />
              {features.map((props, idx) => (
                <FeatureRow key={idx} {...props} />
              ))}

            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
