import React, { useState } from 'react';

import './index.scss';

function App(props) {
    const { loading } = props;

    return loading ? (
        <div className="ivu-spin ivu-spin-large ivu-spin-fix">
            <div className="ivu-spin-main">
                <span className="ivu-spin-dot"></span>
            </div>
        </div>
    ) : null;
}

export default App;
