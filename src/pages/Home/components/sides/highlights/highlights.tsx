import React from "react";
import { useWeather } from "hooks";
import { Chart, HighlightCard } from "pages/Home/components";
import styles from "pages/Home/components/sides/highlights/highlights.module.scss";
import { CardText, Placeholder, Text, UpArrow, DownArrow } from "components";
import classNames from "classnames";

export const Highlihts = React.memo(() => {
  const { todayWeather, currentWeather, renderUsIndexText } = useWeather();
  
  return (
    <div className={styles.highlights}>
      <Text fontWeight="bold" type="primary" className={styles.highlightText}>
        Today's Highlights
      </Text>
      <div className={styles.cardArea}>
        <HighlightCard
          title="UV Index"
          body={<Chart value={todayWeather?.day.uv} />}
        />
        <HighlightCard
          title="Wind Status"
          body={
            <CardText size="large">
              {todayWeather?.day.maxwind_kph} km/h
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
                  {todayWeather?.astro.sunrise}
                </CardText>
              </div>
              <div
                className={classNames(styles.sunContainer, styles.sunLastText)}
              >
                <div className={styles.sun}>
                  <DownArrow />
                </div>

                <CardText className={styles.sunText} size="medium">
                  {todayWeather?.astro.sunset}
                </CardText>
              </div>
            </>
          }
        />
        <HighlightCard
          title="Humudity"
          body={
            <CardText size="large">{todayWeather?.day.avghumidity}%</CardText>
          }
        />

        <HighlightCard
          title="Visibility"
          body={
            <CardText size="large">{todayWeather?.day.avgvis_km} km</CardText>
          }
        />
        <HighlightCard
          title="Air Quaility"
          body={
            <CardText size="large">
              {currentWeather?.air_quality.us_epa_index}
            </CardText>
          }
          footer={<CardText size="medium">{renderUsIndexText}</CardText>}
        />
      </div>
    </div>
  );
});
