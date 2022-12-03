import React from 'react';

const test = () => {
    const arrey = [{id: 2, username: 'emon', attendance: {shamim: {status: 'holidy'}}}, {}, {}]
    const sec = {id: 2, username: 'emon', attendance: {shamim: {status: 'holidy'}}}
    console.log(sec.attendance.shamim.status)

    return (
        <div>
            
        </div>
    );
};

export default test;