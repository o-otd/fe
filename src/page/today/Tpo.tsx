import { Main } from 'components/Home';
import { TPOCategory } from 'constant/lookTab';
import React from 'react';

function Tpo() {
  return <Main categories={TPOCategory} baseUrl="tpo" />;
}

export default Tpo;
