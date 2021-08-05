import {IAccountOperation} from "../../interfaces/account";
import React from "react";
import {TimelineItem} from "..";

interface TimelineProps {
    items: Array<IAccountOperation>;
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <>
            {items.map( (item) => <TimelineItem key={item.id} {...item}/>)}
        </>
    )
};

