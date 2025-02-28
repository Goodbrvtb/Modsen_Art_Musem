import { Dispatch, FC, SetStateAction, useState } from 'react';

import { sortDataByType } from '@utils/sortDataByType';

import { ArtWork, SortType } from '@/utils/types';

import { SelectField } from './SelectField';

interface SortComponentProps {
  data: ArtWork[];
  setData: Dispatch<SetStateAction<ArtWork[]>>;
}

export const SortComponent: FC<SortComponentProps> = ({ data, setData }) => {
  const [sortType, setSortType] = useState<SortType>('default');

  const handleSort = (sortType: SortType) => {
    const sortedData = sortDataByType({ data, type: sortType });
    setData(sortedData);
    setSortType(sortType);
  };
  return (
    <>
      {data.length ? (
        <SelectField
          handleSort={handleSort}
          currentSort={sortType}></SelectField>
      ) : null}
    </>
  );
};
