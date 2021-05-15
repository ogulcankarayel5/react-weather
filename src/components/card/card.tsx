import React from 'react'
import styles from 'components/card/card.module.scss';
import { Text } from 'components/text';

export const Card = ({children}: any) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export const CardText = ({children}: any) => {
    
    return (
        <Text type="primary" size="small">{children}</Text>
    )
}

export const CardSecondaryText = ({children}: any) => {
    return (
        <Text type="secondary" size="small">{children}</Text>
    )
}
export const CardImage = ({url}: any) => {
    return (
        <img src={url} alt="" />
    )
}

export const CardFooter = ({children}: any) => {
    return (
        <div className={styles.footer}>
            {children}
        </div>
    )
}