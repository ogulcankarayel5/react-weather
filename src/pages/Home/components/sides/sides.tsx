import React from 'react'
import cn from 'classnames';
import styles from 'pages/Home/components/sides/sides.module.scss';

export const RightSide = ({ children, className = "", ...props }: any) => {
    return (
      <div className={cn(styles.rightSide, className)} {...props}>
        {children}
      </div>
    );
  };