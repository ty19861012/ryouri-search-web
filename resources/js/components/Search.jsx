import React, {useState, createContext, useContext, useEffect} from 'react';
import RyouriContext from './RyouriContext';

const Search = () => {
    const {setRyouris} = useContext(RyouriContext);
    const [word, setWord] = useState('');
    const [option, setOption] = useState(0);
    const handleAll = (ev) => {
        ev.preventDefault();
        (async () => {
            const resp = await fetch('/api/ryouris');
            const json = await resp.json();
            setRyouris(json);
        })();
    };
    const handleSearch = (ev) => {
        ev.preventDefault();
        if (word.length === 0) {
            (async () => {
                const resp = await fetch('/api/ryouris');
                const json = await resp.json();
                setRyouris(json);
            })();
        } else {
            (async () => {
                let resp = null;
                switch (option) {
                    case 0:
                        resp = await fetch('/api/ryourimei?name=' + word);
                        break;
                    case 1:
                        resp = await fetch('/api/ryouricategory?category=' + word);
                        break;
                    case 2:
                        resp = await fetch('/api/ryouritags?tags=' + word);
                        break;
                    case 3:
                        resp = await fetch('/api/ryourikcal?kcal=' + word);
                        break;
                    case 4:
                        resp = await fetch('/api/ryourijikan?jikan=' + word);
                        break;
                    case 5:
                        resp = await fetch('/api/ryourizairyou?zairyou=' + word);
                        break;
                    case 6:
                        resp = await fetch('/api/ryouritsukurikata?tsukurikata=' + word);
                        break;
                    case 7:
                        resp = await fetch('/api/ryouriusername?username=' + word);
                        break;
                    default:
                        resp = await fetch('/api/ryouris');
                        break;
                }
                const json = await resp.json();
                setRyouris(json);
            })();
        }
    };
    return (
        <>
            <h2>献立検索フォーム</h2>
            <input type="text" value={word} onChange={(ev) => {
                setWord(ev.currentTarget.value);
            }} />
            <button onClick={handleSearch}>検索</button>
            <span> </span>
            <button onClick={handleAll}>全件表示</button>
            <br/>
            <label>
                <input type="radio" name="option" value="0" defaultChecked={true} onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                料理名
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="1" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                カテゴリー
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="2" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                タグ
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="3" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                カロリー
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="4" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                時間
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="5" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                材料
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="6" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                作り方
            </label>
            <span className="mr-1"></span>
            <label>
                <input type="radio" name="option" value="7" onChange={(ev) => {
                    setOption(parseInt(ev.currentTarget.value));
                }} />
                ユーザ
            </label>
        </>
    );
};

export default Search;