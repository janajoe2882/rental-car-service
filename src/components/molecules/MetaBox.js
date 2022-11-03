import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

export default function MetaBox(props) {
  const location = useLocation();
  const { name, brand, img } = props;
  return (
    <Helmet>
      <title>{name}</title>
      <meta property='title' content={name} />
      <meta property='og:title' content={name} />
      <meta property='description' content={brand} />
      <meta name='description' content={brand} />
      <meta property='og:description' content={brand} />
      <meta property='og:url' content={`${location.pathname}`} />
      <meta property='og:image' content={img} />
    </Helmet>
  );
}
