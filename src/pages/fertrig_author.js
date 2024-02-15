import React from 'react';
import clsx from 'clsx';

import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';

/// Renders the author markup with fertrig details hard-coded.
/// @GOTCHA: keep author details in sync with authors.yml
function FertrigAuthor() {
  return (
    <div style={{marginBottom: 'var(--ifm-leading)'}}>
      <BlogPostItemHeaderAuthor author={{
        name: 'Fernando Trigoso',
        title: 'Creator of Monarch',
        url: 'https://trigoso.xyz',
        imageURL: 'https://trigoso.xyz/images/fertrig-90.jpg',
        twitter: 'fertrig',
        email: 'fertrig@gmail.com'
      }} />
    </div>
  );
}

export default FertrigAuthor;
