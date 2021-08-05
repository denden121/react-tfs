import React from "react";
import { Money } from "..";
import styles from './TimelineItem.module.css';
import { formatDate } from "../../helpers/helpers";
import {IAccountOperation} from "../../interfaces/account";

export const TimelineItem: React.FC<IAccountOperation> = ({title, date, amount, currency}) => {
    const dateFormat = new Date(date);
    return (
        <div className={styles.item}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.date}>{formatDate(dateFormat)}</div>
            </div>
            <Money value={amount} currency={currency}/>
        </div>
    )
};

