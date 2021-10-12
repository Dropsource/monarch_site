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
          href="https://docs.google.com/forms/d/e/1FAIpQLSfD9L92rymZnf-z18hWj0gyqrnBFNcc7U3YB3QyiI0_3PMxhQ/viewform?usp=sf_link">
          Sign Up Now</a>
      </div>
    </div>
  );
}

export default NewsletterCta;
