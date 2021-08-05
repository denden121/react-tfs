import React from 'react';
import {SymbolMoney} from "../../enums";

type MoneyProps = {
    value: number,
    currency: string;
}


export const Money: React.FC<MoneyProps> = ({value, currency}) => {
    const [money, penny] = value.toString().split('.');
    return(
        <span>
            <span>{money}</span>
            {penny && <span>,{penny}</span>}
            {currency && <span>{SymbolMoney[currency]}</span>}
        </span>
    )
};

