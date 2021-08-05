import React from 'react';
import styles from './Board.module.css';
import {Product} from "../../interfaces/account";
import {customSort} from "../../helpers/helpers";
import { NavLink } from "react-router-dom";
import {BoardItem} from "..";



type BoardProps = {
    accounts: Product[];
}

export const Board: React.FC<BoardProps> = ({accounts} ) =>{
    const result = accounts ? [...accounts].sort(customSort) : [];

    return(
        <div className={styles.board}>
            {result.map((ac, key) =>
                <NavLink key={ac.id} activeClassName={styles.activeItem} className={styles.link} to={`/account/${ac.id}`}>
                    <BoardItem
                        type={ac?.type}
                        key={ac.id} title={ac.title}
                        amount={ac?.amount}
                        customTitle={ac?.customTitle}
                        currency={ac?.currency}
                    />
                </NavLink>
            )}
            <NavLink
                to="/actions/add_card"
                className={styles.link}
                activeClassName={styles.activeItem}
            >
                <div className={styles.actionItem}>Привязать карту</div>
            </NavLink>

        </div>
    )
}

