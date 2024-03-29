import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';


import styles from './styles.module.css';
import NewsletterCta from './newsletter_cta';
import ExplainerVideo from './explainer_video';


function OnboardingStories() {
  return (
    <div>
      <CodeBlock
        language="dart">
        {`...
Widget onboarding_2_relax() =>
    IntroductionAnimationScreen(initial: 1, target: 2);
...
Widget onboarding_5_welcome() =>
    IntroductionAnimationScreen(initial: 4, target: 5);
  `}
      </CodeBlock>
    </div>
  );
}

function DataSourcesStories() {
  return (
    <div>
      <CodeBlock
        language="dart">
        {`Widget home_loaded() => CourseHomeScreen(appState: mockAppState);

Widget details_active() => CourseDetailsScreen(
      course: Course(
        imagePath: 'assets/design_course/team.png',
        title: 'Flutter Programming',
        lessonCount: 12,
        money: 250,
        rating: 4.8,
        isActive: true,
        categoryType: CategoryType.coding,
      ),
      onBack: (p0) => null,
    );

Widget details_inactive() => CourseDetailsScreen(
      ...
    );
  `}
      </CodeBlock>
    </div>
  );
}


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
              <i className={item.icon} style={{ color: item.color }}></i>
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
    <div className="button__container get-started-button">
      <Link
        className={clsx(
          'button button--outline button--primary button--lg',
        )}
        to={useBaseUrl('docs/install')}>
        {text}
      </Link>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // @GOTCHA: if you change `monarchPurpose` make sure to change it in docusaurus.config.js
  // under themeConfig > metadata > description
  const monarchPurpose = "Monarch is a tool for Flutter developers. It makes building front-ends a pleasant experience.";

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
      <main className="main">
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Hard-to-reach use cases are painful</h2>
                <p>Imagine making changes to the last step of the onboarding flow below.</p>
                <p><img src="assets/hard-to-reach-arrows.png" /></p>
                <p>Every time you make a change you have to navigate through the entire flow. That is so frustrating and tedious.</p>
                <p className="text-pop">What if you didn't have to go through this pain?</p>
                <p>With Monarch you can isolate each piece of the onboarding flow by writing stories:</p>
                <OnboardingStories />
                <p>Monarch will then preview your stories. Now you can jump straight to the last step—or any step you like.</p>
                <p>
                  <video autoPlay={true} muted={true} loop={true} playsInline={true}>
                    <source src="assets/animation-onboarding.mp4" type="video/mp4" />
                    <source src="assets/animation-onboarding.webm" type="video/webm" />
                  </video>
                </p>
                <p className="text-pop">All your screens are just one click away. That's nice.</p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Data sources generate friction</h2>
                <p>Screens depend heavily on data sources which makes your job very difficult.</p>
                <p className="text-pop">What if you didn't have to feel this friction anymore?</p>
                <p>With Monarch you can isolate your screens from data sources. You can write stories that use mocks, stubs, or whatever you like.</p>
                <DataSourcesStories />
                <p>Then use Monarch to preview your changes.</p>
                <p>
                  <video autoPlay={true} muted={true} loop={true} playsInline={true}>
                    <source src="assets/animation-data-sources.mp4" type="video/mp4" />
                    <source src="assets/animation-data-sources.webm" type="video/webm" />
                  </video>
                </p>
                <p className="text-pop">All the friction is gone. That's liberating.</p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Testing edge cases is hard</h2>
                <p>Testing an edge case, like previewing the largest text on the smallest device, will always reveal bugs. However, running those tests is hard.</p>
                <p className="text-pop">What if you could test edge cases easily?</p>
                <p>With Monarch, you can easily test on any device and on any text scale factor. </p>
                <p>
                  <video autoPlay={true} muted={true} loop={true} playsInline={true}>
                    <source src="assets/animation-edges.mp4" type="video/mp4" />
                    <source src="assets/animation-edges.webm" type="video/webm" />
                  </video>
                </p>
                <p className="text-pop">That was easy.</p>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>How to get started</h2>
                <ol>
                  <li>Download Monarch</li>
                  <li>Run: &nbsp;<span className="mono">monarch init</span></li>
                  <li>Run: &nbsp;<span className="mono">monarch run</span> </li>
                  <li>Write your own stories</li>
                  <li>Enjoy!</li>
                </ol>
              </div>
              <div className="col col--3 get-started-center" style={{marginBottom: 20}}>
                <CtaButton text="Get Started" />
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'var(--ifm-color-primary-darker)' }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>We feel your pain</h2>
                <p>You want to write code but front-end development is very difficult, which makes your job frustrating and slow. We know how annoying this is, which is why we built Monarch. With Monarch you will feel less stress, you will work faster, and you can enjoy writing code again.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Learn more links</h2>
            <div className="row underline-links">
              <div className="col col--6">
                <p>From above:</p>
                <ul>
                  <li>Hard-to-reach use cases are <a href="docs/hard-to-reach">painful</a></li>
                  <li>Data sources generate <a href="docs/data-sources-friction">friction</a></li>
                  <li>Testing edge cases is <a href="docs/test-edge-cases">hard</a></li>
                </ul>
              </div>
              <div className="col col--6">
                <p>Even more:</p>
                <ul>
                  <li>Debugging <a href="docs/debugging-sucks">sucks</a></li>
                  <li>Tweaks are <a href="docs/tweaks-are-important">important</a></li>
                  <li>Writing widget tests in the <a href="docs/widget-tests-dark">dark</a></li>
                  <li>Timezones are <a href="docs/other-pains#dates-times-and-timezones">confusing</a></li>
                  <li>Ephemeral states <a href="docs/other-pains#ephemeral-states">disappear</a></li>
                  <li>Building widgets <a href="docs/other-pains#building-reusable-widgets">without context</a></li>
                  <li>Refactoring is <a href="docs/other-pains#refactoring">expensive</a></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* <section>
          <div className="container">
            <h2>Download the Monarch binaries</h2>
            <div className="row os__buttons">
              <div className="col col--4">
                <OsLogo className={styles.apple} />
                <CtaButton text="On macOS" />
              </div>
              <div className="col col--4">
                <OsLogo className={styles.windows} />
                <CtaButton text="On Windows" />
              </div>
              <div className="col col--4">
                <OsLogo className={styles.linux} />
                <CtaButton text="On Linux" />
              </div>
            </div>
          </div>
        </section> */}

        <section style={{ backgroundColor: 'var(--mon-blue-darker)' }}>
          <div className="container">
            <div className="row underline-links">
              <div className="col">
                <h2>The Monarch experience guarantee</h2>
                <ul>
                  <li>Achieve an ideal workflow: write code, get feedback, do it again.</li>
                  <li>Avoid impediments, awkward movements, and stressful situations. </li>
                  <li>A very low learning curve because the Monarch API is super simple.</li>
                  <li>Monarch can work on any Flutter project, look at all these <a href="docs/examples">samples</a></li>
                  <li>The isolation of the Monarch Preview is <a href="docs/monarch-preview">best-in-class</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Testimonials</h2>
            <div className="row underline-links">
              <div className="col col--6">
                <blockquote>
                  <p>
                    I discovered a hidden gem in the Flutter ecosystem this week 💎<br />
                    ...<br />
                    Add your onboarding pages, error messages, modals, and just about any other widget you want to quickly iterate on and Monarch lets you see it immediately.<br />
                    ...<br />
                    🪲 Find bugs fast<br />
                    🍋 Easily test hard to reach UI states (loading screens, one-time welcome messages, edge cases)<br />
                    📈 Boost your widget test coverage (all Monarch stories can be reused in tests)<br />
                    🔥 Iterate with hot reload<br />
                    ...<br />
                    Since I learned about it at the DC Flutter meetup this past Wednesday, I've set it up in 3 apps and found a handful of bugs that would have been tough to find before.</p>
                  <p>—<a target="_blank" href="https://twitter.com/cotr_flutter/status/1702667620720235007">@codtr_flutter</a></p>
                </blockquote>
              </div>
              <div className="col col--6">
                <blockquote>
                  <p>
                    Since the first releases of Monarch, I could improve my team's productivity. We could document and test all UI widgets without any extra effort. We also felt confident that nothing was broken for the wide variety of screen sizes we support.<br />
                    <br />
                    Also, before Monarch, I'd spend many hours creating my own widget catalogs for each design system I worked on. Now, I don't have to do that anymore because Monarch saves me all that time.
                  </p>
                  <p>—<a target="_blank" href="https://twitter.com/kranfix">@kranfix</a></p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'var(--ifm-navbar-background-color)' }}>
          <div className="container">
            <h2>The Monarch team</h2>
            <p>We have been working on developer tools since 2014 and working with Flutter since 2018.</p>
            <div className="row text--center">
              <div className="col col--6 team-pic underline-links">
                <img src="assets/fertrig.png" width="260" height="260" />
                <h3><a href="https://trigoso.xyz/" target="_blank">Fernando Trigoso</a></h3>
                <small>Creator and principal developer of Monarch</small>
              </div>
              <div className="col col--6 team-pic">
                <img src="assets/nate.jpg" width="260" height="260" />
                <h3>Nate Frechette</h3>
                <small>CEO of Dropsource and Monarch power user</small>
              </div>
            </div>
          </div>
        </section>
        <section className="footer--dark newsletter-section" style={{ backgroundColor: 'var(--ifm-footer-background-color)' }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <NewsletterCta />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
