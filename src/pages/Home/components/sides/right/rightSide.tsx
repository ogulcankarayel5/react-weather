import { Card, Tab, Tabs } from "components";
import React, { useState } from "react";
import styles from "pages/Home/components/sides/right/rightSide.module.scss";
import { getColor } from "utils";
import { useWeather } from "hooks";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { Highlihts, WeatherCard } from "pages/Home";
import { IForeCastDayResponse } from "services/wheather";

const tabContent = [
  {
    title: "Today",
  },
  {
    title: "Next 2 Days",
  },
];

const tempatureContent = [
  {
    title: "°C",
  },
  {
    title: "°F",
  },
];

type ITempature = "celsius" | "fahrenheit";
export const RightSide = () => {
  const [isToday, setIsToday] = useState<boolean>(true);
  const [temperature, setTemperature] = useState<ITempature>("celsius");
  const { forecastWeather, todayWeather, loadingWeather } =
    useWeather();

  const onClick = (value: number) => {
    if (value === 0) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }
  };

  const onClickTempature = (value: "°C" | "°F") => {
    if (value === "°C") {
      setTemperature("celsius");
    } else {
      setTemperature("fahrenheit");
    }
  };
  return (
    <>
      <div className={styles.tabs}>
        <Tabs
          indicatorColor={getColor("--color-indicator")}
          onChangeItem={onClick}
        >
          <div style={{ display: "flex" }}>
            {tabContent.map((tab, index) => {
              return <Tab key={index} label={tab.title} id={index} />;
            })}
          </div>
        </Tabs>
        <Tabs onChangeItem={onClickTempature} initialActive="°C">
          <div style={{ display: "flex" }}>
            {tempatureContent.map((tab, index) => {
              return (
                <Tab
                  activeClass={styles.tempatureTab}
                  key={index}
                  label={tab.title}
                  id={tab.title}
                />
              );
            })}
          </div>
        </Tabs>
      </div>
      <div className={styles.days}>
        {loadingWeather ? (
          <Card className={styles.skeleton}>
            <Skeleton width={`100%`} height={10} count={3} />
          </Card>
        ) : isToday ? (
          todayWeather && (
            <WeatherCard
              dateEpoch={todayWeather.date_epoch}
              icon={todayWeather.day.condition.icon}
              maxTemp={
                temperature === "celsius"
                  ? todayWeather.day.maxtemp_c
                  : todayWeather.day.maxtemp_f
              }
              minTemp={
                temperature === "celsius"
                  ? todayWeather.day.mintemp_c
                  : todayWeather.day.mintemp_f
              }
            />
          )
        ) : (
          forecastWeather?.forecastday.map(
            (item: IForeCastDayResponse, index: number) => {
              return (
                <WeatherCard
                  key={`${item.date_epoch}-${index}-forecast`}
                  dateEpoch={item.date_epoch}
                  icon={item.day.condition.icon}
                  maxTemp={
                    temperature === "celsius"
                      ? item.day.maxtemp_c
                      : item.day.maxtemp_f
                  }
                  minTemp={
                    temperature === "celsius"
                      ? item.day.mintemp_c
                      : item.day.mintemp_f
                  }
                />
              );
            }
          )
        )}
      </div>
      <Highlihts />
    </>
  );
};
