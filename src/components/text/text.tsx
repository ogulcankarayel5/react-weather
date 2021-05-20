import React from "react";
import cn from "classnames";
import styles from "components/text/text.module.scss";

type TextTypes = "primary" | "secondary";
type TextSizes = "small" | "medium" | "large";
type FontTypes = "bold" | "normal";
interface ITextProps {
  children: React.ReactNode;
  type?: TextTypes;
  className?: string;
  size?: TextSizes,
  fontWeight?:FontTypes
}

export const Text = ({
  children,
  type = "secondary",
  fontWeight ='normal',
  className = "",
  size='medium',
  ...props
}: ITextProps) => {
  const classNames = cn(
    styles.text,
    {
      [styles[`text_${type}`]]: type,
      [styles[`text_${size}`]]: size,
      [styles[`text_${fontWeight}`]]: fontWeight
    },
    className
  );

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};
