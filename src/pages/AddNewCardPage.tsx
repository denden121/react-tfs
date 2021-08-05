import React, {useEffect} from "react";
import {NewAccountForm} from "../components";

type AddNewCardPageProps = {
    handleSubmit: (newAccount: {id: string, title:string, type: string}) => void
}

export const AddNewCardPage: React.FC<AddNewCardPageProps> = ({handleSubmit}) => {
    useEffect(()=>{
        document.title = 'Добавить карту';
    },[])
    return (
        <NewAccountForm handleSubmit={handleSubmit} />
        )
};

