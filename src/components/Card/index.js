import React, { useState, useMemo } from 'react';

import {
    STATUS_ACTIVE,
    STATUS_SUSPENDED,
    STATUS_TERMINATED
} from '@common/config';
import { dollorFormat, dateFormat } from '@common/utils.js';

import Active from '@image/status-active.svg';
import Suspended from '@image/status-suspended.svg';
import Terminate from '@image/status-terminated.svg';
import dollor from '@image/dollor.svg';

import './index.scss';

const STATUS_MAP = {
    [STATUS_ACTIVE]: ['Active', Active, '#76FCB3'],
    [STATUS_SUSPENDED]: ['Suspended', Suspended, '#FFE500'],
    [STATUS_TERMINATED]: ['Terminate', Terminate, '#FF007A']
};

function App(props) {
    const { detail, current, onClick } = props;
    const [status, icon, color] = STATUS_MAP[detail.status] || 1;
    const { leaseEnd, blockNumber, createdTimestamp, id } = detail;

    // mock 获取价格
    const getCoinPrice = ({ subscriptionId }) =>
        dollorFormat(subscriptionId * 10000 + 200);
    // mock 获取logo
    const getCoinLogo = ({ subscriptionId }) => false;

    const memoizedDate = useMemo(
        () =>
            dateFormat(
                new Date(createdTimestamp).getTime() +
                    3 * (leaseEnd - blockNumber),
                'dd/M/yyyy hh:mm',
                'en'
            ),
        [leaseEnd, blockNumber, createdTimestamp]
    );

    return (
        <div
            className={`Card ${current === id ? 'active' : null}`}
            onClick={onClick}
        >
            <div className="Card-top flex">
                <div className="Card-top-box flex-center">{detail.symbol}</div>
                <div className="Card-top-status flex-center">
                    <img
                        src={icon}
                        alt="logo"
                        style={{ marginRight: '10px' }}
                    />
                    <span style={{ color }}>{status}</span>
                </div>
            </div>
            <div className="Card-content flex">
                <div className="Card-content-left flex-center">
                    <img src={getCoinLogo(detail) || dollor} alt="logo" />
                </div>
                <div className="Card-content-right">
                    <div className="dollor">$ {getCoinPrice(detail)}</div>
                    <span className="date">End: {memoizedDate}</span>
                </div>
            </div>
        </div>
    );
}

export default App;
