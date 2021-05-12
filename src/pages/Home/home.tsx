import React, { useEffect } from 'react'
import styles from 'pages/Home/home.module.scss';
import { Text } from 'components/text';
import { firebaseAnalytics } from 'firebaseConfig';

const Home = () => {

    useEffect(() => {
        firebaseAnalytics.logEvent('homepage_visited');
    },[])
    return (
        <div className={styles.home}>
            <div className={styles.leftSide}/>
            <div className={styles.rightSide}>
                <Text>Today</Text>
                <Text className={styles.boldText} type="primary">Week</Text>
            </div>
        </div>
    )
}


export default Home
