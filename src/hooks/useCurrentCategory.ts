import { useLocation } from 'react-router-dom';
import qs, { ParsedQs } from 'qs';
import { useState } from 'react';

export default function useCurrentCategory(): [
  string | undefined,
  (value: string | undefined) => void,
  string | ParsedQs | string[] | ParsedQs[] | undefined,
] {
  const location = useLocation();
  const { category } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [currentCategory, setCategory] = useState<string | undefined>(
    category as string,
  );

  const setCurrentCategory = (value: string | undefined) => {
    setCategory(value);
  };

  return [currentCategory, setCurrentCategory, category];
}
