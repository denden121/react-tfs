import React from 'react';
import cn from 'classnames';

import styles from './BoardItem.module.css';
import {Money} from "../Money/Money";
import {Product} from "../../interfaces/account";
import {SymbolMoney} from "../../enums";

type BoardItemProps = Omit<Product, 'id'>;

export const BoardItem: React.FC<BoardItemProps> = ({title, customTitle, type, currency, amount}) => {
    return (
        <div className={styles.item}>
            <div className={cn(styles.logo, styles[`logo_${type}`])}>
                {type !== 'saving' && type !== 'loan' && currency && SymbolMoney[currency]}
            </div>
            <div>
                <div className={styles.title}>
                    {customTitle || title}
                </div>
                {type !== 'external' && !!amount && !!currency && <Money value={amount} currency={currency}/>}
            </div>
        </div>
    );
};

