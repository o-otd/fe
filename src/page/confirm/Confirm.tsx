import React, { useEffect } from 'react';
import styled from 'styled-components';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';
import ConfirmContentCard from 'components/Home/Confirm/ConfirmContentCard';
import ConfirmVoteCard from 'components/Home/Confirm/ConfirmVoteCard';
import ConfirmImageSlide from 'components/Home/Confirm/ConfirmImageSlide';
import ConfirmComment from 'components/Home/Confirm/ConfirmComment';
import { useApi } from 'hooks/useApi';
import { getConfirms } from 'api/confirm';

function Confirm() {
  const { execute, error } = useApi(getConfirms);
  useEffect(() => {
    const fetchConfirms = async () => {
      const response = await execute();
      console.log(response);
    };

    fetchConfirms();
  }, [execute]);
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
