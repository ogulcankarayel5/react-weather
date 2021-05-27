import { CardSecondaryText, CardText } from "components/card";
import { useEffect, useRef } from "react";
import styles from "pages/Home/components/chart/chart.module.scss";

export const Chart = ({ value }: any) => {
    const chartRef = useRef<any>();
  
    useEffect(() => {
  
      chartRef.current.style.transform = `rotate(${+(45 + value * 10)}deg)`;
      
    }, [value]);
  
    return (
      <div className={styles.chartContainer}>
        <CardSecondaryText>9</CardSecondaryText>
        <div className={styles.chartOverflow}>
          <div ref={chartRef} />
          <CardText className={styles.uvText} size="large">
            {value}
          </CardText>
        </div>
      </div>
    );
  };