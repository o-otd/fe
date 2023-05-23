import React from 'react';
import styled from 'styled-components';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';
import ConfirmContentCard from 'components/Home/Confirm/ConfirmContentCard';
import ConfirmVoteCard from 'components/Home/Confirm/ConfirmVoteCard';
import ConfirmImageSlide from 'components/Home/Confirm/ConfirmImageSlide';
import ConfirmComment from 'components/Home/Confirm/ConfirmComment';

function Confirm() {
  return (
    <>
      <main>
        <ConfirmHeader />

        <section>
          <ul>
            <ConfirmListItem>
              <ConfirmContentCard />

              <ConfirmVoteCard />

              <ConfirmImageSlide />

              <ConfirmComment />
            </ConfirmListItem>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Confirm;

const ConfirmListItem = styled.li`
  & + & {
    margin-top: 24px;
  }
`;
