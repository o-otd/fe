import React, { useEffect, useState } from 'react';
import { useApi } from 'hooks/useApi';
import { getConfirms } from 'api/confirm';
import { IGetConfirmsApiDataResponse } from 'types/Home/Confirm';
import ConfirmListItem from 'components/Home/Confirm/ConfirmListItem';
import { LIST_SIZE } from 'constant';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';

function Confirm() {
  const [confirms, setConfirms] = useState<IGetConfirmsApiDataResponse[]>([]);
  const { execute, error } = useApi(getConfirms);

  const [confirmListPage, setConfirmListPage] = useState(0);

  const fetchConfirms = async (page: string, size: string) => {
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
  }, [execute]);

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
