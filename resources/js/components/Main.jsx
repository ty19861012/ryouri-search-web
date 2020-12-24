import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import RyouriContext from './RyouriContext';
import View from './View';
import Search from './Search';
import Yomigana from './Yomigana';
import Regist from './Regist';

const Main = () => {
    const [ryouris, setRyouris] = useState([]);
    useEffect(() => {
        (async () => {
            const resp = await fetch('/api/ryouris');
            const json = await resp.json();
            setRyouris(json);
        })();
    }, []);
    return (
        <div className="container">
            <RyouriContext.Provider value={{ryouris, setRyouris}}>
                <div className="appcontainer">
                    <div className="left">
                        <Search />
                        <hr/>
                        <Yomigana />
                        <hr/>
                        <Regist />
                    </div>
                    <div className="right">
                        <View />
                    </div>
                </div>
            </RyouriContext.Provider>
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById('appContainer'));