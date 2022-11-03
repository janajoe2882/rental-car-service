import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaBox(props) {
  const { name, brand, img } = props;
  return (
    <Helmet>
      <title>{name}</title>
      <meta property='og:title' content={name} />
      <meta property='og:description' content={brand} />
      <meta property='description' content={brand} />
      <meta property='og:image' content={img} />
    </Helmet>
  );
}
