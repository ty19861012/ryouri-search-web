import React, {useState, createContext, useContext, useEffect} from 'react';
import RyouriContext from './RyouriContext';

const Yomigana = () => {
    const ls = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 
    'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 
    'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 
    'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 
    'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];
    const {setRyouris} = useContext(RyouriContext);
    const handleYomiClick = (ev) => {
        ev.preventDefault();
        const word = ev.currentTarget.textContent;
        console.log(word);
        (async () => {
            const resp = await fetch('/api/ryoriyomigana?yomigana=' + word);
            const json = await resp.json();
            setRyouris(json);
        })();
    };  
    return (
        <>
            <h2>献立索引フォーム</h2>
            <ul className="yomi">
                {ls.map((e, i) => {
                    return (
                        <li key={i}>
                            <span>[</span>
                            <a href="#" onClick={handleYomiClick}>{e}</a>
                            <span>] </span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Yomigana;