import React, {useState, createContext, useContext, useEffect} from 'react';
import RyouriContext from './RyouriContext';

const Ryouri = ({name, category, tags, kcal, jikan, zairyou, tsukurikata, user}) => {
    const {setRyouris} = useContext(RyouriContext);
    const handleCategoryClick = (ev) => {
        ev.preventDefault();
        (async () => {
            const resp = await fetch('/api/ryouricategory?category=' + ev.currentTarget.textContent);
            const json = await resp.json();
            setRyouris(json);
        })();
    };
    const handleTagClick = (ev) => {
        ev.preventDefault();
        (async () => {
            const resp = await fetch('/api/ryouritags?tags=' + ev.currentTarget.textContent);
            const json = await resp.json();
            setRyouris(json);
        })();
    };
    const handleZairyouClick = (ev) => {
        ev.preventDefault();
        (async () => {
            const resp = await fetch('/api/ryourizairyou?zairyou=' + ev.currentTarget.textContent);
            const json = await resp.json();
            setRyouris(json);
        })();
    };
    const handleUsernameClick = (ev) => {
        ev.preventDefault();
        (async () => {
            const resp = await fetch('/api/ryouriusername?username=' + ev.currentTarget.textContent);
            const json = await resp.json();
            setRyouris(json);
        })();
    };
    return (
        <li className="ryouriItem list-group-item">
            <ul className="ryouri list-group list-group-flush">
                <li className="list-group-item">料理名：{name}</li>
                <li className="list-group-item">カテゴリー：<a href="#" onClick={handleCategoryClick}>{category}</a></li>
                <li className="list-group-item">タグ：{tags.split(' ').map((tag, i) => {
                    return (
                        <>
                            <a href="#" onClick={handleTagClick}>{tag}</a>
                            <span> </span>
                        </>
                    );
                })}</li>
                <li className="list-group-item">カロリー：{kcal}</li>
                <li className="list-group-item">調理時間：{jikan}</li>
                <li className="list-group-item">材料：{zairyou.split("\n").map((e) => {
                    return (
                        <>
                            <a href="#" onClick={handleZairyouClick}>{e}</a>
                            <span> </span>
                        </>
                    );
                })}</li>
                <li className="list-group-item">作り方：{tsukurikata.split("\n").map((e) => {
                    return (
                        <>
                            <span>{e}</span>
                            <br/>
                        </>
                    );
                })}</li>
                <li className="list-group-item">
                    ユーザ：<a href="#" onClick={handleUsernameClick}>{user}</a>
                </li>
            </ul>
        </li>
    );
};

export default Ryouri;