import React, {
  useState,
  CSSProperties,
  useCallback,
  useMemo,
  useContext,
} from "react";
import cn from "classnames";
import styles from "components/tab/tabs.module.scss";
import { getColor } from "utils";

interface ITabsContext {
  setActive: (index: number | string) => void;
  activeTab: number | string;
  indicatorColor: string;
}

export const TabsContext =
  React.createContext<ITabsContext | undefined>(undefined);
interface ITabsProps {
  className?: string;
  children: React.ReactNode;
  initialActive?: any;
  indicatorColor?: string;
  onChangeItem?:(value: any) => void;
}

export const Tabs = ({
  children,
  initialActive = 0,
  indicatorColor = '',
  onChangeItem,
}: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(initialActive);

  const setActive = useCallback(
    (value: any) => {
      setActiveTab(value);
      onChangeItem?.(value)
    },
    [setActiveTab, onChangeItem]
  );

  const value = useMemo(
    () => ({
      setActive,
      activeTab,
      indicatorColor, 
    }),
    [setActive, activeTab, indicatorColor]
  );
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within an Tabs");
  }
  return context;
};

interface ITabProps {
  label: string;
  id: number | string;
  className?: string;
  activeClass?: string;
}
export const Tab = ({ label, id, className='', activeClass='', ...props }: ITabProps) => {
  const { activeTab, setActive, indicatorColor } = useTabsContext();
 
  return (
    <button
      style={ indicatorColor === '' ? {} : { "--color-indicator": indicatorColor ? indicatorColor :  getColor("--color-indicator")} as CSSProperties}
      className={cn(
        styles.tab,
        { [styles.active]: activeClass === '' && id === activeTab},
        className,
       { [activeClass]: activeClass !== '' && id === activeTab}
      )}
      onClick={() => setActive(id)}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};
