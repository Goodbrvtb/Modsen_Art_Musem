import { FC } from 'react';

import './style.scss';

interface CustomSkeletonProps {
  className: string;
}

export const CustomSkeleton: FC<CustomSkeletonProps> = ({ className }) => {
  return <div className={className ? className : 'custom-skeleton'}></div>;
};
