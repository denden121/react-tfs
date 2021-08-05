import {useEffect} from "react";

export const NotFoundPage: React.FC<any> = () => {
    useEffect(()=>{
        document.title = 'Ничего не найдено';
    },[])
    return (
        <h2>Упс... Похоже вы забрели не туда :)</h2>
    )
};

