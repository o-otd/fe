import React, { useEffect, useState } from 'react';
import ConfirmHeader from 'components/Home/Confirm/ConfirmHeader';
import { useApi } from 'hooks/useApi';
import { getConfirms } from 'api/confirm';
import { IGetConfirmsApiDataResponse } from 'types/Home/Confirm';
import ConfirmListItem from 'components/Home/Confirm/ConfirmListItem';

function Confirm() {
  const [confirms, setConfirms] = useState<IGetConfirmsApiDataResponse[]>([]);
  const { execute, error } = useApi(getConfirms);

  useEffect(() => {
    const fetchConfirms = async () => {
      const response = await execute();
      if (response) {
        setConfirms(response.data.datas);
      } else {
        return null;
      }
    };

    fetchConfirms();
  }, [execute]);

  return (
    <>
      <main>
        <ConfirmHeader />

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
