import React from "react";
import styles from "pages/Home/components/sides/left/leftSide.module.scss";
import cn from "classnames";
import { AutoComplete } from "pages/Home";
import { CardImage, Text } from "components";
import { useWeather } from "hooks";
import { getDayName, getLastUpdatedTime } from "utils";
import Skeleton from "react-loading-skeleton";

export const LeftSide = () => {
  const { currentWeather, locationWeather } = useWeather();
  return (
    <>
      <AutoComplete />
      <div className={styles.content}>
        {currentWeather ? (
          <>
            <div className={styles.top}>
              <Text type="primary" size="xl">
                {currentWeather?.temp_c} °C
              </Text>
              <div className={styles.time}>
                <Text type="primary">
                  {getDayName(currentWeather.last_updated_epoch, true)},
                </Text>
                <Text>{getLastUpdatedTime(currentWeather.last_updated)}</Text>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.time}>
                <CardImage url={currentWeather.condition.icon} />
                <Text type="primary" size="small">
                  {currentWeather.condition.text}
                </Text>
              </div>
              <div className={styles.city}>
                <CardImage
                  url={
                    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  }
                  height={150}
                />
                <Text>{locationWeather?.name}</Text>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.content}>
            <div className={styles.top}>
              <Skeleton width="75%" height={10} count={1} />
              <Skeleton width="60%" height={10} count={1} />
            </div>
            <div className={styles.bottom}>
              <Skeleton width="75%" height={10} count={1} />
              <Skeleton width="100%" height={150} count={1} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
