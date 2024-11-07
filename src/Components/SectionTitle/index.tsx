import {FC, ReactNode} from 'react';
import './style.scss'; 

interface SectionTitleProps {title:string| ReactNode}

export const SectionTitle: FC<SectionTitleProps> = ({title}) => {
  return (
    <div className="body-title">
     <p>
        {title}
      </p>
</div>
  );
};
