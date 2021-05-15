import React, { useEffect, useState } from "react";
import styles from "pages/Home/home.module.scss";
import { Text } from "components/text";
import { firebaseAnalytics } from "firebaseConfig";
import cn from "classnames";
import { Tabs, Tab } from "components/tab/tabs";
import {
  Card,
  CardFooter,
  CardImage,
  CardSecondaryText,
  CardText,
} from "components/card";
import { motion } from "framer-motion";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "store/wheather";
import { useTypedSelector } from "store";
import { getDayName, getDecimalValue } from "utils";
import { IForeCastDayResponse } from "services/wheather";
import { useWeather } from "hooks";
const tabContent = [
  {
    title: "Today",
  },
  {
    title: "Next 2 Days",
  },
];
const Home = () => {
  
  const { forecastWeather } = useWeather();
  const [activeTab, setActiveTab] = useState<number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  }, []);

  const onClick = (index: number) => {
    setActiveTab(index);
    dispatch(getCurrentWeather());
  };

  console.log(forecastWeather);

  return (
    <div className={styles.home}>
      <div className={styles.leftSide} />
      <RightSide>
        <div className={styles.tabs}>
          <Tabs onChangeItem={onClick} value={activeTab}>
            {tabContent.map((tab, index) => {
              return <Tab key={index} label={tab.title} />;
            })}
          </Tabs>
        </div>
        <div className={styles.days}>
          {forecastWeather &&
            forecastWeather.forecastday.map((item: IForeCastDayResponse) => {
              return (
                <motion.div
                  transition={{ duration: 0.5 }}
                  style={{ y: 0 }}
                  animate={{ y: 10 }}
                >
                  <Card>
                    <CardText>{getDayName(item.date_epoch)}</CardText>
                    <CardImage url={item.day.condition.icon} />
                    <CardFooter>
                      <CardText>
                        {getDecimalValue(item.day.maxtemp_c)}&#176;
                      </CardText>
                      <CardSecondaryText>
                        {getDecimalValue(item.day.mintemp_c)}&#176;
                      </CardSecondaryText>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
        </div>
      </RightSide>
    </div>
  );
};

export default Home;

export const RightSide = ({ children, className = "", ...props }: any) => {
  return (
    <div className={cn(styles.rightSide, className)} {...props}>
      {children}
    </div>
  );
};
