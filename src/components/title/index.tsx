import { FC, ReactNode } from 'react';

import './style.scss';

interface HomeTitleProps {
  title: string | ReactNode;
}

export const Title: FC<HomeTitleProps> = ({ title }) => {
  return (
    <div className="home-title">
      <p>{title}</p>
    </div>
  );
};
