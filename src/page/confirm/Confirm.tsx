import React, { useEffect, useState } from 'react';
import { useApi } from 'hooks/useApi';
import { getConfirms } from 'api/confirm';
import { IGetConfirmsApiDataResponse } from 'types/Home/Confirm';
import ConfirmListItem from 'components/Home/Confirm/ConfirmListItem';
import { LIST_SIZE } from 'constant';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'redux/store';
import { resetVoteDone } from 'redux/reducer/vote';

function Confirm() {
  const [confirms, setConfirms] = useState<IGetConfirmsApiDataResponse[]>([]);
  const { execute, error } = useApi(getConfirms);
  const { voteDone } = useSelector((state: RootState) => state.vote);
  const dispatch = useAppDispatch();

  const [confirmListPage, setConfirmListPage] = useState(0);

  const fetchConfirms = async (page: string, size: string) => {
    if (voteDone) {
      dispatch(resetVoteDone());
    }

    const response = await execute({
      page: page,
      listSize: size,
    });
    if (response) {
      setConfirms(response.data.datas);
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchConfirms(String(confirmListPage), LIST_SIZE);
  }, [execute, voteDone]);

  return (
    <>
      <main>
        <ConfirmHeader
          onClickFunc={() => fetchConfirms(String(confirmListPage), LIST_SIZE)}
        />

        <section>
          <ul>
            {confirms &&
              confirms.map((confirm) => (
                <ConfirmListItem confirmData={confirm} key={confirm.id} />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Confirm;
