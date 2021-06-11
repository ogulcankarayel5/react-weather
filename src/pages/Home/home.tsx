import { useEffect } from "react";
import styles from "pages/Home/home.module.scss";
import { firebaseAnalytics } from "firebaseConfig";
import { useDispatch } from "react-redux";
import { useGeolocation, useWeather } from "hooks";
import { RightSideContainer } from "pages/Home/components/sides";
import {
  AutoComplete,
  LeftSide,
  LeftSideContainer,
  RightSide,
} from "pages/Home/components";

const Home = () => {
  const { forecastWeather, currentWeather } = useWeather();

  const dispatch = useDispatch();

  useGeolocation();

  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  }, []);

  console.log(forecastWeather);
  useEffect(() => {
    if (currentWeather && forecastWeather?.forecastday) {
      return;
    }
  }, [dispatch, currentWeather, forecastWeather?.forecastday]);

  return (
    <div className={styles.home}>
      <LeftSideContainer>
        <LeftSide />
      </LeftSideContainer>

      <RightSideContainer>
        <RightSide />
      </RightSideContainer>
    </div>
  );
};

export default Home;
