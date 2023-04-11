import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import HeaderBodyTwo from '../HeaderBodyTwo/HeaderBodyTwo';


const Statistics = () => {
    const data = [
        {
            name: 'Assignment-1',
            mark: 60,
            yv: 60,
        },
        {
            name: 'Assignment-2',
            mark: 60,
            yv: 30,
        },
        {
            name: 'Assignment-3',
            mark: 58,
            yv: 25,
        },
        {
            name: 'Assignment-4',
            mark: 60,
            yv: 20,
        },
        {
            name: 'Assignment-5',
            mark: 60,
            yv: 15,

        },
        {
            name: 'Assignment-6',
            mark: 60,
            yv: 10,
        },
        {
            name: 'Assignment-7',
            mark: 60,
            yv: 5,
        },
    ];
    return (
        <div  style={{ width: '80%', height: 300,margin:'0 auto' }}>
            <HeaderBodyTwo>Assignment Statistics</HeaderBodyTwo>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="yv"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;