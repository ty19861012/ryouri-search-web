import React, {useState, createContext, useContext, useEffect} from 'react';
import RyouriContext from './RyouriContext';
import Ryouri from './Ryouri';

const View = () => {
    const {ryouris} = useContext(RyouriContext);
    return (
        <>
            <h2>献立ビュー</h2>
            <ul className="list-group">
            {ryouris.map((e, i) => {
                return <Ryouri key={i} name={e.name} category={e.category} tags={e.tags}
                    kcal={e.kcal} jikan={e.jikan} zairyou={e.zairyou} tsukurikata={e.tsukurikata}
                    user={e.user.name}
                />
            })}
            </ul>
        </>
    );
};

export default View;