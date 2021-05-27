import { useEffect } from "react";
import styles from "pages/Home/home.module.scss";
import { Text } from "components/text";
import { firebaseAnalytics } from "firebaseConfig";
import { Tabs, Tab } from "components/tab/tabs";
import {
  CardText,
} from "components/card";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "store/wheather";
import { IForeCastDayResponse } from "services/wheather";
import { useWeather } from "hooks";
import { RightSide } from "pages/Home/components/sides";
import { WeatherCard, HighlightCard, Chart } from "pages/Home/components";
import { DownArrow, Placeholder, UpArrow } from "components/icons";
import classNames from "classnames";

const tabContent = [
  {
    title: "Today",
  },
  {
    title: "Next 2 Days",
  },
];
const Home = () => {
  const { forecastWeather, currentWeather, renderUsIndexText } = useWeather();
  const dispatch = useDispatch();
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  }, []);

  const onClick = () => {
    dispatch(getCurrentWeather());
  };

  console.log(forecastWeather);
  console.log(currentWeather);

  return (
    <div className={styles.home}>
      <div className={styles.leftSide} />
      <RightSide>
        <div className={styles.tabs}>
          <Tabs onChangeItem={onClick}>
            {tabContent.map((tab, index) => {
              return <Tab key={index} label={tab.title} id={index} />;
            })}
          </Tabs>
        </div>
        <div className={styles.days}>
          {forecastWeather &&
            forecastWeather.forecastday.map((item: IForeCastDayResponse) => {
              return (
                <WeatherCard
                  dateEpoch={item.date_epoch}
                  icon={item.day.condition.icon}
                  maxTemp={item.day.maxtemp_c}
                  minTemp={item.day.mintemp_c}
                />
              );
            })}
        </div>
        <div className={styles.highlights}>
          <Text fontWeight="bold" type="primary">
            Today's Highlights
          </Text>
          <div className={styles.cardArea}>
            <HighlightCard
              title="UV Index"
              body={<Chart value={forecastWeather?.forecastday[0].day.uv} />}
            />
            <HighlightCard
              title="Wind Status"
              body={
                <CardText size="large">
                  {forecastWeather?.forecastday[0].day.maxwind_kph} km/h
                </CardText>
              }
              footer={
                <>
                  <div className={styles.iconContainer}>
                    <Placeholder
                      style={{ fontSize: "2.5rem", transform: "rotate(20deg)" }}
                      fill="#6875DC"
                    />
                  </div>
                  <CardText className={styles.windText} size="medium">
                    WSW
                  </CardText>
                </>
              }
            />
            <HighlightCard
              title="Sunrise & Sunset"
              body={
                <>
                  <div className={styles.sunContainer}>
                    <div className={styles.sun}>
                      <UpArrow />
                    </div>

                    <CardText className={styles.sunText} size="medium">
                      {forecastWeather?.forecastday[0].astro.sunrise}
                    </CardText>
                  </div>
                  <div
                    className={classNames(
                      styles.sunContainer,
                      styles.sunLastText
                    )}
                  >
                    <div className={styles.sun}>
                      <DownArrow />
                    </div>

                    <CardText className={styles.sunText} size="medium">
                      {forecastWeather?.forecastday[0].astro.sunset}
                    </CardText>
                  </div>
                </>
              }
            />
            <HighlightCard
              title="Humudity"
              body={
                <CardText size="large">
                  {forecastWeather?.forecastday[0].day.avghumidity}%
                </CardText>
              }
            />

            <HighlightCard
              title="Visibility"
              body={
                <CardText size="large">
                  {forecastWeather?.forecastday[0].day.avgvis_km}%
                </CardText>
              }
            />
            <HighlightCard
              title="Air Quaility"
              body={
                <CardText size="large">
                  {currentWeather?.air_quality.us_epa_index}
                </CardText>
              }
              footer={<CardText size="medium">{renderUsIndexText()}</CardText>}
            />
          </div>
        </div>
      </RightSide>
    </div>
  );
};

export default Home;

