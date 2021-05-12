import React from "react";
import cn from "classnames";
import styles from "components/text/text.module.scss";

type TextTypes = "primary" | "secondary";

interface ITextProps {
  children: React.ReactNode;
  type?: TextTypes;
  className?: string;
}

export const Text = ({
  children,
  type = "secondary",
  className = "",
  ...props
}: ITextProps) => {
  const classNames = cn(
    styles.text,
    {
      [styles[`text_${type}`]]: type,
    },
    className
  );

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};
