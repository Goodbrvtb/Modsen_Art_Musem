import { ArtWorkFullInfo, SortType } from './types';

interface sortDataByTypeProps {
  data: ArtWorkFullInfo[];
  type: SortType;
}

export const sortDataByType = ({ data, type }: sortDataByTypeProps) => {
  switch (type) {
    case 'asc': {
      const sortedData = [...data].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      return sortedData;
    }

    case 'desc': {
      const sortedData = [...data].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      return sortedData;
    }

    case 'oldToNew': {
      const sortedData = [...data].sort((a, b) => {
        return new Date(a.date_end).getTime() - new Date(b.date_end).getTime();
      });
      return sortedData;
    }
    case 'newToOld': {
      const sortedData = [...data].sort((a, b) => {
        return new Date(b.date_end).getTime() - new Date(a.date_end).getTime();
      });
      return sortedData;
    }

    default: {
      return data;
    }
  }
};
