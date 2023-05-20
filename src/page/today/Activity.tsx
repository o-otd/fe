import React from 'react';
import Main from 'components/Home/Main';
import { activityCategory } from 'constant/lookTab';

function Activity() {
  return (
    <>
      <Main categories={activityCategory} baseUrl="activity" />
    </>
  );
}

export default Activity;
