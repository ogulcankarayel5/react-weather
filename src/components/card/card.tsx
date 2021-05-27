import React from 'react'
import styles from 'components/card/card.module.scss';
import { Text, TextSizes } from 'components/text';
import classNames from 'classnames';

export const Card = ({children, className}: any) => {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    )
}

interface ICardTextsProps {
    children: React.ReactNode
    size? : TextSizes
    className?: string
}

export const CardText = ({children, size="small", ...props}: ICardTextsProps) => {
    
    return (
        <Text type="primary" size={size} {...props}>{children}</Text>
    )
}

export const CardSecondaryText = ({children,size="small", ...props}: ICardTextsProps) => {
    return (
        <Text type="secondary" size={size} {...props}>{children}</Text>
    )
}

export const CardBody = ({children, className='', ...props}: any) => {
    return (
        <div className={classNames(styles.body, className)} {...props}>{children}</div>
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