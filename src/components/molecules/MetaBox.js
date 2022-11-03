import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function MetaBox(props) {
  const location = useLocation();
  const { name, brand, img } = props;
  return (
    <Helmet>
      <title>{name}</title>
      <meta data-rh='true' property='title' content={name} />
      <meta data-rh='true' property='og:title' content={name} />
      <meta data-rh='true' property='description' content={brand} />
      <meta data-rh='true' name='description' content={brand} />
      <meta data-rh='true' property='og:description' content={brand} />
      <meta data-rh='true' property='og:url' content={`${location.pathname}`} />
      <meta data-rh='true' property='og:image' content={img} />
    </Helmet>
  );
}
