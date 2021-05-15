import React, {
  useEffect,
  useState,
  MouseEvent,
  CSSProperties,
  useRef,
} from "react";
import cn from "classnames";
import styles from "components/tab/tabs.module.scss";
import { getColor } from "utils";

interface ITabsProps {
  className?: string;
  children: React.ReactNode;
  value?: number;
  indicatorColor?: string;
  onChangeItem: (index: number) => void;
}
export const Tabs = ({
  className = "",
  children,
  value = 0,
  indicatorColor = getColor("--color-indicator"),
  onChangeItem,
  ...props
}: ITabsProps) => {
  const [tabs, setTabs] = useState<Array<ITabProps>>([]);
 
  const spanRef = useRef<any>();
  useEffect(() => {


    let data: any = [];
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const { label, children } = child.props;
      data.push({ label, children });
    });
    setTabs(data);
  }, []);

  const onClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    event.preventDefault();
    onChangeItem?.(index);
  };
  
  useEffect(() => {

  },[value])
  
  return (
    <>
      {tabs.map((child: ITabProps, index: any) => {
      
        return (
          <>
            <button
              key={`${child.label}-${index}`}
              style={{ "--color-indicator": indicatorColor } as CSSProperties}
              className={cn(
                styles.tab,
                { [styles.active]: index === value },
                className
              )}
              onClick={(event) => onClick(event, index)}
              {...props}
            >
              <span>{child.label}</span>
            </button>
          </>
        );
      })}
      <div>{tabs[value] && tabs[value].children}</div>
    </>
  );
};

interface ITabProps {
  label?: string;
  children?: React.ReactNode;
}
export const Tab = ({ children, label }: ITabProps) => {
  return <>{children}</>;
};
