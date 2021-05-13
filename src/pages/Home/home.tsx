import React, { useEffect, useState } from "react";
import styles from "pages/Home/home.module.scss";
import { Text } from "components/text";
import { firebaseAnalytics } from "firebaseConfig";
import { Tabs, Tab } from "components/tab/tabs";

const tabContent = [
  {
    title: "Today",
  },
  {
    title: "Week",
  },
];
const Home = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  }, []);

  const onClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.home}>
      <div className={styles.leftSide} />
      <div className={styles.rightSide}>
        <div className={styles.tabs}>
          <Tabs onChangeItem={onClick} value={activeTab}>
            {tabContent.map((tab, index) => {
              return <Tab key={index} label={tab.title} />;
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
