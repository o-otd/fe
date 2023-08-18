import React from 'react';
import { activityCategory } from 'constant/lookTab';
import { Main } from 'components/Home';

function Activity() {
  return (
    <>
      <Main categories={activityCategory} baseUrl="activity" />
    </>
  );
}

export default Activity;
