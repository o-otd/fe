import AgeFilter from 'components/Common/Filter/AgeFilter';
import ColorFilter from 'components/Common/Filter/ColorFilter';
import GenderFilter from 'components/Common/Filter/GenderFilter';
import RangeFilter from 'components/Common/Filter/RangeFilter';
import StyleFilter from 'components/Common/Filter/StyleFilter';

export const tabItems = [
  { name: '성별', id: 0, content: <GenderFilter filterIndex={0} /> },
  { name: '스타일', id: 1, content: <StyleFilter filterIndex={1} /> },
  { name: '연령대', id: 2, content: <AgeFilter filterIndex={2} /> },
  { name: '컬러', id: 3, content: <ColorFilter filterIndex={3} /> },
  {
    name: '키',
    id: 4,
    content: <RangeFilter filterType="height" filterIndex={4} />,
  },
  {
    name: '몸무게',
    id: 5,
    content: <RangeFilter filterType="weight" filterIndex={5} />,
  },
];
