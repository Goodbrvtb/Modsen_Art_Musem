import React, { FC, ReactNode } from 'react';

import './style.scss';

interface SectionTitleProps {
  title: string | ReactNode;
  className?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={className ? className : 'body-title'}>
      <p>{title}</p>
    </div>
  );
};
