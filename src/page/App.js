import React, { useState, useEffect } from 'react';

import Card from '@component/Card';
import Loading from '@component/Loading';

import iconOracle from '@image/icon-oracle.svg';

import './App.scss';

function App() {
    const [list, setList] = useState([]);
    const [current, setCurrent] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchDetail();
    }, []);

    const fetchDetail = async () => {
        setLoading(true);

        const response = await fetch('/mock/api.json');
        const res = await response.json();

        // 模拟请求等待时间
        setTimeout(() => {
            setLoading(false);
            if (res.flag) {
                setList(res.data);
            }
        }, 2500);
    };

    return (
        <div className="App-container flex-col flex-justify-center">
            <div className="App-header flex-align-center">
                <img src={iconOracle} className="App-header-logo" alt="logo" />
                <span className="App-header-title">Oracle</span>
            </div>
            <div className="App-Card ivu-row">
                {list.map(i => (
                    <div className="ivu-col ivu-col-span-lg-4 ivu-col-span-md-3 ivu-col-span-sm-2 ivu-col-span-xs-1">
                        <Card
                            detail={i}
                            current={current}
                            onClick={() =>
                                setCurrent(i.id === current ? null : i.id)
                            }
                        ></Card>
                    </div>
                ))}
                <Loading loading={loading}></Loading>
            </div>
        </div>
    );
}

export default App;
