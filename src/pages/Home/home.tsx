import React, { useEffect, useRef, useState } from "react";
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
          <Tabs >
            {tabContent.map((tab, index) => {
              return <Tab key={index} label={tab.title} id={index}/>;
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
                  <WeatherCard
                    dateEpoch={item.date_epoch}
                    icon={item.day.condition.icon}
                    maxTemp={item.day.maxtemp_c}
                    minTemp={item.day.mintemp_c}
                  />
                </motion.div>
              );
            })}
        </div>
        <div className={styles.highlights}>
          <Text fontWeight="bold" type="primary">
            Today's Highlights
          </Text>
          <div className={styles.cardArea}>
            <Card className={styles.card}>
              <CardSecondaryText className={styles.chartText}>
                UV Index
              </CardSecondaryText>
              <Chart value={9} />
            </Card>
          </div>
        </div>
      </RightSide>
    </div>
  );
};

export default Home;

interface IWeatherCardProps {
  dateEpoch: number;
  icon: string;
  maxTemp: number;
  minTemp: number;
}
export const WeatherCard = ({
  dateEpoch,
  icon,
  maxTemp,
  minTemp,
}: IWeatherCardProps) => {
  return (
    <Card>
      <CardText>{getDayName(dateEpoch)}</CardText>
      <CardImage url={icon} />
      <CardFooter>
        <CardText>{getDecimalValue(maxTemp)}&#176;</CardText>
        <CardSecondaryText>{getDecimalValue(minTemp)}&#176;</CardSecondaryText>
      </CardFooter>
    </Card>
  );
};
export const RightSide = ({ children, className = "", ...props }: any) => {
  return (
    <div className={cn(styles.rightSide, className)} {...props}>
      {children}
    </div>
  );
};

export const Chart = ({ value }: any) => {
  const chartRef = useRef<any>();

  useEffect(() => {
    console.log(`rotate(${+(45 + 4 * 11.25)})deg`);

    chartRef.current.style.transform = `rotate(${+(45 + value * 10)}deg)`;
  }, []);
  return (
    <div className={styles.chartContainer}>
      <CardSecondaryText>9</CardSecondaryText>
      <div className={styles.chartOverflow}>
        <div ref={chartRef} />
      </div>
    </div>
  );
};
