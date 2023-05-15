import { useEffect, useState } from 'react';

export default function useValidErrors(errors: any) {
  const [isError, setIsError] = useState<boolean>(false);
  console.log(errors);
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [Object.keys(errors).length]);

  return isError;
}
