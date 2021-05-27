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
  setActive: (index: number) => void;
  activeTab: number;
  indicatorColor: string;
}

export const TabsContext =
  React.createContext<ITabsContext | undefined>(undefined);
interface ITabsProps {
  className?: string;
  children: React.ReactNode;
  initialActive?: number;
  indicatorColor?: string;
  onChangeItem?:() => void;
}

export const Tabs = ({
  children,
  initialActive = 0,
  indicatorColor = getColor("--color-indicator"),
  onChangeItem,
}: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(initialActive);

  const setActive = useCallback(
    (value: number) => {
      setActiveTab(value);
      onChangeItem?.()
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
  id: number;
  className?: string;
}
export const Tab = ({ label, id, className, ...props }: ITabProps) => {
  const { activeTab, setActive, indicatorColor } = useTabsContext();
  return (
    <button
      style={{ "--color-indicator": indicatorColor } as CSSProperties}
      className={cn(
        styles.tab,
        { [styles.active]: id === activeTab },
        className
      )}
      onClick={() => setActive(id)}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};
