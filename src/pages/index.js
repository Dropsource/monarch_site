import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import { useThemeConfig } from '@docusaurus/theme-common';
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
  'Button', style: MyStyles.primary);

Widget secondary() => Button(
  'Button', style: MyStyles.secondary);

Widget disabled() => Button(
  'Button', style: MyStyles.disabled);  
  `,
  browse: `
You can see your widgets, via the stories your wrote, using the Monarch desktop 
apps for macOS and Windows. (Linux coming soon).
<br/><br/>
Your widgets render in isolation. No need for a simulator, device or backend.
  `,
  develop: `
Use the Monarch CLI to prepare your stories and launch the desktop app. The CLI 
will also detect changes in your stories or widget files. See your stories 
change automatically as you code.
  `,
  cliLog: `
~/development/my_fancy_app $ monarch run

Starting Monarch

Preparing stories...
Preparing stories completed, took 3.7sec

Launching Monarch app...
Launching Monarch app completed, took 1.4sec

Monarch is ready to use

Setting up stories watch...
2.1sec elapsed, 0/2 tasks completed
Setting up stories watch completed, took 4.1sec

Reloading stories...
Reloading stories completed, took 3.1sec
  `
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
  const { prism } = useThemeConfig();
  prism.defaultLanguage = 'dart';
  return (
    <div className="dartCode">
      <FeatureRowTwoColumns
        columnOne={
          <>
            <h3>Write stories for your widgets</h3>
            <p dangerouslySetInnerHTML={{ __html: textContent.write }} />
          </>
        }
        columnTwo={
          <div style={{ paddingBottom: 40 }}>
            <CodeBlock language="dart">{textContent.storiesCodeExample}</CodeBlock>
          </div>
        } />
    </div>
  );
}

function SeeWidgets() {
  return (
    <div className="seeWidgets">
      <FeatureRowTwoColumns
        columnOne={
          <>
            <h3>See your widgets in isolation</h3>
            <p dangerouslySetInnerHTML={{ __html: textContent.browse }} />
          </>
        }
        columnTwo={
          <div style={{ paddingBottom: 40 }}>
            <img alt="" src={useBaseUrl('img/button_primary.png')} />
            <img alt="" src={useBaseUrl('img/button_secondary.png')} />
            <img alt="" src={useBaseUrl('img/button_disabled.png')} />
          </div>
        } />
    </div>
  );
}

function DevelopWidgets() {
  const { prism } = useThemeConfig();
  prism.defaultLanguage = 'bash';
  return (
    <div className="cliLog">
      <FeatureRowTwoColumns
        columnOne={
          <>
            <h3>Interactively develop widgets</h3>
            <p dangerouslySetInnerHTML={{ __html: textContent.develop }} />
          </>
        }
        columnTwo={
          <div style={{ paddingBottom: 40 }}>
            <CodeBlock language="bash">{textContent.cliLog}</CodeBlock>
          </div>
        } />
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
        <section className={styles.features}>
          <div className="container">
            <WriteStories />
            <SeeWidgets />
            <DevelopWidgets />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
