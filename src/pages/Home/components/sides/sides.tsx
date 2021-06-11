import React from "react";
import cn from "classnames";
import styles from "pages/Home/components/sides/sides.module.scss";

interface ISideContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const RightSideContainer = ({
  children,
  className = "",
  ...props
}: ISideContainerProps) => {
  return (
    <div className={cn(styles.rightSide, className)} {...props}>
      {children}
    </div>
  );
};

export const LeftSideContainer = ({
  children,
  className = "",
  ...props
}: ISideContainerProps) => {
  return (
    <div className={cn(styles.leftSide, className)} {...props}>
      {children}
    </div>
  );
};
