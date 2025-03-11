import { ChangeEvent, FC } from 'react';

import { SortType } from '@/utils/types';

import '../selectField/style.scss';

interface SelectFieldProps {
  handleSort: (sortType: SortType) => void;
  currentSort: SortType;
}

export const SelectField: FC<SelectFieldProps> = ({
  handleSort,
  currentSort,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleSort(event.target.value as SortType);
  };

  return (
    <div className="container">
      <select
        className="select-field"
        value={currentSort}
        onChange={handleChange}>
        <option value="default">Select sort type</option>
        <option value="asc">Title ascending</option>
        <option value="desc">Title descending</option>
        <option value="oldToNew">Old to new</option>
        <option value="newToOld">New to Old</option>
      </select>
    </div>
  );
};
