import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

function Icon({ icon, color }) {
  return (
    <i class={icon} style={{ color: color, fontSize: 35, marginRight: 20, marginLeft: 20 }}></i>
  );
}

/// Playground to draft the html that we can use for open graph images
export default function Opengraph() {
  return (
    <Layout title="Monarch" description="Monarch">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container" style={{ width: 750 }}>
          <img src="assets/logomark-monarch-white.png" style={{ width: 400, marginTop: 80 }} />
          <p className="hero__subtitle" style={{ marginTop: 40, marginBottom: 80 }}>Isolate your Flutter widgets and use Monarch to build high-quality UIs with ease.</p>
        </div>
      </header>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container" style={{ width: 750 }}>
          <img src="assets/logomark-monarch-white.png" style={{ width: 400, marginTop: 80 }} />
          <p className="hero__subtitle" style={{ marginTop: 40, marginBottom: 80 }}>Isolate your Flutter widgets and use Monarch to build high-quality UIs with ease.</p>
          <Icon icon='fa-regular fa-keyboard' color='var(--mon-orange)' />
          <Icon icon='fa-solid fa-list' color='var(--mon-celeste)' />
          <Icon icon='fa-solid fa-bug' color='var(--mon-purple)' />
          <Icon icon='fa-solid fa-bug-slash' color='var(--mon-green)' />
          <Icon icon='fa-solid fa-flask-vial' color='var(--mon-celeste)' />
          <Icon icon='fa-solid fa-laptop-code' color='var(--mon-yellow)' />
          <Icon icon='fa-solid fa-eye' color='var(--mon-purple)' />
          <Icon icon='fa-solid fa-toolbox' color='var(--mon-orange)' />
        </div>
      </header>
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundColor: 'var(--ifm-color-primary)' }}>
        <div className="container" style={{ width: 750 }}>
          <div><img src="assets/logomark-monarch-allwhite.png" style={{ width: 600, marginBottom: 80, marginTop: 80 }} /></div>
        </div>
      </header>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        
      </header>

      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundColor: 'var(--mon-blue)' }}>
        <div className="container" style={{ width: 750 }}>
          <div><img src="assets/logomark-monarch-allwhite.png" style={{ width: 600, marginBottom: 0, marginTop: 80 }} /></div>
          <p className="hero__subtitle" style={{ marginTop: 0, marginBottom: 80, fontSize: 60 }}>Now fully open source</p>
        </div>
      </header>
    </Layout>
  );
}