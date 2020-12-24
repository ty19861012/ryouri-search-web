import React, {useState, createContext, useContext, useEffect} from 'react';
import RyouriContext from './RyouriContext';

const Regist = () => {
    const {setRyouris} = useContext(RyouriContext);
    const [name, setName] = useState('');
    const [kana, setKana] = useState('');
    const [category, setCategory] = useState('ご飯物');
    const [tags, setTags] = useState('');
    const [kcal, setKcal] = useState(0);
    const [jikan, setJikan] = useState(0);
    const [zairyou, setZairyou] = useState('');
    const [tsukurikata, setTsukuri] = useState('');
    const handleRegist = (ev) => {
        ev.preventDefault();
        const fd = new FormData();
        fd.append('name', name);
        fd.append('yomigana', kana);
        fd.append('category', category);
        fd.append('tags', tags);
        fd.append('kcal', kcal);
        fd.append('jikan', jikan);
        fd.append('zairyou', zairyou);
        fd.append('tsukurikata', tsukurikata);
        (async () => {
            try {
                const resp = await fetch('/api/regist', {
                    method: 'POST',
                    body: fd,
                    headers: {
                        Accept: 'application/json'
                    }
                });
                const json = await resp.json();
                console.log(json);
                const resp2 = await fetch('/api/ryouris');
                const json2 = await resp2.json();
                setRyouris(json2);
            } catch (error) {
                console.error(error);
            }
        })();
    };
    return (
        <>
            <h2>献立登録フォーム</h2>
            <label className="registLbl">料理名</label>
            <input type="text" value={name} onChange={(ev) => {
                setName(ev.currentTarget.value);
            }} />
            <br/>
            <label className="registLbl">読み仮名</label>
            <input type="text" value={kana} onChange={(ev) => {
                setKana(ev.currentTarget.value);
            }} />
            <br/>
            <label className="registLbl">カテゴリー</label>
            <select value={category} onChange={(ev) => {
                setCategory(ev.currentTarget.value);
            }}>
                <option value="ご飯物">ご飯物</option>
                <option value="汁物">汁物</option>
                <option value="煮物">煮物</option>
                <option value="焼き物">焼き物</option>
                <option value="その他">その他</option>
            </select>
            <br/>
            <label className="registLbl">タグ</label>
            <input type="text" value={tags} onChange={(ev) => {
                setTags(ev.currentTarget.value);
            }} />
            <br/>
            <label className="registLbl">カロリー</label>
            <input type="number" value={kcal} onChange={(ev) => {
                setKcal(ev.currentTarget.value);
            }} />
            <br/>
            <label className="registLbl">時間</label>
            <input type="number" value={jikan} onChange={(ev) => {
                setJikan(ev.currentTarget.value);
            }} />
            <br/>
            <label className="registLbl">材料</label>
            <textarea cols="30" rows="3" value={zairyou} onChange={(ev) => {
                setZairyou(ev.currentTarget.value);
            }}></textarea>
            <br/>
            <label className="registLbl">作り方</label>
            <textarea cols="30" rows="3" value={tsukurikata} onChange={(ev) => {
                setTsukuri(ev.currentTarget.value);
            }}></textarea>
            <br/>
            <div className="btnContainer">
                <button onClick={handleRegist}>登録</button>
            </div>
        </>
    );
};

export default Regist;