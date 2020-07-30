import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
  return (
    <Helmet key={Math.random()}>
      <title>Hacker News</title>
      <meta property="og:title" content="Hacker News" />
      <meta
        name="description"
        content="Hacker News Server side rendering application with React JS"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="#" />
    </Helmet>
  );
};

export default head;
