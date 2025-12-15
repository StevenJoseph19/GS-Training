
import React from 'react';

type Props = { name: string };

const SiteTitle: React.FC<Props> = ({ name }) => {
  return <h1>{name}</h1>;
};
export default SiteTitle;
