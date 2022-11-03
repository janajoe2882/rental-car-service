import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaBox(props) {
  const { name, brand, img, amount, carId } = props;
  return (
    <Helmet>
      <title>{name}</title>
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='title'
        content={name}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='og:title'
        content={name}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='og:url'
        content={`https://steady-unicorn-2a5384.netlify.app/${carId}`}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='description'
        content={brand}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='og:description'
        content={brand}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='price'
        content={`${amount}원`}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='og:price'
        content={`${amount}원`}
      />
      <meta
        data-rh='true'
        data-react-helmet='true'
        property='og:image'
        content={img}
      />
    </Helmet>
  );
}
