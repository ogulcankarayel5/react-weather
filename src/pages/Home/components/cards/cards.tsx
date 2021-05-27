import {
  Card,
  CardBody,
  CardFooter,
  CardImage,
  CardSecondaryText,
  CardText,
} from "components/card";
import { motion } from "framer-motion";
import { getDayName, getDecimalValue } from "utils";
import styles from "pages/Home/components/cards/cards.module.scss";
import classNames from "classnames";

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
    <motion.div
      transition={{ duration: 0.5 }}
      style={{ y: 0 }}
      animate={{ y: 10 }}
    >
      <Card className={styles.weatherCard}>
        <CardText>{getDayName(dateEpoch)}</CardText>
        <CardImage url={icon} />
        <CardFooter>
          <CardText>{getDecimalValue(maxTemp)}&#176;</CardText>
          <CardSecondaryText>
            {getDecimalValue(minTemp)}&#176;
          </CardSecondaryText>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

interface IHighlightCardProps {
  title: string;
  body: string | React.ReactNode;
  footer?: string | React.ReactNode;
}
export const HighlightCard = ({ title, body, footer }: IHighlightCardProps) => {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      style={{ y: 0 }}
      animate={{ y: 10 }}
    >
      <Card className={styles.highlightCard}>
        <CardSecondaryText size="medium">{title}</CardSecondaryText>
        <CardBody
          className={classNames({
            [styles.withoutFooter]: footer === undefined,
          })}
        >
          {body}
        </CardBody>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </motion.div>
  );
};
