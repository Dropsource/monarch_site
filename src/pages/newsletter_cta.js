import React from 'react';
import clsx from 'clsx';

function NewsletterCta() {
  return (
    <div>
      <h2>Join our newsletter</h2>
      <p>Sign up to receive low frequency emails on the latest Monarch updates, features and news!</p>
      <div>
        <a
          className={clsx('button button--outline button--primary button--lg')}
          target="_blank"
          href="http://eepurl.com/hJ-S0L">
          Sign Up Now</a>
      </div>
    </div>
  );
}

export default NewsletterCta;
